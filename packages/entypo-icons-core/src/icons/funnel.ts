var paths =
  '<path d="M10 1C5.092 1 2 2.512 2 4.001v2c0 .918 6 6 6 6v6c-.001.684 1 1 2 1s2.001-.316 2-1v-6s6-5.082 6-6v-2C18 2.512 14.908 1 10 1zm0 5.123C6.409 6.122 3.862 4.79 3.862 4.292 3.86 3.797 6.41 2.461 10 2.463c3.59-.002 6.14 1.334 6.138 1.828 0 .499-2.547 1.831-6.138 1.832z"></path>';
export default {
  icon: "funnel",
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
    head += ' id="entypo-icon-funnel"';
    head += ' viewBox="0 0 20 20">';
    var tail = "</symbol></svg>";
    return head + paths + tail;
  }
} as {
  readonly icon: "funnel";
  readonly paths: string;
  readonly getSvg: () => string;
  readonly getSprite: () => string;
};
