"use strict";

document.querySelectorAll('a').forEach(function (item) {
  if (item.getAttribute('target')) {
    item.setAttribute("rel", "noopener");
  }
});