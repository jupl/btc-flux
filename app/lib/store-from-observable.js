'use strict';

module.exports = function(observable, options) {
  options = options || {};
  observable = observable.asObservable().map(execute);
  observable = options.forceHot ? observable.map(forceHot) : observable;
  return observable.map(valueWrap).concatAll();
};

function execute(value) {
  return typeof value === 'function' ? Rx.Observable.defer(value) : value;
}

function forceHot(observable) {
  if(observable instanceof Rx.Observable) {
    observable = observable.publish();
    observable.connect();
  }
  return observable;
}

function valueWrap(value) {
  return value instanceof Rx.Observable
    ? value
    : Rx.Observable.returnValue(value);
}
