var paths =
  '<path d="M17 1l-.002 13c0 1.243-1.301 3-3.748 3-1.243 0-2.25-.653-2.25-1.875 0-1.589 1.445-2.55 3-2.55.432 0 .754.059 1 .123V5.364L8 6.637V16h-.002c0 1.243-1.301 3-3.748 3C3.007 19 2 18.347 2 17.125c0-1.589 1.445-2.55 3-2.55.432 0 .754.059 1 .123V3l11-2z"></path>';
export default {
  icon: "beamed-note",
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
    head += ' id="entypo-icon-beamed-note"';
    head += ' viewBox="0 0 20 20">';
    var tail = "</symbol></svg>";
    return head + paths + tail;
  }
} as {
  readonly icon: "beamed-note";
  readonly paths: string;
  readonly getSvg: () => string;
  readonly getSprite: () => string;
};
