var paths =
  '<path d="M18 4H9v5h10V5a1 1 0 0 0-1-1zM1 15c0 .553.248 1 .8 1H7v-5H1v4zm8 1h9a1 1 0 0 0 1-1v-4H9v5zM1 5v4h6V4H1.8c-.552 0-.8.447-.8 1z"></path>';
export default {
  icon: "sweden",
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
    head += ' id="entypo-icon-sweden"';
    head += ' viewBox="0 0 20 20">';
    var tail = "</symbol></svg>";
    return head + paths + tail;
  }
} as {
  readonly icon: "sweden";
  readonly paths: string;
  readonly getSvg: () => string;
  readonly getSprite: () => string;
};
