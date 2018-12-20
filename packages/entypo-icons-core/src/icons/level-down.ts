var paths =
  '<path d="M1 12V5h3v6h10V8l5 4.5-5 4.5v-3H3a2 2 0 0 1-2-2z"></path>';
export default {
  icon: "level-down",
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
    head += ' id="entypo-icon-level-down"';
    head += ' viewBox="0 0 20 20">';
    var tail = "</symbol></svg>";
    return head + paths + tail;
  }
} as {
  readonly icon: "level-down";
  readonly paths: string;
  readonly getSvg: () => string;
  readonly getSprite: () => string;
};
