var paths =
  '<path d="M18.75 5S18 5 18 5.75v8.5s0 .75.75.75H19v2h-6v-2h1V5.7h-.1L10.835 17H8.137L5.1 5.7H5V15h1v2H1v-2h.25S2 15 2 14.25v-8.5S2 5 1.25 5H1V3h6.634l2.327 8.66h.077L12.386 3H19v2h-.25z"></path>';
export default {
  icon: "medium",
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
    head += ' id="entypo-icon-medium"';
    head += ' viewBox="0 0 20 20">';
    var tail = "</symbol></svg>";
    return head + paths + tail;
  }
} as {
  readonly icon: "medium";
  readonly paths: string;
  readonly getSvg: () => string;
  readonly getSprite: () => string;
};
