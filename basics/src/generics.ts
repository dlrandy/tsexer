function pushSomethingIntoCollection(something, collection){
collection.push(something);

console.log(collection);

}
let sd = {name:'jean'};
let ss = {name: 'www'};

let heros = [sd];
let powers = ['qq','qw'];

pushSomethingIntoCollection(ss, heros)
pushSomethingIntoCollection('dfd',powers);