var paths =
  '<path d="M2.539 20H6l1.406-3.698-2.966-1.004L2.539 20zm10.055-3.698L14 20h3.461l-1.901-4.702-2.966 1.004zM18 2h-6.5L11 0H9l-.5 2H2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z"></path>';
export default {
  icon: "blackboard",
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
    head += ' id="entypo-icon-blackboard"';
    head += ' viewBox="0 0 20 20">';
    var tail = "</symbol></svg>";
    return head + paths + tail;
  }
} as {
  readonly icon: "blackboard";
  readonly paths: string;
  readonly getSvg: () => string;
  readonly getSprite: () => string;
};
