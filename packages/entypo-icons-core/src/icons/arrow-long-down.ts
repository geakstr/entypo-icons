var paths = '<path d="M10 19.25L4.5 14H8V1h4v13h3.5L10 19.25z"></path>';
export default {
  icon: "arrow-long-down",
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
    head += ' id="entypo-icon-arrow-long-down"';
    head += ' viewBox="0 0 20 20">';
    var tail = "</symbol></svg>";
    return head + paths + tail;
  }
} as {
  readonly icon: "arrow-long-down";
  readonly paths: string;
  readonly getSvg: () => string;
  readonly getSprite: () => string;
};
