var paths = '<path d="M.75 10L6 4.5V8h13v4H6v3.5L.75 10z"></path>';
export default {
  icon: "arrow-long-left",
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
    head += ' id="entypo-icon-arrow-long-left"';
    head += ' viewBox="0 0 20 20">';
    var tail = "</symbol></svg>";
    return head + paths + tail;
  }
} as {
  readonly icon: "arrow-long-left";
  readonly paths: string;
  readonly getSvg: () => string;
  readonly getSprite: () => string;
};
