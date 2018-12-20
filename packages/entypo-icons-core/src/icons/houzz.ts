var paths =
  '<path d="M4 10l6 3-6 3v-6zm6-3l6 3V4l-6 3zm0 13l6-3v-7l-6 3v7zm0-20L4 3v7l6-3V0z"></path>';
export default {
  icon: "houzz",
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
    head += ' id="entypo-icon-houzz"';
    head += ' viewBox="0 0 20 20">';
    var tail = "</symbol></svg>";
    return head + paths + tail;
  }
} as {
  readonly icon: "houzz";
  readonly paths: string;
  readonly getSvg: () => string;
  readonly getSprite: () => string;
};
