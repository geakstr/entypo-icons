var paths =
  '<path d="M17 8H5.021l8.974-5.265L13 1 1.736 7.571A1.482 1.482 0 0 0 1 8.852V17a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2zm-1.5 9a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 15.5 17zm1.5-5H3v-2h14v2z"></path>';
export default {
  icon: "radio",
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
    head += ' id="entypo-icon-radio"';
    head += ' viewBox="0 0 20 20">';
    var tail = "</symbol></svg>";
    return head + paths + tail;
  }
} as {
  readonly icon: "radio";
  readonly paths: string;
  readonly getSvg: () => string;
  readonly getSprite: () => string;
};
