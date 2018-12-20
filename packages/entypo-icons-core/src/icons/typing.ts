var paths =
  '<path d="M16 4H4c-1.101 0-2 .9-2 2v7c0 1.1.899 2 2 2h4l4 3v-3h4c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM6 10.6a1.1 1.1 0 1 1 0-2.2 1.1 1.1 0 0 1 0 2.2zm4 0a1.1 1.1 0 1 1 0-2.2 1.1 1.1 0 0 1 0 2.2zm4 0a1.1 1.1 0 1 1 0-2.2 1.1 1.1 0 0 1 0 2.2z"></path>';
export default {
  icon: "typing",
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
    head += ' id="entypo-icon-typing"';
    head += ' viewBox="0 0 20 20">';
    var tail = "</symbol></svg>";
    return head + paths + tail;
  }
} as {
  readonly icon: "typing";
  readonly paths: string;
  readonly getSvg: () => string;
  readonly getSprite: () => string;
};
