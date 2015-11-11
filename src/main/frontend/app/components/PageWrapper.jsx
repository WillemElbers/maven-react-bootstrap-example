var React = require('react');

var PageWrapper = React.createClass({
    getInitialState() {
        return {};
    },

    componentDidMount() {
    },

    render() {
        return (
            <div className="container">
                <Header />
                {this.props.children}
                <Footer />
            </div>
        );
    }
});

var Footer = React.createClass({
    getInitialState() {
        return {};
    },

    componentDidMount() {
    },

    render() {
        return (
            <div className="row">
                <div className="col-lg-12">
                    Footer
                </div>
            </div>
        );
    }
});

var Header = React.createClass({
    getInitialState() {
        return {};
    },

    componentDidMount() {
    },

    render() {
        return (
            <div className="row">
                <div className="col-lg-12">
                    Header
                </div>
            </div>
        );
    }
});

module.exports = PageWrapper;