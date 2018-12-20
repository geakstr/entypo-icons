var paths =
  '<path d="M10.86 11.995l2.525 6.08L11.17 19l-2.525-6.05L5 16.625V1.1l10.946 10.888-5.086.006z"></path>';
export default {
  icon: "mouse-pointer",
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
    head += ' id="entypo-icon-mouse-pointer"';
    head += ' viewBox="0 0 20 20">';
    var tail = "</symbol></svg>";
    return head + paths + tail;
  }
} as {
  readonly icon: "mouse-pointer";
  readonly paths: string;
  readonly getSvg: () => string;
  readonly getSprite: () => string;
};
