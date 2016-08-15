/* global classie:false */

require('classie');
require('./vendor/ios-rotate-scaling-fix');

var fitvids = require('fitvids');
var attachFastClick = require('fastclick');
var navigation = require('./libs/navigation');
var tracking = require('./libs/tracking');

var trackingLinks = document.querySelectorAll('a');

if ('querySelector' in document && 'addEventListener' in window) {
  document.addEventListener('DOMContentLoaded', function() {
    // FastClick
    attachFastClick(document.body);

    // Fitvids
    fitvids('.container');

    // Hightlighting of navigation item
    if (navigation.currentNavigationItem()) {
      classie.add(navigation.currentNavigationItem().parentElement, 'nav-is-active');
    }

    // Tracking aller Links
    for (var i = 0, len = trackingLinks.length; i < len; i++) {
      var trackingLink = trackingLinks[i];

      trackingLink.addEventListener('click', tracking.trackLinksWithGoogleAnalytics);
    }
  });
}
