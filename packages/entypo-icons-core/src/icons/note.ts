var paths =
  '<path d="M14.971 9.438c-.422.656-.646.375-.52 0 .336-.993.348-4.528-2.451-4.969L11.998 16c0 1.657-1.735 4-4.998 4-1.657 0-3-.871-3-2.5 0-2.119 1.927-3.4 4-3.4 1.328 0 2 .4 2 .4V0h2c0 2.676 5.986 4.744 2.971 9.438z"></path>';
export default {
  icon: "note",
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
    head += ' id="entypo-icon-note"';
    head += ' viewBox="0 0 20 20">';
    var tail = "</symbol></svg>";
    return head + paths + tail;
  }
} as {
  readonly icon: "note";
  readonly paths: string;
  readonly getSvg: () => string;
  readonly getSprite: () => string;
};
