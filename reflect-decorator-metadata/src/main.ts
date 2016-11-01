import "reflect-metadata";
function example(){
    return function(targetClass){
       const types = Reflect.getMetadata('design:paramtypes', targetClass);
       console.log(types);
       
        return targetClass;
    }
}

@example()
class Person {
constructor(name:string, age: number){

}
}

new Person('dfdf', 12)

@example()
class Cat{
    // constructor(lazy:boolean, tail: any){}
    constructor(){}
}