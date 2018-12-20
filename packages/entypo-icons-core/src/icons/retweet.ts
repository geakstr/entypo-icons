var paths =
  '<path d="M5 13V8h2L3.5 4 0 8h2v6a2 2 0 0 0 2 2h9.482l-2.638-3H5zm4.156-6L6.518 4H16c1.104 0 2 .897 2 2v6h2l-3.5 4-3.5-4h2V7H9.156z"></path>';
export default {
  icon: "retweet",
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
    head += ' id="entypo-icon-retweet"';
    head += ' viewBox="0 0 20 20">';
    var tail = "</symbol></svg>";
    return head + paths + tail;
  }
} as {
  readonly icon: "retweet";
  readonly paths: string;
  readonly getSvg: () => string;
  readonly getSprite: () => string;
};
