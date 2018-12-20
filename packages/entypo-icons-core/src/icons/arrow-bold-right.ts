var paths = '<path d="M17.5 10L10 17.5V14H3V6h7V2.5l7.5 7.5z"></path>';
export default {
  icon: "arrow-bold-right",
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
    head += ' id="entypo-icon-arrow-bold-right"';
    head += ' viewBox="0 0 20 20">';
    var tail = "</symbol></svg>";
    return head + paths + tail;
  }
} as {
  readonly icon: "arrow-bold-right";
  readonly paths: string;
  readonly getSvg: () => string;
  readonly getSprite: () => string;
};
