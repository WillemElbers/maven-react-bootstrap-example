var Dispatcher = require('../Dispatcher');
var Constants = require('../Constants');
var BaseStore = require('./BaseStore');
var assign = require('object-assign');

var _data = 0;

Dispatcher.register(function handleAction(payload) {
    var action = payload.action;

    switch (action.type) {
        case Constants.ActionTypes.EXAMPLE:
            _data += 1;
            ExampleStore.emitChange();
            break;
    }
});

var ExampleStore = assign({}, BaseStore, {
    getData: function() {
        return _data;
    }  
});

module.exports = ExampleStore;

