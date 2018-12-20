var paths =
  '<path d="M18.8 8.022h-6.413L10 1.3 7.611 8.022H1.199l5.232 3.947-1.871 6.929L10 14.744l5.438 4.154-1.869-6.929L18.8 8.022zM10 12.783l-3.014 2.5 1.243-3.562-2.851-2.3 3.522.101 1.1-4.04 1.099 4.04 3.521-.101-2.851 2.3 1.243 3.562-3.012-2.5z"></path>';
export default {
  icon: "star-outlined",
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
    head += ' id="entypo-icon-star-outlined"';
    head += ' viewBox="0 0 20 20">';
    var tail = "</symbol></svg>";
    return head + paths + tail;
  }
} as {
  readonly icon: "star-outlined";
  readonly paths: string;
  readonly getSvg: () => string;
  readonly getSprite: () => string;
};
