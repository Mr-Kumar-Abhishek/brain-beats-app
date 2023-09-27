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
    adUnitId: 'ca-app-pub-3940256099942544/6300978111',
  })

  banner.on('impression', async (evt) => {
    await banner.hide()
  })

  await banner.show()
}, false)

