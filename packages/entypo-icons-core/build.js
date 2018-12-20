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
    const paths = svg.html();
    const viewBox = svg.attr("viewBox");
    const symbol = `<symbol id="entypo-icon-${iconname}" viewBox="${viewBox}">${svg.html()}</symbol>`;
    return { file, iconname, symbol, svg: body, paths, viewBox };
  });

// Sprite build
(() => {
  const sprite = [
    `<svg xmlns="http://www.w3.org/2000/svg">`,
    svgs.map(({ symbol }) => symbol).join(""),
    `</svg>`
  ].join("");
  const srcCode = `const svg = '${sprite}';\nexport default svg;`;
  const cjsCode = `"use strict";\nmodule.exports = '${sprite}';`;
  const esCode = `export default '${sprite}';`;
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
    const exp = exportStatement => `var paths = '${icon.paths}';
${exportStatement} {
  icon: '${icon.iconname}',
  paths: paths,
  getSvg: function() {
    var head = '<svg xmlns="http://www.w3.org/2000/svg"';
    head += ' viewBox="${icon.viewBox}">';
    var tail = '</svg>';
    return head + paths + tail;
  },
  getSprite: function() {
    var head = '<svg xmlns="http://www.w3.org/2000/svg">';
    head += '<symbol';
    head += ' id="entypo-icon-${icon.iconname}"';
    head += ' viewBox="${icon.viewBox}">';
    var tail = '</symbol></svg>';
    return head + paths + tail;
  }
}`;
    const as = ` as {
  readonly icon: "${icon.iconname}",
  readonly paths: string,
  readonly getSvg: () => string,
  readonly getSprite: () => string;
}`;
    const srcCode = exp("export default") + as;
    const cjsCode = '"use strict";\n' + exp("module.exports = ");
    const esCode = exp("export default");
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
