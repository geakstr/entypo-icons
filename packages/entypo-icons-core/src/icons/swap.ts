var paths =
  '<path d="M14 5H4V3L0 6.5 4 10V8h10V5zm6 8.5L16 10v2H6v3h10v2l4-3.5z"></path>';
export default {
  icon: "swap",
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
    head += ' id="entypo-icon-swap"';
    head += ' viewBox="0 0 20 20">';
    var tail = "</symbol></svg>";
    return head + paths + tail;
  }
} as {
  readonly icon: "swap";
  readonly paths: string;
  readonly getSvg: () => string;
  readonly getSprite: () => string;
};
