var paths =
  '<path d="M9.248 11.601c.45.313 1.05.313 1.5 0l9.088-5.281a.375.375 0 0 0-.048-.646l-9.205-3.537a1.315 1.315 0 0 0-1.17 0L.208 5.674a.375.375 0 0 0-.048.646l9.088 5.281zm10.54-.79l-2.486-1.233-5.725 3.327c-.469.309-1.014.471-1.579.471s-1.11-.163-1.579-.471L2.698 9.576.208 10.81a.375.375 0 0 0-.048.646l9.088 6.309c.45.313 1.05.313 1.5 0l9.088-6.309a.374.374 0 0 0-.048-.645z"></path>';
export default {
  icon: "layers",
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
    head += ' id="entypo-icon-layers"';
    head += ' viewBox="0 0 20 20">';
    var tail = "</symbol></svg>";
    return head + paths + tail;
  }
} as {
  readonly icon: "layers";
  readonly paths: string;
  readonly getSvg: () => string;
  readonly getSprite: () => string;
};
