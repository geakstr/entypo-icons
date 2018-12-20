var paths =
  '<path d="M7.225 5.767V3.086L0 9.542l7.225 6.691v-2.777L3 9.542l4.225-3.775zm5 1.186V3.086L5 9.542l7.225 6.691v-4.357c3.292 0 5.291.422 7.775 4.81 0-.001-.368-9.733-7.775-9.733z"></path>';
export default {
  icon: "reply-all",
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
    head += ' id="entypo-icon-reply-all"';
    head += ' viewBox="0 0 20 20">';
    var tail = "</symbol></svg>";
    return head + paths + tail;
  }
} as {
  readonly icon: "reply-all";
  readonly paths: string;
  readonly getSvg: () => string;
  readonly getSprite: () => string;
};
