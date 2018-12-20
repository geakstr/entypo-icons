var paths =
  '<path d="M10 .4C4.698.4.4 4.698.4 10a9.6 9.6 0 1 0 19.2-.001C19.6 4.698 15.301.4 10 .4zm0 17.199a7.6 7.6 0 1 1 0-15.2V10l6.792-3.396A7.548 7.548 0 0 1 17.6 10a7.6 7.6 0 0 1-7.6 7.599z"></path>';
export default {
  icon: "time-slot",
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
    head += ' id="entypo-icon-time-slot"';
    head += ' viewBox="0 0 20 20">';
    var tail = "</symbol></svg>";
    return head + paths + tail;
  }
} as {
  readonly icon: "time-slot";
  readonly paths: string;
  readonly getSvg: () => string;
  readonly getSprite: () => string;
};
