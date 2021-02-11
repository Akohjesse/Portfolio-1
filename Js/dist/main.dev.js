"use strict";

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js').then(function (reg) {
    return console.log('Service Worker Initialised', reg);
  })["catch"](function (err) {
    return console.log(err);
  });
}