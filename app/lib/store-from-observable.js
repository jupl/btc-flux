'use strict';

module.exports = function(observable) {
  return observable.asObservable().map(execute).map(wrap).concatAll();
};

function execute(value) {
  return typeof value === 'function' ? Rx.Observable.defer(value) : value;
}

function wrap(value) {
  return value instanceof Rx.Observable
    ? value
    : Rx.Observable.returnValue(value);
}
