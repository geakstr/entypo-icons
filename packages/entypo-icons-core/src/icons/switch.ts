var paths =
  '<path d="M13 3H7a7 7 0 1 0 0 14h6a7 7 0 1 0 0-14zm0 12a5 5 0 1 1 .001-10.001A5 5 0 0 1 13 15z"></path>';
export default {
  icon: "switch",
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
    head += ' id="entypo-icon-switch"';
    head += ' viewBox="0 0 20 20">';
    var tail = "</symbol></svg>";
    return head + paths + tail;
  }
} as {
  readonly icon: "switch";
  readonly paths: string;
  readonly getSvg: () => string;
  readonly getSprite: () => string;
};
