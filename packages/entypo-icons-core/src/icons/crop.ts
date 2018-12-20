var paths =
  '<path d="M6 14V1H4v3H1v2h3v8c0 1.1.899 2 2 2h8v3h2v-3h3v-2H6zm8-1h2V6c0-1.1-.899-2-2-2H7v2h7v7z"></path>';
export default {
  icon: "crop",
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
    head += ' id="entypo-icon-crop"';
    head += ' viewBox="0 0 20 20">';
    var tail = "</symbol></svg>";
    return head + paths + tail;
  }
} as {
  readonly icon: "crop";
  readonly paths: string;
  readonly getSvg: () => string;
  readonly getSprite: () => string;
};
