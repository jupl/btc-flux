'use strict';

var Store = module.exports = function() {};
Store.prototype = new Rx.Subject();
Store.prototype.constructor = Store;

Store.prototype.exportable = function() {
  return this.map(toObservable).concatAll().asObservable();
};

function toObservable(value) {
  if(typeof value === 'function') {
    value = value();
  }
  return value instanceof Rx.Observable ? value : Rx.Observable.return(value);
}
