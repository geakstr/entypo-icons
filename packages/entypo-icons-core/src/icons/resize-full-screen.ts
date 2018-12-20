var paths =
  '<path d="M6.987 10.987l-2.931 3.031L2 11.589V18h6.387l-2.43-2.081 3.03-2.932-2-2zM11.613 2l2.43 2.081-3.03 2.932 2 2 2.931-3.031L18 8.411V2h-6.387z"></path>';
export default {
  icon: "resize-full-screen",
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
    head += ' id="entypo-icon-resize-full-screen"';
    head += ' viewBox="0 0 20 20">';
    var tail = "</symbol></svg>";
    return head + paths + tail;
  }
} as {
  readonly icon: "resize-full-screen";
  readonly paths: string;
  readonly getSvg: () => string;
  readonly getSprite: () => string;
};
