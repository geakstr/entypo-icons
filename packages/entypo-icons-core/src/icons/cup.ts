var paths =
  '<path d="M10 1C5.721 1 3.06 2.41 3.205 3.555l1.442 13.467c.058.46 2.221 1.976 5.353 1.978 3.131-.002 5.295-1.518 5.351-1.979l1.442-13.467C16.938 2.41 14.279 1 10 1zm0 4.291c-3.132-.002-5.353-1.117-5.353-1.535C4.646 3.342 6.869 2.225 10 2.227c3.131-.002 5.354 1.115 5.351 1.529 0 .418-2.22 1.533-5.351 1.535z"></path>';
export default {
  icon: "cup",
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
    head += ' id="entypo-icon-cup"';
    head += ' viewBox="0 0 20 20">';
    var tail = "</symbol></svg>";
    return head + paths + tail;
  }
} as {
  readonly icon: "cup";
  readonly paths: string;
  readonly getSvg: () => string;
  readonly getSprite: () => string;
};
