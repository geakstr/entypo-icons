var paths =
  '<path d="M15 0h-4a1 1 0 0 0-1 1l.023.222c1.102 0 2 .897 2 2v11.359L13 13.4l3 3.6V1a1 1 0 0 0-1-1zM9.023 3H5a1 1 0 0 0-1 1v16l3-3.6 3 3.6V4c0-.553-.424-1-.977-1z"></path>';
export default {
  icon: "bookmarks",
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
    head += ' id="entypo-icon-bookmarks"';
    head += ' viewBox="0 0 20 20">';
    var tail = "</symbol></svg>";
    return head + paths + tail;
  }
} as {
  readonly icon: "bookmarks";
  readonly paths: string;
  readonly getSvg: () => string;
  readonly getSprite: () => string;
};
