var paths =
  '<path d="M15.484 12.452c-.436.446-1.043.481-1.576 0L10 8.705l-3.908 3.747c-.533.481-1.141.446-1.574 0-.436-.445-.408-1.197 0-1.615.406-.418 4.695-4.502 4.695-4.502a1.095 1.095 0 0 1 1.576 0s4.287 4.084 4.695 4.502c.409.418.436 1.17 0 1.615z"></path>';
export default {
  icon: "chevron-up",
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
    head += ' id="entypo-icon-chevron-up"';
    head += ' viewBox="0 0 20 20">';
    var tail = "</symbol></svg>";
    return head + paths + tail;
  }
} as {
  readonly icon: "chevron-up";
  readonly paths: string;
  readonly getSvg: () => string;
  readonly getSprite: () => string;
};
