var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ComicBookCharacter = (function () {
    function ComicBookCharacter(alias, health, strength, secretIdentity, nmb) {
        this.alias = alias;
        this.health = health;
        this.strength = strength;
        this.secretIdentity = secretIdentity;
        this.nmb = nmb;
    }
    ComicBookCharacter.prototype.getSecretyId = function () {
        console.log(this.secretIdentity);
    };
    return ComicBookCharacter;
}());
var SuperHero = (function (_super) {
    __extends(SuperHero, _super);
    function SuperHero() {
        _super.apply(this, arguments);
        this.traits = ['empathy', 'strong moral code'];
    }
    // getSecretyId(){
    //     console.log(this.secretIdentity);
    // }
    SuperHero.prototype.getNmb = function () {
        console.log(this.nmb);
    };
    return SuperHero;
}(ComicBookCharacter));
var SuperVillain = (function (_super) {
    __extends(SuperVillain, _super);
    function SuperVillain(a, b, c, d, e) {
        _super.call(this, a, b, c, d, e);
        this.flaws = ['empathy', 'strong moral code'];
        console.log(this.alias + " eats kittens!");
    }
    return SuperVillain;
}(ComicBookCharacter));
var tom = new SuperHero('tom', 123, 123, 'rko', 34);
var jerry = new SuperVillain('jerry', 123, 234, 'haha', 12);
console.log(tom, tom.getSecretyId());
console.log('/////');
console.log(jerry);
