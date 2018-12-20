var paths =
  '<path d="M10 0C5.25 0 1.4 3.806 1.4 8.5S5.25 17 10 17v3c3.368-1.672 8.6-5.305 8.6-11.5C18.6 3.806 14.75 0 10 0zM9 9.741a2.552 2.552 0 0 1-2.32 2.538.211.211 0 0 1-.228-.211v-.852c0-.106.079-.194.184-.21A1.265 1.265 0 0 0 7.683 10H5.732A.732.732 0 0 1 5 9.268V6.732C5 6.328 5.328 6 5.732 6h2.536c.404 0 .732.328.732.732v3.009zm6 0a2.552 2.552 0 0 1-2.32 2.538.211.211 0 0 1-.228-.211v-.852c0-.106.079-.194.184-.21A1.266 1.266 0 0 0 13.683 10h-1.951A.732.732 0 0 1 11 9.268V6.732c0-.404.328-.732.732-.732h2.536c.404 0 .732.328.732.732v3.009z"></path>';
export default {
  icon: "google-hangouts",
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
    head += ' id="entypo-icon-google-hangouts"';
    head += ' viewBox="0 0 20 20">';
    var tail = "</symbol></svg>";
    return head + paths + tail;
  }
} as {
  readonly icon: "google-hangouts";
  readonly paths: string;
  readonly getSvg: () => string;
  readonly getSprite: () => string;
};
