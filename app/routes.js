'use strict';

var dispatcher = require('lib/dispatcher');
var router = require('lib/router');

router.set('a', '/a', function() {
  dispatcher.dispatch('view#update', 'section-a');
});

router.set('b', '/b', function() {
  dispatcher.dispatch('view#update', 'section-b');
});

router.set('c', '/c', function() {
  dispatcher.dispatch('view#update', 'section-c');
});

router.set('d', '/d', function() {
  dispatcher.dispatch('view#update', 'section-d');
});

router.set('index', '/', function() {
  dispatcher.dispatch('view#update', 'index');
});

router.set('', function() {
  routie.navigate('/');
});

router.set('*', function() {
  dispatcher.dispatch('view#update', '404');
});
