var paths =
  '<path d="M9.999.8A9.2 9.2 0 0 0 .8 10.001a9.2 9.2 0 0 0 18.399 0A9.2 9.2 0 0 0 9.999.8zM10 13.001a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"></path>';
export default {
  icon: "vinyl",
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
    head += ' id="entypo-icon-vinyl"';
    head += ' viewBox="0 0 20 20">';
    var tail = "</symbol></svg>";
    return head + paths + tail;
  }
} as {
  readonly icon: "vinyl";
  readonly paths: string;
  readonly getSvg: () => string;
  readonly getSprite: () => string;
};
