var paths =
  '<path d="M15.6 18.196c-.777.371-1.48.631-2.109.781a8.92 8.92 0 0 1-2.043.223c-.831 0-1.566-.107-2.205-.318a4.757 4.757 0 0 1-1.635-.908c-.451-.395-.764-.812-.938-1.254-.174-.443-.261-1.086-.261-1.926V8.339H4.4V5.735c.714-.234 1.326-.57 1.835-1.01a5.04 5.04 0 0 0 1.227-1.58c.308-.613.519-1.396.636-2.345h2.585v4.652h4.314v2.887h-4.314v4.719c0 1.066.056 1.752.168 2.055.111.303.319.545.622.725.403.244.863.367 1.381.367.92 0 1.836-.303 2.746-.908v2.899z"></path>';
export default {
  icon: "tumblr",
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
    head += ' id="entypo-icon-tumblr"';
    head += ' viewBox="0 0 20 20">';
    var tail = "</symbol></svg>";
    return head + paths + tail;
  }
} as {
  readonly icon: "tumblr";
  readonly paths: string;
  readonly getSvg: () => string;
  readonly getSprite: () => string;
};
