let something: string = 'sdsd'

// something =12312//编辑器提示错误，编译器也报错
//rc/index.ts(3,1): error TS2322: Type 'number' is not assignable to type 'string'.  

let coolFunc = (a:string, b: number) => a + b;

coolFunc(something, 12);
// coolFunc('sdsd', {})  
//345: Argument of type '{}' is not assignable to parameter of type 'number'.  

let username = 'silver suffer';//会默认成username就是string类型的
// username= [];//ype 'undefined[]' is not assignable to type 'string'. 

let password;
password = [];

let userid = (a: string, b: number):string => a + b;


// let userid2 = (a: string, b: number):number => a + b;
// error TS2322: Type 'string' is not assignable to type 'number'.  

let userid3 = (a: string, b: number) => a + b;


let target = document.getElementById("id")||document.body;
target.onclick = (event) =>event.button;

let target1:HTMLElement = document.getElementById("id")||document.body;
target1.onclick = (event:MouseEvent) =>event.button;

// let target2:HTMLElement = document.getElementById("id");
// target2.onclick = (event:HTMLButtonElement) =>event.button;
// rc/index.ts(34,1): error TS2322: Type '(event: HTMLButtonElement) => any' is not assignable to type '(this: HTMLE
// lement, ev: MouseEvent) => any'.                                                                                  
//   Types of parameters 'event' and 'ev' are incompatible.                                                          
//     Type 'MouseEvent' is not assignable to type 'HTMLButtonElement'.                                              
//       Property 'autofocus' is missing in type 'MouseEvent'.                                                       
// src/index.ts(34,53): error TS2339: Property 'button' does not exist on type 'HTMLButtonElement'.  


let thing : string| number | string[]|boolean;//联合类型
let returnSomething = (something:string|number|string[]|boolean)=>something;

type thing1 = string| number | string[]|boolean;//联合类型
let returnSomething1 = (something: thing1)=>something;

console.log(returnSomething1('NB'));
// console.log(returnSomething1({}));
//r TS2345: Argument of type '{}' is not assignable to parameter of type 'string | number | boolean | string[]'.  

let returnAnotherThing = (something: thing1) =>{
    if(typeof something == 'string'||
    typeof something == 'number'){
        console.log("something is ", something);
        
    } else {
        console.log('somthingo:', something);
        
    }

   if (something instanceof Array) {
        let joinedSomething = '';
        something.forEach((thing) => {
            joinedSomething += `${thing}`;
        })
        console.log(joinedSomething);
        
    }// else {
//         console.log("other type thing:", something);
        
//     }
};

console.log(returnAnotherThing(false));

console.log(returnAnotherThing('fffffffff'));
console.log(returnAnotherThing(['hello ', 'world', 'ts']));
// console.log(returnAnotherThing({name: 'ali'}));

type stuff = string | {name: string};

let gimmeStuff = (stuff: stuff) =>{
    typeof stuff ==='string';
    // typeof stuff.name === 'string';
    //s(86,18): error TS2339: Property 'name' does not exist on type 'stuff'. 
}


// type coolThing = {id: string} | {name: string};

// let gimmeCoolThing = (thing: coolThing) => {
// if(typeof thing.id === "string"){
//     return thing.id
// }
// if(typeof thing.name === "string"){
//     return thing.name
// }
// /*
// rc/index.ts(94,17): error TS2339: Property 'id' does not exist on type 'coolThing'.                              
// src/index.ts(95,18): error TS2339: Property 'id' does not exist on type 'coolThing'.                              
// src/index.ts(97,17): error TS2339: Property 'name' does not exist on type 'coolThing'.                            
// src/index.ts(98,18): error TS2339: Property 'name' does not exist on type 'coolThing'. 
//  */
// }

type StuffAndThing = {cool: string, meh: number} | {cool: number, lme: string};

let getST= (sat: StuffAndThing) => {
    // return sat.cool || sat.lme;
}
//x.ts(111,28): error TS2339: Property 'lme' does not exist on type 'StuffAndThing'. 

