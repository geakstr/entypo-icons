var paths = '<path d="M15 10l-9 5V5l9 5z"></path>';
export default {
  icon: "triangle-right",
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
    head += ' id="entypo-icon-triangle-right"';
    head += ' viewBox="0 0 20 20">';
    var tail = "</symbol></svg>";
    return head + paths + tail;
  }
} as {
  readonly icon: "triangle-right";
  readonly paths: string;
  readonly getSvg: () => string;
  readonly getSprite: () => string;
};
