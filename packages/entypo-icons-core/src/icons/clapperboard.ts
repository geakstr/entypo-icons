var paths =
  '<path d="M20 3v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h1l3 3h2.5l-3-3h3l3 3H13l-3-3h3l3 3h2.5l-3-3H19a1 1 0 0 1 1 1z"></path>';
export default {
  icon: "clapperboard",
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
    head += ' id="entypo-icon-clapperboard"';
    head += ' viewBox="0 0 20 20">';
    var tail = "</symbol></svg>";
    return head + paths + tail;
  }
} as {
  readonly icon: "clapperboard";
  readonly paths: string;
  readonly getSvg: () => string;
  readonly getSprite: () => string;
};
