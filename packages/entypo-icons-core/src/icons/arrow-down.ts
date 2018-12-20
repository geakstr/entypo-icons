var paths = '<path d="M10 17.5L3.5 11H7V3h6v8h3.5L10 17.5z"></path>';
export default {
  icon: "arrow-down",
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
    head += ' id="entypo-icon-arrow-down"';
    head += ' viewBox="0 0 20 20">';
    var tail = "</symbol></svg>";
    return head + paths + tail;
  }
} as {
  readonly icon: "arrow-down";
  readonly paths: string;
  readonly getSvg: () => string;
  readonly getSprite: () => string;
};
