var paths =
  '<path d="M12 11.874v4.357l7-6.69-7-6.572v3.983c-8.775 0-11 9.732-11 9.732 2.484-4.388 6.237-4.81 11-4.81z"></path>';
export default {
  icon: "forward",
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
    head += ' id="entypo-icon-forward"';
    head += ' viewBox="0 0 20 20">';
    var tail = "</symbol></svg>";
    return head + paths + tail;
  }
} as {
  readonly icon: "forward";
  readonly paths: string;
  readonly getSvg: () => string;
  readonly getSprite: () => string;
};
