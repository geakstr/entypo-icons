var paths =
  '<path d="M11 0H3a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h5v2h2v-2H8.001v-2H10v-2H8v2H4V2h6v4h2V1a1 1 0 0 0-1-1zM8 7v1h2V6H9a1 1 0 0 0-1 1zm4 13h2v-2h-2v2zm0-12h2V6h-2v2zM8 19a1 1 0 0 0 1 1h1v-2H8v1zm9-13h-1v2h2V7a1 1 0 0 0-1-1zm-1 14h1a1 1 0 0 0 1-1v-1h-2v2zm0-8h2v-2h-2v2zm0 4h2v-2h-2v2z"></path>';
export default {
  icon: "copy",
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
    head += ' id="entypo-icon-copy"';
    head += ' viewBox="0 0 20 20">';
    var tail = "</symbol></svg>";
    return head + paths + tail;
  }
} as {
  readonly icon: "copy";
  readonly paths: string;
  readonly getSvg: () => string;
  readonly getSprite: () => string;
};
