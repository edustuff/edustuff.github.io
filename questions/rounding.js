// to the closest million down to thousandth
// "whole number"
// money (closest pound)
// unit (distance, weight, time, etc - closest metre, kg, hour, minute, etc)


function getRoundingQuestions() {

    var questions = [];

    var roundings = [
        {startingUnit : "minutes", min : 1, max : 179, roundedUnits : ["hour"]},
        {startingUnit : "seconds", min : 1, max : 179, roundedUnits : ["minute"]},
        {startingUnit : "mm", min : 1, max : 10000, roundedUnits : ["cm" , "m"]},
        {startingUnit : "cm", min : 1, max : 1000, roundedUnits : ["m"]},
        {startingUnit : "m", min : 1, max : 10000, roundedUnits : ["km"]},
        {startingUnit : "grams", min : 1, max : 10000, roundedUnits : ["kg"]},
    ];

    var roundings2 = [
        {name : "million", position : 7},
        {name : "hundred thousand", position : 6},
        {name : "ten thousand", position : 5},
        {name : "thousand", position : 4},
        {name : "hundred", position : 3},
        {name : "ten", position : 2}
    ];

    var roundings3 = [
        {name : "the nearest whole number", position : 0},
        {name : "the nearest tenth", position : 1},
        {name : "the nearest hundredth", position : 2},
        {name : "the nearest thousandth", position : 3},
        {name : "1 decimal place", position : 1},
        {name : "2 decimal places", position : 2}
    ];

    var roundings4 = [
        {name : "the nearest pound", position : 0}
    ];

    var maxType = roundings.length + roundings2.length + roundings3.length + roundings4.length + 1;

    for (r = 0; r < roundings.length; r++) {

        var rounding = roundings[r];

        for (ru = 0; ru < rounding.roundedUnits.length; ru++) {

            var roundedUnit = rounding.roundedUnits[ru];

            type = getRandomTypeId(maxType);

            for (i = 1; i <= 50; i++) {

                var randomInt = randomIntFromInterval(rounding.min,rounding.max);

                var q = math.unit(randomInt, rounding.startingUnit)
                var a = q.toNumber(roundedUnit)
                var a2 = math.round(a) + " " + roundedUnit;

                questions.push({type : type, question : "what is " + randomInt + " " + rounding.startingUnit + " rounded to the nearest " + roundedUnit + "?", answer: a2});
            }

        }

    }

    for (r = 0; r < roundings2.length; r++) {

        var rounding = roundings2[r];

        type = getRandomTypeId(maxType);

        for (i = 1; i <= 50; i++) {

            var maxPower = randomIntFromInterval(rounding.position + 1, 8);

            var randomInt = randomIntFromInterval(Math.pow(10,rounding.position),Math.pow(10,maxPower));

            var roundedAnswer = round(randomInt / Math.pow(10,rounding.position-1),0)*Math.pow(10,rounding.position-1);

            questions.push({type : type, question : "what is " + randomInt + " rounded to the nearest " + rounding.name + "?", answer: roundedAnswer});
        }

    }


    for (r = 0; r < roundings3.length; r++) {

        var rounding = roundings3[r];

        type = getRandomTypeId(maxType);

        for (i = 1; i <= 50; i++) {

            var maxPower = randomIntFromInterval(rounding.position + 1, 5);
            var maxPower2 = randomIntFromInterval(1, 3);

            var randomInt = randomIntFromInterval(1,Math.pow(10, maxPower + maxPower2)) / Math.pow(10, maxPower);

            var roundedAnswer = round(randomInt, rounding.position);

            questions.push({type : type, question : "what is " + randomInt + " rounded to " + rounding.name + "?", answer: roundedAnswer});
        }

    }


    for (r = 0; r < roundings4.length; r++) {

        var rounding = roundings4[r];

        type = getRandomTypeId(maxType);

        for (i = 1; i <= 50; i++) {

            var randomInt = randomIntFromInterval(1,10000)/100;

            var roundedAnswer = round(randomInt, rounding.position);

            questions.push({type : type, question : "what is &pound;" + randomInt + " rounded to " + rounding.name + "?", answer: "&pound;" + roundedAnswer + ".00"});
        }

    }



    return questions;

}

existingTypeIds = [];
function getRandomTypeId(max) {

    var newId = -1;

    do {
        newId = Math.floor(Math.random() * max) + 1;
    } while (existingTypeIds.includes(newId));

    existingTypeIds.push(newId);

    return newId;

}

function round(num, dp) {
 return Math.round((num + Number.EPSILON) * Math.pow(10,dp)) / Math.pow(10,dp)
}

function randomIntFromInterval(min, max) { // min and max included
  min = math.min(min,max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}