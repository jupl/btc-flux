'use strict';

var dispatcher = require('lib/dispatcher');
var observable = dispatcher.ofStore('view');
var storeFromObservable = require('lib/store-from-observable');
var subject = new Rx.BehaviorSubject();

module.exports = storeFromObservable(subject);

observable.ofAction('update').subscribe(function(view) {
  subject.onNext(view);
});
