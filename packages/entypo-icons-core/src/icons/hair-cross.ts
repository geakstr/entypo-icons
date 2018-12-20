var paths =
  '<path d="M10 .4C4.697.4.399 4.698.399 10A9.6 9.6 0 0 0 10 19.601c5.301 0 9.6-4.298 9.6-9.601 0-5.302-4.299-9.6-9.6-9.6zm1 17.125V13H9v4.525A7.589 7.589 0 0 1 2.473 11H7V9H2.473A7.589 7.589 0 0 1 9 2.475V7h2V2.475A7.59 7.59 0 0 1 17.525 9H13v2h4.525A7.592 7.592 0 0 1 11 17.525z"></path>';
export default {
  icon: "hair-cross",
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
    head += ' id="entypo-icon-hair-cross"';
    head += ' viewBox="0 0 20 20">';
    var tail = "</symbol></svg>";
    return head + paths + tail;
  }
} as {
  readonly icon: "hair-cross";
  readonly paths: string;
  readonly getSvg: () => string;
  readonly getSprite: () => string;
};
