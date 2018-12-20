var paths =
  '<path d="M10 2C5.327 2 .7 8.481.7 14.422.7 15.799 5.234 18 10 18s9.3-2.201 9.3-3.578C19.3 8.481 14.673 2 10 2zm.006 13.615c-5.198 0-6.673-2.068-6.673-2.722 0-1.287 2.13-4.485 2.906-4.485.719 0 1.542 1.811 2.314 1.811 1.241 0 2.567-3.954 3.579-3.954s4.601 5.178 4.601 6.749c0 .271-1.084 2.601-6.727 2.601z"></path>';
export default {
  icon: "basecamp",
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
    head += ' id="entypo-icon-basecamp"';
    head += ' viewBox="0 0 20 20">';
    var tail = "</symbol></svg>";
    return head + paths + tail;
  }
} as {
  readonly icon: "basecamp";
  readonly paths: string;
  readonly getSvg: () => string;
  readonly getSprite: () => string;
};
