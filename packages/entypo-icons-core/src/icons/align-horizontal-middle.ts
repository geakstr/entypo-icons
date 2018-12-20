var paths =
  '<path d="M8 10L5 7v2H1v2h4v2l3-3zm7 3v-2h4V9h-4V7l-3 3 3 3zm-5 5c.553 0 1-.049 1-.6V2.6c0-.553-.447-.6-1-.6-.552 0-1 .047-1 .6v14.8c0 .551.448.6 1 .6z"></path>';
export default {
  icon: "align-horizontal-middle",
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
    head += ' id="entypo-icon-align-horizontal-middle"';
    head += ' viewBox="0 0 20 20">';
    var tail = "</symbol></svg>";
    return head + paths + tail;
  }
} as {
  readonly icon: "align-horizontal-middle";
  readonly paths: string;
  readonly getSvg: () => string;
  readonly getSprite: () => string;
};
