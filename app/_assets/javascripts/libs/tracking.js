/* global ga:false */
'use strict';

var url = window.location.href;

module.exports = {
  trackLinksWithGoogleAnalytics: function() {
    var url = this.getAttribute('href'),
        newtab = false;

    if (event.currentTarget.host !== window.location.host) {
      ga('send', 'event', 'Ausgehender Link', 'click', event.target.text + ': ' + event.target.href);

      if (event.metaKey || event.ctrlKey || this.target === '_blank') {
        newtab = true;
      }

      if (!newtab) {
        event.preventDefault();
        setTimeout('document.location = "' + url + '"', 100);
      }

    } else {
      ga('send', 'event', 'Interner Link', 'click', event.target.text + ': ' + event.target.href);
    }
  }
};
