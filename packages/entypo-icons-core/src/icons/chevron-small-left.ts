var paths =
  '<path d="M12.141 13.418a.695.695 0 0 1 0 .978.68.68 0 0 1-.969 0l-3.83-3.908a.697.697 0 0 1 0-.979l3.83-3.908a.68.68 0 0 1 .969 0 .695.695 0 0 1 0 .978L9 10l3.141 3.418z"></path>';
export default {
  icon: "chevron-small-left",
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
    head += ' id="entypo-icon-chevron-small-left"';
    head += ' viewBox="0 0 20 20">';
    var tail = "</symbol></svg>";
    return head + paths + tail;
  }
} as {
  readonly icon: "chevron-small-left";
  readonly paths: string;
  readonly getSvg: () => string;
  readonly getSprite: () => string;
};
