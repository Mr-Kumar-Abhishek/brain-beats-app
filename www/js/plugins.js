// Avoid `console` errors in browsers that lack a console.
(function() {
  var method;
  var noop = function () {};
  var methods = [
    'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
    'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
    'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
    'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
  ];
  var length = methods.length;
  var console = (window.console = window.console || {});

  while (length--) {
    method = methods[length];

    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop;
    }
  }
}());

let banner

document.addEventListener('deviceready', async () => {
  console.log("device ready");
  banner = new admob.BannerAd({
    adUnitId: 'ca-app-pub-1948728148006217/1073179640',
  })

  banner.on('impression', async (evt) => {
    await banner.hide()
  })

  await banner.show()
}, false)

