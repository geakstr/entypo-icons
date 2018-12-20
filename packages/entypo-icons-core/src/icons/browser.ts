var paths =
  '<path d="M18 2H2C.9 2 0 2.9 0 4v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM4.5 3.75a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5zm-2.75.75a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0zM18 16H2V7h16v9zm0-11H6V4h12.019L18 5z"></path>';
export default {
  icon: "browser",
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
    head += ' id="entypo-icon-browser"';
    head += ' viewBox="0 0 20 20">';
    var tail = "</symbol></svg>";
    return head + paths + tail;
  }
} as {
  readonly icon: "browser";
  readonly paths: string;
  readonly getSvg: () => string;
  readonly getSprite: () => string;
};
