var paths =
  '<path d="M10.001 8.2a2.2 2.2 0 1 0-.002-4.4 2.2 2.2 0 0 0 .002 4.4zm0 3.6a2.2 2.2 0 1 0 0 4.402 2.2 2.2 0 0 0 0-4.402z"></path>';
export default {
  icon: "dots-two-vertical",
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
    head += ' id="entypo-icon-dots-two-vertical"';
    head += ' viewBox="0 0 20 20">';
    var tail = "</symbol></svg>";
    return head + paths + tail;
  }
} as {
  readonly icon: "dots-two-vertical";
  readonly paths: string;
  readonly getSvg: () => string;
  readonly getSprite: () => string;
};
