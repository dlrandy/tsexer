"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
require("reflect-metadata");
function example() {
    return function (targetClass) {
        var types = Reflect.getMetadata('design:paramtypes', targetClass);
        console.log(types);
        return targetClass;
    };
}
var Person = (function () {
    function Person(name, age) {
    }
    Person = __decorate([
        example(), 
        __metadata('design:paramtypes', [String, Number])
    ], Person);
    return Person;
}());
new Person('dfdf', 12);
var Cat = (function () {
    // constructor(lazy:boolean, tail: any){}
    function Cat() {
    }
    Cat = __decorate([
        example(), 
        __metadata('design:paramtypes', [])
    ], Cat);
    return Cat;
}());
