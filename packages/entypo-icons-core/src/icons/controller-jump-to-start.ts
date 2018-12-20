var paths =
  '<path d="M14.959 4.571L7.756 9.52s-.279.201-.279.481.279.479.279.479l7.203 4.951c.572.38 1.041.099 1.041-.626V5.196c0-.727-.469-1.008-1.041-.625zM6 4H5c-.553 0-1 .048-1 .6v10.8c0 .552.447.6 1 .6h1c.553 0 1-.048 1-.6V4.6c0-.552-.447-.6-1-.6z"></path>';
export default {
  icon: "controller-jump-to-start",
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
    head += ' id="entypo-icon-controller-jump-to-start"';
    head += ' viewBox="0 0 20 20">';
    var tail = "</symbol></svg>";
    return head + paths + tail;
  }
} as {
  readonly icon: "controller-jump-to-start";
  readonly paths: string;
  readonly getSvg: () => string;
  readonly getSprite: () => string;
};
