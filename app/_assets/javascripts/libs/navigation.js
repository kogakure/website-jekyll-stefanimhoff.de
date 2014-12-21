/* global classie:false */
'use strict';

var NAVIGATION_OPEN_CLASS    = 'navigation-is-open',
    NAVIGATION_TRIGGER_CLASS = 'js-nav-btn',
    NAVIGATION_CLOSE_CLASS   = 'js-nav-close-btn',
    navigationLinks          = '#nav a',
    url                      = window.location.href,
    body                     = document.querySelector('body');

module.exports = {
  /**
   * Open or close navigation menu
   */
  toggleNavigation: function() {
    classie.toggle(body, NAVIGATION_OPEN_CLASS);
    event.preventDefault();
    event.stopImmediatePropagation();
  },

  /**
   * Close navigation menu
   */
  closeNavigation: function() {
    if (classie.has(body, NAVIGATION_OPEN_CLASS)) {
      if (event.target.className !== NAVIGATION_TRIGGER_CLASS) {
        classie.remove(body, NAVIGATION_OPEN_CLASS);
      }
      event.preventDefault();
    }
  },

  /**
   * Hightlight current navigation item
   */
  currentNavigationItem: function() {
    var selectedNavigationItem = Array.prototype.filter.call(document.querySelectorAll(navigationLinks), function(target) {
      return target.href === url;
    });

    return selectedNavigationItem[0];
  }
};