type StuffAndThing2 = {cool: string, meh: number} | {cool: number, lme: string};

let getS2T= (sat: StuffAndThing2) => {
    return sat.cool;
}

type StuffAndThing3 = {cool: string, meh: number} | {cool: string, lme: string};

let getS3T= (sat: StuffAndThing2) => {
    return sat.cool;
}
//联合类型只能判定都有的命名属性


let unit: string = 'awesome';

let miles:"MILES" = 'MILES';
// let milesds:"MILES" = ''
// S2322: Type '""' is not assignable to type '"MILES"'.   
function move(distance: number, value: string){
    console.log(`you move ${distance} ${value}`);
    
}

move(3, 'feet');

type distanceMetrics = "MILES"|"KELLOMETERS"|"YARDS";
function move2(dis: number, value: distanceMetrics){
    console.log(`you move ${dis} ${value}`);
}
// move2(23, 'sdsd')
// src/index.ts(145,11): error TS2345: Argument of type '"sdsd"' is not assignable to parameter of type 'distanceMetr
// ics'.

move2(23, "KELLOMETERS")



let p1 : {
    name: string;
    id: number;
    hyealth: string;
};
let p2 : {
    name: string;
    id: number;
    hyealth: string;
};
//====================
let p3 : {
    name: string,
    id: number,
    hyealth: string
};
p1={name:'123',id:1,hyealth:'yes'};
p3={name:'123',id:1,hyealth:'yes'};
//==================
console.log();

interface CommonAttr{
      alias?: string;
    id: number;
    name: string;
}
interface attFunc{
    (opponent: {alias: string, name: string}): number;
}
let pp1: CommonAttr = {
    alias:' lalala',
    id: 123,
    name: 'll'
};

let pp2: CommonAttr = {
name:' lalala',
    id: 1223,
    // alias: true
//     CommonAttr'.                                                                                                     
//   Types of property 'alias' are incompatible.                                                                     
//     Type 'boolean' is not assignable to type 'string'. 
};

function getId(ch: CommonAttr){
    if(ch.id){
        console.log(`${ch.name} is ${ch.id}`);
        
    } else {
         console.log(`${ch.name} no id`);
    }
}

// getId({
//     alias:true,
//     name: 'sdsd'
// })
// Argument of type '{ alias: boolean; name: string; }' is not assignable to param
// eter of type 'CommonAttr'.                                                                                        
//   Types of property 'alias' are incompatible.                                                                     
//     Type 'boolean' is not assignable to type 'string'. 


interface AttackFunction{
    (oponent:{alias:string;health:number;}, attackWith:number):number;
}
function attackFunc(opponent, attackWith){
opponent.health -= attackWith;
console.log(`${this.alias} attacked ${opponent.alias}, who's health= ${opponent.health}`);
return opponent.health;

}
interface KrustyTheClown extends OptionalAttributes {
alias: string;
health: number;
inebriationLevel: number;
attack: AttackFunction;
}
interface ComicBookCharacter extends OptionalAttributes{
    secretIdentity?:string;
    alias: string;
    health: number;
    attack: AttackFunction;
}
interface OptionalAttributes {
    strength?: number;
    insanity?: number;
    dexterity?:number;
    healingFactor?:number;
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
let superHero:ComicBookCharacter = {
alias: 'She-Hulk',
health: 4000,
attack: attackFunc,
strength: 234
};

let superVillan:ComicBookCharacter = {
secretIdentity: 'Jack Napicer',
alias: 'Jack',
health: 456,
insanity: 123,
attack: attackFunc
};

superHero.attack(superVillan, superHero.strength);
function getSecretIdentity(character: ComicBookCharacter){
    if(character.secretIdentity){
        console.log(`${character.alias} is ${character.secretIdentity}`);
        
    } else {
         console.log(`${character.alias} no id`);
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
getSecretIdentity(superHero)




