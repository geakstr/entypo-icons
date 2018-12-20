var paths = '<path d="M14 15.5V12H1V8h13V4.5l5.25 5.5L14 15.5z"></path>';
export default {
  icon: "arrow-long-right",
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
    head += ' id="entypo-icon-arrow-long-right"';
    head += ' viewBox="0 0 20 20">';
    var tail = "</symbol></svg>";
    return head + paths + tail;
  }
} as {
  readonly icon: "arrow-long-right";
  readonly paths: string;
  readonly getSvg: () => string;
  readonly getSprite: () => string;
};
