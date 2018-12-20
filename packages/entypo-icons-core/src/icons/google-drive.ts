var paths =
  '<path d="M8.175 13l-3.324 6h11.824L20 13H8.175zM5.865 2.299L0 12.914l3.372 6.084L9.238 8.383 5.865 2.299zM19.445 12L13.349 1H6.604l6.088 11h6.753z"></path>';
export default {
  icon: "google-drive",
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
    head += ' id="entypo-icon-google-drive"';
    head += ' viewBox="0 0 20 20">';
    var tail = "</symbol></svg>";
    return head + paths + tail;
  }
} as {
  readonly icon: "google-drive";
  readonly paths: string;
  readonly getSvg: () => string;
  readonly getSprite: () => string;
};
