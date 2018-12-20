var paths =
  '<path d="M6.582 12.141c-.271.268-.709.268-.978 0s-.272-.701 0-.969l3.908-3.83a.697.697 0 0 1 .979 0l3.908 3.83a.68.68 0 0 1 0 .969.697.697 0 0 1-.979 0L10 9l-3.418 3.141z"></path>';
export default {
  icon: "chevron-small-up",
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
    head += ' id="entypo-icon-chevron-small-up"';
    head += ' viewBox="0 0 20 20">';
    var tail = "</symbol></svg>";
    return head + paths + tail;
  }
} as {
  readonly icon: "chevron-small-up";
  readonly paths: string;
  readonly getSvg: () => string;
  readonly getSprite: () => string;
};
