'use strict';

module.exports = function(observable) {
  return observable.map(toObservable).concatAll().asObservable();
};

function toObservable(value) {
  if(typeof value === 'function') {
    value = value();
  }
  return value instanceof Rx.Observable ? value : Rx.Observable.return(value);
}
