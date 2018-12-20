var paths = '<path d="M2.5 10H6V3h8v7h3.5L10 17.5 2.5 10z"></path>';
export default {
  icon: "arrow-bold-down",
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
    head += ' id="entypo-icon-arrow-bold-down"';
    head += ' viewBox="0 0 20 20">';
    var tail = "</symbol></svg>";
    return head + paths + tail;
  }
} as {
  readonly icon: "arrow-bold-down";
  readonly paths: string;
  readonly getSvg: () => string;
  readonly getSprite: () => string;
};
