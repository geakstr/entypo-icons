var paths =
  '<path d="M16 0H4C2.9 0 2 .899 2 2v15a1 1 0 0 0 1 1v2h14v-2a1 1 0 0 0 1-1V2c0-1.101-.899-2-2-2zm-2 15h-4v-1h4v1zm1-4H5V3h10v8z"></path>';
export default {
  icon: "classic-computer",
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
    head += ' id="entypo-icon-classic-computer"';
    head += ' viewBox="0 0 20 20">';
    var tail = "</symbol></svg>";
    return head + paths + tail;
  }
} as {
  readonly icon: "classic-computer";
  readonly paths: string;
  readonly getSvg: () => string;
  readonly getSprite: () => string;
};
