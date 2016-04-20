'use strict';
let add = (value1:number, value2:number) => value1 + value2;
let productId = 42;

for (let productId:number = 0; productId < 10; productId++) {

}

const SM_CONST = 100;

var shotgunMcs = {
    ammoCount: 8,
    showAmmoCount: function () {
        return ()=>console.log(this.ammoCount);
    },
    showClipCount: function (clipCount:number = 8) {
        return ()=>console.log(clipCount);
    }
};

shotgunMcs.showClipCount()();
shotgunMcs.showClipCount(1)();

var player = {
    firstName: "haven",
    lastName: "ramos",
    showFullName: function ():void {
        console.log(this.firstName + ' ' + this.lastName);
    }
};

var playerB = {
    firstName: "lindzey",
    lastName: "ramos"
};

player.showFullName.apply(playerB);

var data = [{name: "wil"}, {name: "alf"}];

var user = {
    avgScore: null,
    scores: [900, 845, 809, 950],
    data: [{name: "haven"}, {name: "lindzey"}],
    tournament: "starcraft 2016",
    name: "chikaboom",
    join: function (event) {
        var randomNum:number = Math.random();
        console.log(randomNum + ' ' + this.name);
    },
    playTournament: function () {
        var userObj = this;
        for (var i in this.data) {
            console.log(userObj.data[i].name + ' is playing ' + userObj.tournament);
        }
    },
    playTournamentOld: function () {
        let userObj = this;
        userObj.data.forEach(function (person) {
            console.log(userObj);
            console.log(person.name + ' is playing ' + userObj.tournament)
        });
    },
    playTournamentNew: function () {
        console.log(this);
        console.log(this.data[0].name + ' is with ' + this.data[1].name)
    },
    avg: function () {
        var sumOfScores:number = 0;
        for (var i in this.scores) {
            sumOfScores += this.scores[i];
        }
        this.avgScore = sumOfScores / this.scores.length;
    }
};

var cars = {
    data: [
        {name: "Mazda 6"},
        {name: "Rav 4"}
    ]
}

var userB = {
    avgScore: null,
    scores: [1, 1, 1, 1]
};

var userC = {
    avgScore: null,
    scores: [454, 41, 451, 51]
};

function greet(gender, age, name) {
    var salutation:string;
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
