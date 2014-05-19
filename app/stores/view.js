'use strict';

var Store = require('lib/store');
var observable = require('lib/dispatcher').ofStore('view');
var store = new Store();
module.exports = store.exportable();

observable.ofAction('update').subscribe(function(view) {
  store.onNext(view);
});
