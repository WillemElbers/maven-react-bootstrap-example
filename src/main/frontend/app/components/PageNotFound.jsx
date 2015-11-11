var React = require('react');

var PageNotFound = React.createClass({
    getInitialState() {
        return {};
    },

    componentDidMount() {},

    render() {
        return (
            <div className="row">
                <div className="col-lg-12">
                    Page not  found.
                </div>
            </div>
        );
    }
});

module.exports = PageNotFound;