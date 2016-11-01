var dazzler = {
    powers: ['dfdf', 'sdsd'],
    saveTheDay: function () {
        console.log("Dazzkler " + this.powers);
    }
};
var badGuy = {
    badDeeds: ['swd', 'sfd', 'sdd'],
    getRandomDadDeed: function () {
        return this.badDeeds[Math.floor(Math.random() * this.badDeeds.length)];
    },
    commitBadDeed: function () {
        console.log("Bad Guy " + this.getRandomDadDeed());
    }
};
function saveDayOrBadDeed(something) {
    if (something.powers) {
        something.saveTheDay();
    }
    ;
    if (something.powers) {
    }
    ;
}
