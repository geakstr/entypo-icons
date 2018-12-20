var paths = '<path d="M2.5 10L9 3.5V7h8v6H9v3.5L2.5 10z"></path>';
export default {
  icon: "arrow-left",
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
    head += ' id="entypo-icon-arrow-left"';
    head += ' viewBox="0 0 20 20">';
    var tail = "</symbol></svg>";
    return head + paths + tail;
  }
} as {
  readonly icon: "arrow-left";
  readonly paths: string;
  readonly getSvg: () => string;
  readonly getSprite: () => string;
};
