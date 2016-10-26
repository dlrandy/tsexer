"use strict";
var _ = require('lodash');
var App = (function () {
    function App() {
        // title:String;
        this.title = 'erer';
    }
    App.prototype.getUsers = function () {
        return [{ name: 'tom' }];
    };
    return App;
}());

console.log(_.isArray(new App().getUsers()));
