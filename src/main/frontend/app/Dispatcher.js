var Flux = require('flux').Dispatcher;
var Constants = require('./Constants.js');
var assign = require('object-assign');

/**
 * Purpose: to create a single dispatcher instance for use throughout the
 * entire app. The two methods below are merely thin wrappers that describe
 * where the action originated from. Not mandatory, but may be helpful
 **/
var Dispatcher = assign(new Flux(), {

  /**
   * This does nothing yet, but will come in handy if you need to respond
   * to server-originated events and treat them differently...
   **/
  handleServerAction: function(action) {
    this.dispatch({
      source: Constants.ActionSources.SERVER_ACTION,
      action: action
    });
  },

  /**
   * Very thin wrapper around the core dispatcher API, just to signify
   * that actions triggered here originated on the client-side
   **/
  handleViewAction: function(action) {
    this.dispatch({
      source: Constants.ActionSources.VIEW_ACTION,
      action: action
    });
  }
});

module.exports = Dispatcher;
