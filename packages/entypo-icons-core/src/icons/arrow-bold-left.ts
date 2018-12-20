var paths = '<path d="M10 2.5V6h7v8h-7v3.5L2.5 10 10 2.5z"></path>';
export default {
  icon: "arrow-bold-left",
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
    head += ' id="entypo-icon-arrow-bold-left"';
    head += ' viewBox="0 0 20 20">';
    var tail = "</symbol></svg>";
    return head + paths + tail;
  }
} as {
  readonly icon: "arrow-bold-left";
  readonly paths: string;
  readonly getSvg: () => string;
  readonly getSprite: () => string;
};
