var React = require('react');
var Button = require('react-bootstrap/lib/Button');
var ExampleStore = require('../stores/ExampleStore');
var ExampleActionCreator = require('../actions/ExampleActionCreator');

var Home = React.createClass({
    getInitialState: function() {
        return {};
    },

    _onChange: function() {
        this.setState(ExampleStore.getData());
    },

    componentDidMount: function() {
        ExampleStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function() {
        ExampleStore.removeChangeListener(this._onChange);
    },

    doExample: function() {
        ExampleActionCreator.createExample();
    },

    render: function() {
        console.log("state=");
        console.log(this.state);
        return (
            <div className="row">
                <div className="col-lg-12">
                    Home page
                    <Button onClick={this.doExample}>Increase</Button>
                </div>
            </div>
        );
    }
});

module.exports = Home;
