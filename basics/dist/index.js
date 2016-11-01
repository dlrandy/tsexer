var something = 'sdsd';
// something =12312//编辑器提示错误，编译器也报错
//rc/index.ts(3,1): error TS2322: Type 'number' is not assignable to type 'string'.  
var coolFunc = function (a, b) { return a + b; };
coolFunc(something, 12);
// coolFunc('sdsd', {})  
//345: Argument of type '{}' is not assignable to parameter of type 'number'.  
var username = 'silver suffer'; //会默认成username就是string类型的
// username= [];//ype 'undefined[]' is not assignable to type 'string'. 
var password;
password = [];
var userid = function (a, b) { return a + b; };
// let userid2 = (a: string, b: number):number => a + b;
// error TS2322: Type 'string' is not assignable to type 'number'.  
var userid3 = function (a, b) { return a + b; };
var target = document.getElementById("id") || document.body;
target.onclick = function (event) { return event.button; };
var target1 = document.getElementById("id") || document.body;
target1.onclick = function (event) { return event.button; };
// let target2:HTMLElement = document.getElementById("id");
// target2.onclick = (event:HTMLButtonElement) =>event.button;
// rc/index.ts(34,1): error TS2322: Type '(event: HTMLButtonElement) => any' is not assignable to type '(this: HTMLE
// lement, ev: MouseEvent) => any'.                                                                                  
//   Types of parameters 'event' and 'ev' are incompatible.                                                          
//     Type 'MouseEvent' is not assignable to type 'HTMLButtonElement'.                                              
//       Property 'autofocus' is missing in type 'MouseEvent'.                                                       
// src/index.ts(34,53): error TS2339: Property 'button' does not exist on type 'HTMLButtonElement'.  
var thing; //联合类型
var returnSomething = function (something) { return something; };
var returnSomething1 = function (something) { return something; };
console.log(returnSomething1('NB'));
// console.log(returnSomething1({}));
//r TS2345: Argument of type '{}' is not assignable to parameter of type 'string | number | boolean | string[]'.  
var returnAnotherThing = function (something) {
    if (typeof something == 'string' ||
        typeof something == 'number') {
        console.log("something is ", something);
    }
    else {
        console.log('somthingo:', something);
    }
    if (something instanceof Array) {
        var joinedSomething_1 = '';
        something.forEach(function (thing) {
            joinedSomething_1 += "" + thing;
        });
        console.log(joinedSomething_1);
    } // else {
    //         console.log("other type thing:", something);
    //     }
};
console.log(returnAnotherThing(false));
console.log(returnAnotherThing('fffffffff'));
console.log(returnAnotherThing(['hello ', 'world', 'ts']));
var gimmeStuff = function (stuff) {
    typeof stuff === 'string';
    // typeof stuff.name === 'string';
    //s(86,18): error TS2339: Property 'name' does not exist on type 'stuff'. 
};
var getST = function (sat) {
    // return sat.cool || sat.lme;
};
var getS2T = function (sat) {
    return sat.cool;
};
var getS3T = function (sat) {
    return sat.cool;
};
//联合类型只能判定都有的命名属性
var unit = 'awesome';
var miles = 'MILES';
// let milesds:"MILES" = ''
// S2322: Type '""' is not assignable to type '"MILES"'.   
function move(distance, value) {
    console.log("you move " + distance + " " + value);
}
move(3, 'feet');
function move2(dis, value) {
    console.log("you move " + dis + " " + value);
}
// move2(23, 'sdsd')
// src/index.ts(145,11): error TS2345: Argument of type '"sdsd"' is not assignable to parameter of type 'distanceMetr
// ics'.
move2(23, "KELLOMETERS");
var p1;
var p2;
//====================
var p3;
p1 = { name: '123', id: 1, hyealth: 'yes' };
p3 = { name: '123', id: 1, hyealth: 'yes' };
//==================
console.log();
var pp1 = {
    alias: ' lalala',
    id: 123,
    name: 'll'
};
var pp2 = {
    name: ' lalala',
    id: 1223,
};
function getId(ch) {
    if (ch.id) {
        console.log(ch.name + " is " + ch.id);
    }
    else {
        console.log(ch.name + " no id");
    }
}
function attackFunc(opponent, attackWith) {
    opponent.health -= attackWith;
    console.log(this.alias + " attacked " + opponent.alias + ", who's health= " + opponent.health);
    return opponent.health;
}
// let superHero1:ComicBookCharacter = {
// alias: true,
// health: 4000
//  Types of property 'alias' are incompatible.                                                                     
//     Type 'boolean' is not assignable to type 'string'. 
// };
/*let superVillan1:ComicBookCharacter = {
// scretIdentity: 'Jack Napicer',
// Object literal may only specify known properties, and 'scretIdentity' does not exist in type 'ComicBookChara
// secretIdentity: 'Jack Napicer',
alias: 'Jack',
// Object literal may only specify known properties, and 'scretIdentity' does not exist in type 'ComicBookChara
health: 456
};
*/
var superHero = {
    alias: 'She-Hulk',
    health: 4000,
    attack: attackFunc,
    strength: 234
};
var superVillan = {
    secretIdentity: 'Jack Napicer',
    alias: 'Jack',
    health: 456,
    insanity: 123,
    attack: attackFunc
};
superHero.attack(superVillan, superHero.strength);
function getSecretIdentity(character) {
    if (character.secretIdentity) {
        console.log(character.alias + " is " + character.secretIdentity);
    }
    else {
        console.log(character.alias + " no id");
    }
}
// let test = {
//     alias: true,
//     health: 343,
//     hh:'sdsd'
// }
// error TS2345: Argument of type '{ alias: boolean; health: number; hh: string; }' is not assi
// gnable to parameter of type 'ComicBookCharacter'.     
// getSecretIdentity(test);
getSecretIdentity(superHero);
