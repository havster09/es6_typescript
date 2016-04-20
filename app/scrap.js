'use strict';
var add = function (value1, value2) { return value1 + value2; };
var productId = 42;
for (var productId_1 = 0; productId_1 < 10; productId_1++) {
}
var SM_CONST = 100;
var shotgunMcs = {
    ammoCount: 8,
    showAmmoCount: function () {
        var _this = this;
        return function () { return console.log(_this.ammoCount); };
    },
    showClipCount: function (clipCount) {
        if (clipCount === void 0) { clipCount = 8; }
        return function () { return console.log(clipCount); };
    }
};
shotgunMcs.showClipCount()();
shotgunMcs.showClipCount(1)();
var player = {
    firstName: "haven",
    lastName: "ramos",
    showFullName: function () {
        console.log(this.firstName + ' ' + this.lastName);
    }
};
var playerB = {
    firstName: "lindzey",
    lastName: "ramos"
};
player.showFullName.apply(playerB);
var data = [{ name: "wil" }, { name: "alf" }];
var user = {
    avgScore: null,
    scores: [900, 845, 809, 950],
    data: [{ name: "haven" }, { name: "lindzey" }],
    tournament: "starcraft 2016",
    name: "chikaboom",
    join: function (event) {
        var randomNum = Math.random();
        console.log(randomNum + ' ' + this.name);
    },
    playTournament: function () {
        var userObj = this;
        for (var i in this.data) {
            console.log(userObj.data[i].name + ' is playing ' + userObj.tournament);
        }
    },
    playTournamentOld: function () {
        var userObj = this;
        userObj.data.forEach(function (person) {
            console.log(userObj);
            console.log(person.name + ' is playing ' + userObj.tournament);
        });
    },
    playTournamentNew: function () {
        console.log(this);
        console.log(this.data[0].name + ' is with ' + this.data[1].name);
    },
    avg: function () {
        var sumOfScores = 0;
        for (var i in this.scores) {
            sumOfScores += this.scores[i];
        }
        this.avgScore = sumOfScores / this.scores.length;
    }
};
var cars = {
    data: [
        { name: "Mazda 6" },
        { name: "Rav 4" }
    ]
};
var userB = {
    avgScore: null,
    scores: [1, 1, 1, 1]
};
var userC = {
    avgScore: null,
    scores: [454, 41, 451, 51]
};
function greet(gender, age, name) {
    var salutation;
    if (gender === "male") {
        salutation = "Mr. ";
    }
    else {
        salutation = "Ms. ";
    }
    if (age > 25) {
        return "Hello, " + salutation + name + ".";
    }
    else {
        return "Hey, " + name + ".";
    }
}
user.avg.apply(userC);
console.log(userC.avgScore);
//user.playTournamentOld();
$('button').click(user.playTournamentOld.bind(user));
var showUserData = user.playTournamentNew.bind(user);
var showCarData = user.playTournamentNew.bind(cars);
//showUserData();
showCarData();
//# sourceMappingURL=scrap.js.map