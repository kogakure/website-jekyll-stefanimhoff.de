/* global FastClick:false, fitVids:false, classie:false */

require('fastclick');
require('fitvids');
require('classie');
require('./vendor/ios-rotate-scaling-fix');

var navigation     = require('./libs/navigation');
var smoothScroller = require('./libs/smoothScroller');
var tracking       = require('./libs/tracking');

var NAVIGATION_TRIGGER_CLASS = 'js-nav-btn',
    NAVIGATION_CLOSE_CLASS   = 'js-nav-close-btn',
    container                = document.querySelector('.container'),
    triggerButton            = document.querySelector('.' + NAVIGATION_TRIGGER_CLASS),
    closeButton              = document.querySelector('.' + NAVIGATION_CLOSE_CLASS),
    topLink                  = document.querySelector('#top-link'),
    trackingLinks            = document.querySelectorAll('a');

if ('querySelector' in document && 'addEventListener' in window) {

  document.addEventListener('DOMContentLoaded', function() {
    FastClick.attach(document.body);
    fitVids('.container');

    // Show navigation handle
    navigation.showNavigationHandle();

    // Navigation menu event listeners
    triggerButton.addEventListener('click', navigation.toggleNavigation);
    closeButton.addEventListener('click', navigation.closeNavigation);
    container.addEventListener('click', navigation.closeNavigation);

    // Hightlighting of navigation item
    if (navigation.currentNavigationItem()) {
      classie.add(navigation.currentNavigationItem().parentElement, 'nav-is-active');
    }

    // Scroll smoothly to the top of the page
    topLink.addEventListener('click', smoothScroller.scrollSmoothlyToTop);

    // Tracking aller Links
    for (var i = 0, len = trackingLinks.length; i < len; i++) {
      var trackingLink = trackingLinks[i];

      trackingLink.addEventListener('click', tracking.trackLinksWithGoogleAnalytics);
    }
  });
}
