var paths =
  '<path d="M6 13.5l4 2.5 4-2.5V5H6v8.5zM4.5 10a2 2 0 1 0-4 0 2 2 0 0 0 4 0zm13-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM4.485 6.199A6.71 6.71 0 0 1 10 3.3a6.715 6.715 0 0 1 5.456 2.823 1.4 1.4 0 0 0 2.281-1.624A9.518 9.518 0 0 0 10 .5a9.506 9.506 0 0 0-7.817 4.107 1.402 1.402 0 0 0 .355 1.948 1.401 1.401 0 0 0 1.947-.356zm10.971 7.678A6.713 6.713 0 0 1 10 16.7a6.71 6.71 0 0 1-5.515-2.899 1.4 1.4 0 0 0-2.302 1.592A9.506 9.506 0 0 0 10 19.5a9.518 9.518 0 0 0 7.737-3.999 1.401 1.401 0 0 0-2.281-1.624z"></path>';
export default {
  icon: "sports-club",
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
    head += ' id="entypo-icon-sports-club"';
    head += ' viewBox="0 0 20 20">';
    var tail = "</symbol></svg>";
    return head + paths + tail;
  }
} as {
  readonly icon: "sports-club";
  readonly paths: string;
  readonly getSvg: () => string;
  readonly getSprite: () => string;
};
