// const person ={ name: 'john'};

// function addAge(age){
//     return function (person) {
//         return {
//             age, name:person.name
//         }
//     }
// }

// const newPerson = addAge(34)(person)

// console.log(newPerson);

function addAge(age) {
    return function (targetClass){
        return class {
            name = new targetClass().name;
            age=age;
        }
    }
}

@addAge(23)
class Person {
    name="randy";
}

console.log(new Person() instanceof Person);

