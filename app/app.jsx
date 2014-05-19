'use strict';

var router = require('lib/router');
var viewStore = require('stores/view');

module.exports = React.createClass({
  displayName: 'App',
  componentDidMount: function() {
    this.subscription = viewStore
    .distinctUntilChanged()
    .subscribe(this.setView);
  },
  componentWillUnmount: function() {
    this.subscription.dispose();
  },
  setView: function(view) {
    this.setState({view: view});
  },
  getView: function(view) {
    try {
      return require('views/' + this.state.view);
    }
    catch(e) {
      return React.DOM.div;
    }
  },
  render: function() {
    var view = this.getView();
    return (
      <div>
        <nav>
          <a href={router.get('index')}>Home</a>
          <a href={router.get('a')}>A</a>
          <a href={router.get('b')}>B</a>
          <a href={router.get('c')}>C</a>
          <a href={router.get('d')}>D</a>
          <a href="#/e">E</a>
        </nav>
        <view/>
      </div>
    );
  }
});
