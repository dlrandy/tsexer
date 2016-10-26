"use strict";
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
