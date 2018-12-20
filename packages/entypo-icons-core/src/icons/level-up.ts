var paths =
  '<path d="M19 9v7h-3v-6H6v3L1 8.5 6 4v3h11c1.104 0 2 .897 2 2z"></path>';
export default {
  icon: "level-up",
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
    head += ' id="entypo-icon-level-up"';
    head += ' viewBox="0 0 20 20">';
    var tail = "</symbol></svg>";
    return head + paths + tail;
  }
} as {
  readonly icon: "level-up";
  readonly paths: string;
  readonly getSvg: () => string;
  readonly getSprite: () => string;
};
