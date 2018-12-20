var paths =
  '<path d="M15.4 5.801a4.6 4.6 0 0 0-3.795 7.2H8.394A4.6 4.6 0 1 0 4.6 15h10.8a4.6 4.6 0 0 0 0-9.199zM2 10.4a2.6 2.6 0 1 1 5.2 0 2.6 2.6 0 0 1-5.2 0zM15.4 13a2.6 2.6 0 1 1-.002-5.2A2.6 2.6 0 0 1 15.4 13z"></path>';
export default {
  icon: "voicemail",
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
    head += ' id="entypo-icon-voicemail"';
    head += ' viewBox="0 0 20 20">';
    var tail = "</symbol></svg>";
    return head + paths + tail;
  }
} as {
  readonly icon: "voicemail";
  readonly paths: string;
  readonly getSvg: () => string;
  readonly getSprite: () => string;
};
