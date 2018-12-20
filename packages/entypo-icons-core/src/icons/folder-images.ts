var paths =
  '<path d="M18.405 2.799c-.112-.44-.656-.799-1.21-.799H2.805c-.555 0-1.099.359-1.21.799L1.394 4h17.211l-.2-1.201zM19.412 5H.587a.58.58 0 0 0-.577.635l.923 11.669a.77.77 0 0 0 .766.696H18.3a.77.77 0 0 0 .766-.696l.923-11.669A.58.58 0 0 0 19.412 5zm-6.974 3.375a.938.938 0 1 1 0 1.876.938.938 0 0 1 0-1.876zM5.5 14l2.486-5.714 2.827 4.576 2.424-1.204L14.5 14h-9z"></path>';
export default {
  icon: "folder-images",
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
    head += ' id="entypo-icon-folder-images"';
    head += ' viewBox="0 0 20 20">';
    var tail = "</symbol></svg>";
    return head + paths + tail;
  }
} as {
  readonly icon: "folder-images";
  readonly paths: string;
  readonly getSvg: () => string;
  readonly getSprite: () => string;
};
