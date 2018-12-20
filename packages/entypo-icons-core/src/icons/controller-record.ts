var paths = '<path d="M10 3a7 7 0 1 0 .001 13.999A7 7 0 0 0 10 3z"></path>';
export default {
  icon: "controller-record",
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
    head += ' id="entypo-icon-controller-record"';
    head += ' viewBox="0 0 20 20">';
    var tail = "</symbol></svg>";
    return head + paths + tail;
  }
} as {
  readonly icon: "controller-record";
  readonly paths: string;
  readonly getSvg: () => string;
  readonly getSprite: () => string;
};
