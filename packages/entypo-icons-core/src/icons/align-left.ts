var paths =
  '<path d="M6 10l3 3v-2h8V9H9V7l-3 3zM4 2c-.553 0-1 .047-1 .6v14.8c0 .551.447.6 1 .6.552 0 1-.049 1-.6V2.6c0-.553-.448-.6-1-.6z"></path>';
export default {
  icon: "align-left",
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
    head += ' id="entypo-icon-align-left"';
    head += ' viewBox="0 0 20 20">';
    var tail = "</symbol></svg>";
    return head + paths + tail;
  }
} as {
  readonly icon: "align-left";
  readonly paths: string;
  readonly getSvg: () => string;
  readonly getSprite: () => string;
};
