var paths = '<path d="M10 .75L15.5 6H12v13H8V6H4.5L10 .75z"></path>';
export default {
  icon: "arrow-long-up",
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
    head += ' id="entypo-icon-arrow-long-up"';
    head += ' viewBox="0 0 20 20">';
    var tail = "</symbol></svg>";
    return head + paths + tail;
  }
} as {
  readonly icon: "arrow-long-up";
  readonly paths: string;
  readonly getSvg: () => string;
  readonly getSprite: () => string;
};
