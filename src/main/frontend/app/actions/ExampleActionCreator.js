var Dispatcher = require('../Dispatcher');
var Constants = require('../Constants');

var ExampleActionCreator =  {
  createExample: function() {
    Dispatcher.handleViewAction({
      type: Constants.ActionTypes.EXAMPLE,
      data: null
    });
  },

  clearExample: function() {
    console.warn('clearList action not yet implemented...');
  },

  completeExample: function(task) {
    console.warn('completeTask action not yet implemented...');
  }
  
};

module.exports = ExampleActionCreator;
