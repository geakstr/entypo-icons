var paths =
  '<path d="M9.5 3.241V9.5H18V2L9.5 3.241zM2 9.5h6.5V3.387L2 4.336V9.5zm7.5 7.259L18 18v-7.5H9.5v6.259zM2 15.664l6.5.949V10.5H2v5.164z"></path>';
export default {
  icon: "windows-store",
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
    head += ' id="entypo-icon-windows-store"';
    head += ' viewBox="0 0 20 20">';
    var tail = "</symbol></svg>";
    return head + paths + tail;
  }
} as {
  readonly icon: "windows-store";
  readonly paths: string;
  readonly getSvg: () => string;
  readonly getSprite: () => string;
};
