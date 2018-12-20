var paths = '<path d="M10 1L5 8h10l-5-7zm0 18l5-7H5l5 7z"></path>';
export default {
  icon: "select-arrows",
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
    head += ' id="entypo-icon-select-arrows"';
    head += ' viewBox="0 0 20 20">';
    var tail = "</symbol></svg>";
    return head + paths + tail;
  }
} as {
  readonly icon: "select-arrows";
  readonly paths: string;
  readonly getSvg: () => string;
  readonly getSprite: () => string;
};
