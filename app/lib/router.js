'use strict';

exports.get = function() {
  return '#' + routie.lookup.apply(null, arguments);
};

exports.set = function(name, route, callback) {
  if(arguments.length === 2) {
    callback = route;
    route = name;
  }
  else {
    route = '' + name + ' ' + route;
  }
  routie(route.trim(), callback);
}

exports.navigate = function(route) {
  routie.apply(null, arguments);
};
