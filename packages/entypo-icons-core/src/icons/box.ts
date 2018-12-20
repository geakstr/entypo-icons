var paths =
  '<path d="M18.399 2H1.6c-.332 0-.6.267-.6.6V5h18V2.6a.6.6 0 0 0-.601-.6zM2 16.6c0 .77.629 1.4 1.399 1.4h13.2c.77 0 1.4-.631 1.4-1.4V6H2v10.6zM7 8h6v2H7V8z"></path>';
export default {
  icon: "box",
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
    head += ' id="entypo-icon-box"';
    head += ' viewBox="0 0 20 20">';
    var tail = "</symbol></svg>";
    return head + paths + tail;
  }
} as {
  readonly icon: "box";
  readonly paths: string;
  readonly getSvg: () => string;
  readonly getSprite: () => string;
};
