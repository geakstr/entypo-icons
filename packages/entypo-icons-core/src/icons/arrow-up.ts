var paths = '<path d="M10 2.5L16.5 9H13v8H7V9H3.5L10 2.5z"></path>';
export default {
  icon: "arrow-up",
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
    head += ' id="entypo-icon-arrow-up"';
    head += ' viewBox="0 0 20 20">';
    var tail = "</symbol></svg>";
    return head + paths + tail;
  }
} as {
  readonly icon: "arrow-up";
  readonly paths: string;
  readonly getSvg: () => string;
  readonly getSprite: () => string;
};
