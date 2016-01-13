"use strict";

/**
 * This class builds the react Application.
 *
 * @author $Author$
 */

var React = require('react');
var _ = require('lodash');



var App = React.createClass({

    getInitialState: function () {
      return {};
    },


    render: function () {

        return (
            <div>
             Hello world !
            </div>
            );
    }
});

module.exports = App;

