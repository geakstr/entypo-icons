const fs = require("fs-extra");
const path = require("path");
const cheerio = require("cheerio");
const prettier = require("prettier");
const { execSync } = require("child_process");

const prettify = source => {
  return prettier.format(source, {
    parser: "typescript"
  });
};

fs.removeSync(`${__dirname}/dist`), fs.mkdirSync(`${__dirname}/dist`);
["package.json", "package-lock.json"].forEach(file => {
  fs.copyFileSync(`${__dirname}/${file}`, `${__dirname}/dist/${file}`);
});

// Parsing
const svgsDir = path.resolve(`${__dirname}/src/svgs`);
const svgs = fs
  .readdirSync(svgsDir)
  .filter(file => path.extname(file) === ".svg")
  .map(file => {
    const iconname = file.replace(".svg", "");
    const body = fs.readFileSync(`${svgsDir}/${file}`, {
      encoding: "utf8"
    });
    const svg = cheerio.load(body)("svg");
    const children = svg.html();
    const viewBox = svg.attr("viewBox");
    const symbol = `<symbol id="entypo-icon-${iconname}" viewBox="${viewBox}">${svg.html()}</symbol>`;
    return { file, iconname, symbol, svg: body, children, viewBox };
  });

// Sprite build
(() => {
  const sprite = [
    `<svg xmlns="http://www.w3.org/2000/svg">`,
    svgs.map(({ symbol }) => symbol).join(""),
    `</svg>`
  ].join("");
  const srcCode = `const svg = '${sprite}';\nexport default svg;`;
  const cjsCode = `"use strict";module.exports='${sprite}';`;
  const esCode = `export default'${sprite}';`;
  fs.writeFileSync(`${__dirname}/src/sprite.svg`, sprite, {
    encoding: "utf8"
  });
  fs.writeFileSync(`${__dirname}/src/sprite.ts`, prettify(srcCode), {
    encoding: "utf8"
  });
  fs.writeFileSync(`${__dirname}/dist/sprite.svg`, sprite, {
    encoding: "utf8"
  });
  fs.writeFileSync(`${__dirname}/dist/sprite.js`, cjsCode, {
    encoding: "utf8"
  });
  fs.writeFileSync(`${__dirname}/dist/sprite.es.js`, esCode, {
    encoding: "utf8"
  });
})();

// Icons names composite type generation
(() => {
  const target = `${__dirname}/src/EntypoIconName.ts`;
  const iconsnames = Object.keys(
    svgs.reduce((map, { iconname }) => {
      map[iconname] = iconname;
      return map;
    }, {})
  )
    .sort()
    .map(iconname => `"${iconname}"`)
    .join(" | ");
  fs.writeFileSync(
    target,
    prettify(`export type EntypoIconName = ${iconsnames}`),
    { encoding: "utf8" }
  );
})();

// Each icon build
(() => {
  const src = `${__dirname}/src/icons`;
  const dist = `${__dirname}/dist/icons`;
  fs.removeSync(src), fs.mkdirSync(src);
  fs.removeSync(dist), fs.mkdirSync(dist);
  svgs.forEach(icon => {
    const sprite = [
      `<svg xmlns="http://www.w3.org/2000/svg">`,
      `<symbol id="entypo-icon-${icon.iconname}" viewBox="${icon.viewBox}">${
        icon.children
      }</symbol>`,
      `</svg>`
    ].join("");
    const exp = `{icon:"${icon.iconname}",html:'${sprite}'}`;
    const srcCode = `export default ${exp} as { icon:"${
      icon.iconname
    }", html: string };`;
    const cjsCode = `"use strict";module.exports=${exp};`;
    const esCode = `export default${exp};`;
    fs.writeFileSync(`${src}/${icon.iconname}.ts`, prettify(srcCode), {
      encoding: "utf8"
    });
    fs.writeFileSync(`${dist}/${icon.iconname}.svg`, icon.svg, {
      encoding: "utf8"
    });
    fs.writeFileSync(`${dist}/${icon.iconname}.js`, cjsCode, {
      encoding: "utf8"
    });
    fs.writeFileSync(`${dist}/${icon.iconname}.es.js`, esCode, {
      encoding: "utf8"
    });
  });
})();

(() => {
  execSync("rollup --config");
})();
