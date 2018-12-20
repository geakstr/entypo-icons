var paths =
  '<path d="M10 6L7 9h2v8h2V9h2l-3-3zm8-2c0-.553-.048-1-.6-1H2.6c-.552 0-.6.447-.6 1s.048 1 .6 1h14.8c.552 0 .6-.447.6-1z"></path>';
export default {
  icon: "align-top",
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
    head += ' id="entypo-icon-align-top"';
    head += ' viewBox="0 0 20 20">';
    var tail = "</symbol></svg>";
    return head + paths + tail;
  }
} as {
  readonly icon: "align-top";
  readonly paths: string;
  readonly getSvg: () => string;
  readonly getSprite: () => string;
};
