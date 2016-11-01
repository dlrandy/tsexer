function pushSomethingIntoCollection(something, collection) {
    collection.push(something);
    console.log(collection);
}
var sd = { name: 'jean' };
var ss = { name: 'www' };
var heros = [sd];
var powers = ['qq', 'qw'];
pushSomethingIntoCollection(ss, heros);
pushSomethingIntoCollection('dfd', powers);
