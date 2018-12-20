var paths =
  '<path d="M4.1 14.1L1 17l2 2 2.9-3.1L8 18v-6H2l2.1 2.1zM19 3l-2-2-2.9 3.1L12 2v6h6l-2.1-2.1L19 3z"></path>';
export default {
  icon: "resize-100",
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
    head += ' id="entypo-icon-resize-100"';
    head += ' viewBox="0 0 20 20">';
    var tail = "</symbol></svg>";
    return head + paths + tail;
  }
} as {
  readonly icon: "resize-100";
  readonly paths: string;
  readonly getSvg: () => string;
  readonly getSprite: () => string;
};
