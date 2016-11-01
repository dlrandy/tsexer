interface SuperHeroo{//这里不能同一个文件夹下有相同的名字
    powers: string[];
    saveTheDay: () => void;
}
let dazzler: SuperHeroo = {
    powers: ['dfdf','sdsd'],
    saveTheDay(){
        console.log(`Dazzkler ${this.powers}`);
        
    }
}

interface BadGuy{
    badDeeds: string[];
    getRandomDadDeed: ()=>string;
    commitBadDeed: ()=> void;
}
let badGuy: BadGuy = {
    badDeeds:['swd', 'sfd', 'sdd'],
    getRandomDadDeed(){
        return this.badDeeds[Math.floor(Math.random()*this.badDeeds.length)]
    },
    commitBadDeed(){
        console.log(`Bad Guy ${this.getRandomDadDeed()}`);
        
    }
}

function saveDayOrBadDeed(something:SuperHeroo | BadGuy){
    if((something as SuperHeroo).powers ){
(something as SuperHeroo).saveTheDay();
    };
    if((<SuperHeroo>something).powers ){

    };
}
