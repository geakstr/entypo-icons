var paths =
  '<path d="M11 13.824V6.176A2.395 2.395 0 0 0 12.4 4a2.4 2.4 0 1 0-4.8 0c0 .967.576 1.796 1.4 2.176v7.649A2.393 2.393 0 0 0 7.6 16a2.4 2.4 0 1 0 4.8 0c0-.967-.575-1.796-1.4-2.176zM10 2.615a1.384 1.384 0 1 1 0 2.768 1.384 1.384 0 0 1 0-2.768zm0 14.77a1.385 1.385 0 1 1 0-2.77 1.385 1.385 0 0 1 0 2.77z"></path>';
export default {
  icon: "flow-line",
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
    head += ' id="entypo-icon-flow-line"';
    head += ' viewBox="0 0 20 20">';
    var tail = "</symbol></svg>";
    return head + paths + tail;
  }
} as {
  readonly icon: "flow-line";
  readonly paths: string;
  readonly getSvg: () => string;
  readonly getSprite: () => string;
};
