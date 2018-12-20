var paths =
  '<path d="M1 14.742l4.945-.709L5.239 19l5.962-5.985-4.069-4.429L1 14.742zm17.664-9.221c.391-.393.5-.945 0-1.419l-2.826-2.839c-.279-.308-1.021-.392-1.412 0l-3.766 3.78 4.068 4.429 3.936-3.951zm.042 9.772l-14.001-14a.999.999 0 1 0-1.414 1.414l14.001 14a.996.996 0 0 0 1.414 0 .999.999 0 0 0 0-1.414z"></path>';
export default {
  icon: "untag",
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
    head += ' id="entypo-icon-untag"';
    head += ' viewBox="0 0 20 20">';
    var tail = "</symbol></svg>";
    return head + paths + tail;
  }
} as {
  readonly icon: "untag";
  readonly paths: string;
  readonly getSvg: () => string;
  readonly getSprite: () => string;
};
