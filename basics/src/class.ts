class ComicBookCharacter{
    constructor(
        public alias: string,
        public health: number,
        public strength: number,
        private secretIdentity: string,
        protected nmb: number
    ){}
getSecretyId(){
        console.log(this.secretIdentity);
        
    }
}
class SuperHero extends ComicBookCharacter{
    traits = ['empathy', 'strong moral code'];
    // getSecretyId(){
    //     console.log(this.secretIdentity);
        
    // }
    getNmb(){
        console.log(this.nmb);
    }

}

class SuperVillain extends ComicBookCharacter{
     flaws = ['empathy', 'strong moral code'];
     constructor(a,b,c,d,e){
         super(a,b,c,d,e);
      console.log(`${this.alias} eats kittens!`);
      
     }
}

let tom = new SuperHero('tom',123,123,'rko',34);
let jerry = new SuperVillain('jerry',123,234,'haha',12);

console.log(tom, tom.getSecretyId());

console.log('/////');

console.log(jerry);
