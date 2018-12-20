var paths =
  '<path d="M11 7v2H3v2h8v2l3-3-3-3zm4-4.4v14.8c0 .551.448.6 1 .6.553 0 1-.049 1-.6V2.6c0-.553-.447-.6-1-.6-.552 0-1 .047-1 .6z"></path>';
export default {
  icon: "align-right",
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
    head += ' id="entypo-icon-align-right"';
    head += ' viewBox="0 0 20 20">';
    var tail = "</symbol></svg>";
    return head + paths + tail;
  }
} as {
  readonly icon: "align-right";
  readonly paths: string;
  readonly getSvg: () => string;
  readonly getSprite: () => string;
};
