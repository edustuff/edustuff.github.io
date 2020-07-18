function getShapeMaths() {

    var questions = [];

    var units = ["mm","cm","m"];

    var type = 0;

    var maxQuestionType = 1;

    //https://mathjs.org/examples/units.js.html

//    print(math.add(a, b)) // 55 cm
//    print(math.multiply(b, 2)) // 0.2 m
//    print(math.divide(math.unit('1 m'), math.unit('1 s'))) // 1 m / s

    type = getRandomTypeId(maxQuestionType);
    for (i=1; i < 10; i++) {

        var radius = randomIntFromInterval(2,50);
        var diameter = radius * 2;

        var unit1 = units[randomIntFromInterval(0,units.length-1)];
        var unit2 = units[randomIntFromInterval(0,units.length-1)];



        var question = "A circle has a diameter of " + math.format(value1Unit.toNumber(unit1),thousandFormat);
        questions.push({type : type, question : question, answer: answer});
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


function randomIntFromInterval(min, max) { // min and max included
  min = math.min(min,max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}