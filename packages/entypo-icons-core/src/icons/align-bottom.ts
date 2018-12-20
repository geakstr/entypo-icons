var paths =
  '<path d="M13 11h-2V3H9v8H7l3 3 3-3zm4.4 4H2.6c-.552 0-.6.447-.6 1 0 .553.048 1 .6 1h14.8c.552 0 .6-.447.6-1 0-.553-.048-1-.6-1z"></path>';
export default {
  icon: "align-bottom",
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
    head += ' id="entypo-icon-align-bottom"';
    head += ' viewBox="0 0 20 20">';
    var tail = "</symbol></svg>";
    return head + paths + tail;
  }
} as {
  readonly icon: "align-bottom";
  readonly paths: string;
  readonly getSvg: () => string;
  readonly getSprite: () => string;
};
