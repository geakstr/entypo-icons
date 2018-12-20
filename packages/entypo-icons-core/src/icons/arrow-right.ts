var paths = '<path d="M11 16.5V13H3V7h8V3.5l6.5 6.5-6.5 6.5z"></path>';
export default {
  icon: "arrow-right",
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
    head += ' id="entypo-icon-arrow-right"';
    head += ' viewBox="0 0 20 20">';
    var tail = "</symbol></svg>";
    return head + paths + tail;
  }
} as {
  readonly icon: "arrow-right";
  readonly paths: string;
  readonly getSvg: () => string;
  readonly getSprite: () => string;
};
