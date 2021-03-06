var paths =
  '<path d="M16.8 3.2C15 1.3 12.7.4 10 .4s-4.9.9-6.8 2.8C1.3 5.1.4 7.4.4 10c0 2.6.9 4.9 2.8 6.8 1.9 1.9 4.1 2.8 6.8 2.8 2.6 0 4.9-1 6.9-2.9 1.8-1.8 2.7-4.1 2.7-6.7 0-2.7-.9-5-2.8-6.8zm-1.2 12.3c-1.6 1.6-3.5 2.4-5.6 2.4-2.1 0-4-.8-5.6-2.3C2.9 14 2.1 12.1 2.1 10c0-2.1.8-4 2.4-5.6C6 2.9 7.8 2.1 10 2.1s4 .8 5.6 2.3c1.5 1.5 2.3 3.4 2.3 5.6 0 2.2-.8 4-2.3 5.5zM8.1 7.3H5.5v5.3h1.3v-1.7h1c1.8 0 2.2-1.1 2.2-1.8.1-1.1-.4-1.8-1.9-1.8zm-.2 2.6H6.8V8.3h1.1c.6 0 .9.3.9.8 0 .4-.3.8-.9.8zm4.6-2.6h-2.1v5.3h2.1c1.6 0 2.7-.8 2.7-2.7 0-1.8-1.1-2.6-2.7-2.6zm0 4.2h-.8V8.4h.8c1 0 1.4.7 1.4 1.5 0 .9-.4 1.6-1.4 1.6z"></path>';
export default {
  icon: "creative-commons-public-domain",
  paths: paths,
  getSvg: function() {
    var head = '<svg xmlns="http://www.w3.org/2000/svg"';
    head += ' viewBox="0 0 20 20">';
    var tail = "</svg>";
    return head + paths + tail;
  },
  getSprite: function() {
    var head = '<svg xmlns="http://www.w3.org/2000/svg">';
    head += "<symbol";
    head += ' id="entypo-icon-creative-commons-public-domain"';
    head += ' viewBox="0 0 20 20">';
    var tail = "</symbol></svg>";
    return head + paths + tail;
  }
} as {
  readonly icon: "creative-commons-public-domain";
  readonly paths: string;
  readonly getSvg: () => string;
  readonly getSprite: () => string;
};
