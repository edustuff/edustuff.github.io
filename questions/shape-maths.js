function getShapeMaths() {

    var questions = [];

    var units1 = [
        ["mm"],
        ["cm"],
        ["m"]
    ];

    var units2 = [
        ["mm","cm"],
        ["cm","m"]
    ];

    var units3 = [
        ["mm","cm","m"]
    ];

    var unitText = {
        "mm" : "millimetres",
        "cm" : "centimetres",
        "m" : "metres",
        "mm2" : "square millimetres",
        "cm2" : "square centimetres",
        "m2" : "square metres",
        "mm3" : "cubic millimetres",
        "cm3" : "cubic centimetres",
        "m3" : "cubic metres",
    };

    var tests = [
    {x : false, text : "What is {1} subtract {2}", units : [1,2], inputIndex : [1,1,1], outputIndex : 1, transformFunction : twoLengthsDifference},
    {x : false, text : "What is the difference between {2} and {1}", units : [1,2], inputIndex : [1,1,1], outputIndex : 1, transformFunction : twoLengthsDifference},
    {x : false, text : "Add together {1}, {2} and {3}.</BR>What is the total", units : [1,3], inputIndex : [1,1,1], outputIndex : 1, transformFunction : threeLengthsToOne},
    {x : false, text : "Add together {1} and {2}.</BR>What is the total", units : [1,2], inputIndex : [1,1,1], outputIndex : 1, transformFunction : twoLengthsToOne},
//    {text : "A circle has a radius of {1}.</BR>What is the diameter", units : [1,2], inputIndex : 1, outputIndex : 1, transformFunction : radiusToDiameter},
//    {text : "A circle has a diameter of {1}.</BR>What is the radius", units : [1,2], inputIndex : 1, outputIndex : 1, transformFunction : diameterToRadius},
    {x : false, text : "A triangle is {1} wide and {2} tall.</BR>What is the area", units : [1,2], inputIndex : [1,1,1], outputIndex : 2, transformFunction : triangleSidesToArea},
    {x : false, text : "A cuboid is {1} wide, {2} long and {3} high.</BR>What is the volume", units : [1,2], inputIndex : [1,1,1], outputIndex : 3, transformFunction : cuboidSidesToVolume},
    {x : false, text : "A rectangle measures {1} by {2}.</BR>What is the total area of {4} rectangles", units : [1], inputIndex : [1,1,1], outputIndex : 2, transformFunction : tileSidesAndQuantityToTotalArea},
    {x : false, text : "A rectangle has a perimeter of {1} and a width of {2}.</BR>What is the length", units : [1], inputIndex : [1,1,1], outputIndex : 1, transformFunction : rectanglePerimeterAndWidthToLength},
    {x : true, text : "A rectangle has an area of {1} and a length of {2}.</BR>What is the width", units : [1], inputIndex : [2,1,1], outputIndex : 1, transformFunction : rectangleAreaAndLengthToWidth},
    {x : true, text : "A large rectangle has an area of {1} and a small rectangle has an area of {2}.</BR>How many times does the small rectangle fit inside the large rectangle", units : [1], inputIndex : [2,2,1], outputIndex : 1, transformFunction : smallShapeIntoBigShape},
    {x : true, text : "A large cuboid has a volume of {1} and a small cuboid has a volume of {2}.</BR>How many times does the small cuboid fit inside the large cuboid", units : [1], inputIndex : [3,3,1], outputIndex : 1, transformFunction : smallShapeIntoBigShape}

//        {shape : "circle", inputProperties : ["a radius"], outputProperty : "diameter", outputPropertyIndex : 1, transformFunction : radiusToDiameter},
//        {shape : "circle", inputProperties : ["a diameter"], outputProperty : "radius", outputPropertyIndex : 1, transformFunction : diameterToRadius}
//        {shape : "sphere", inputProperties : ["a radius"], outputProperty : "diameter", outputPropertyIndex : 1, transformFunction : radiusToDiameter},
//        {shape : "sphere", inputProperties : ["a diameter"], outputProperty : "radius", outputPropertyIndex : 1, transformFunction : diameterToRadius},
//        {shape : "cube", inputProperties : ["equal edges"], outputProperty : "volume", outputPropertyIndex : 3, transformFunction : cubeSideToVolume},
//        {shape : "cube", inputProperties : ["equal edges"], outputProperty : "total surface area", outputPropertyIndex : 2, transformFunction : cubeSideToSurfaceArea},
//        {shape : "square", inputProperties : ["equal sides"], outputProperty : "area", outputPropertyIndex : 2, transformFunction : squareSideToArea},
//        {shape : "square", inputProperties : ["a perimeter"], outputProperty : "length of one side", outputPropertyIndex : 1, transformFunction : squarePerimeterToSide},
//        {shape : "box", inputProperties : ["a length", "a width", "a height"], outputProperty : "volume", outputPropertyIndex : 3, transformFunction : cuboidSidesToVolume},
//        {shape : "rectangle", inputProperties : ["a length", "a width"], outputProperty : "area", outputPropertyIndex : 2, transformFunction : rectangleSidesToArea},
//        {shape : "rectangle", inputProperties : ["a length", "a width"], outputProperty : "perimeter", outputPropertyIndex : 1, transformFunction : rectangleSidesToPerimeter},
//        {shape : "triangle", inputProperties : ["a width", "a height"], outputProperty : "area", outputPropertyIndex : 2, transformFunction : triangleSidesToArea}
    ];

    var type = 0;

    var maxQuestionType = 0;

    for (x=0; x < tests.length; x++) {
        maxQuestionType = maxQuestionType + tests[x].units.length;
    }

    for (x=0; x < tests.length; x++) {

        var test = tests[x];

        for (y=0; y < test.units.length; y++) {

            var sameUnit = test.units[y];

            var units = units1[randomIntFromInterval(0,units1.length-1)];

            if (sameUnit == 2) {
                units = units2[randomIntFromInterval(0,units2.length-1)];
            }

            if (sameUnit == 3) {
                units = units3[randomIntFromInterval(0,units3.length-1)];
            }

            type = getRandomTypeId(maxQuestionType);

            for (i=1; i < 10; i++) {

                var maxRandomNumber;

                switch(test.outputIndex) {
                  case 1:
                    maxRandomNumber = 50;
                    break;
                  case 2:
                    maxRandomNumber = 12;
                    break;
                  case 3:
                    maxRandomNumber = 5;
                    break;
                  default:
                    maxRandomNumber = 5;
                }

                var inputProperty1Value = randomIntFromInterval(2, maxRandomNumber);
                var inputProperty2Value = randomIntFromInterval(2, maxRandomNumber);

                if (test.x != undefined && test.x) {
                    inputProperty2Value = randomIntFromInterval(2, 12);
                    inputProperty1Value = inputProperty2Value * randomIntFromInterval(2, 12);
                }

                var inputProperty3Value = randomIntFromInterval(2, maxRandomNumber);
                var inputProperty4Value = randomIntFromInterval(2, maxRandomNumber);

                var randomInt1 = randomIntFromInterval(0,units.length-1);
                var randomInt2 = randomInt1;
                var randomInt3 = randomInt1;

                if (randomInt1 == units.length-1) {
                    randomInt2 = 0;
                } else {
                    randomInt2 = randomInt1 + 1;
                }

                if (randomInt2 == units.length-1) {
                    randomInt3 = 0;
                } else {
                    randomInt3 = randomInt2 + 1;
                }

                var inputProperty1ValueUnit = units[randomInt1];
                var inputProperty2ValueUnit = units[randomInt2];
                var inputProperty3ValueUnit = units[randomInt3];

                var outputPropertyValueUnit = units[randomInt2];

                var outputIndex = "";
                if (test.outputIndex > 1) {
                    outputIndex = test.outputIndex;
                }

                var inputIndex1 = "";
                if (test.inputIndex[0] > 1) {
                    inputIndex1 = test.inputIndex[0];
                }
                var inputIndex2 = "";
                if (test.inputIndex[1] > 1) {
                    inputIndex2 = test.inputIndex[1];
                }
                var inputIndex3 = "";
                if (test.inputIndex[2] > 1) {
                    inputIndex3 = test.inputIndex[2];
                }

                var inputProperty1ValueWithUnits = math.unit(inputProperty1Value, inputProperty1ValueUnit + inputIndex1);
                var inputProperty2ValueWithUnits = math.unit(inputProperty2Value, inputProperty2ValueUnit + inputIndex2);
                var inputProperty3ValueWithUnits = math.unit(inputProperty3Value, inputProperty3ValueUnit + inputIndex3);

                var outputPropertyValue = test.transformFunction(inputProperty1ValueWithUnits, inputProperty2ValueWithUnits, inputProperty3ValueWithUnits, inputProperty4Value);

                var outputPropertyValueUnitText = unitText[outputPropertyValueUnit + outputIndex];

                var questionEnd = "";

                if (sameUnit > 1) {
                    questionEnd = " in " + outputPropertyValueUnitText;
                }

                questionEnd = questionEnd + "?";

                var question = test.text.replace("{1}", addIndicies(math.format(inputProperty1ValueWithUnits,thousandFormat)));
                question = question.replace("{2}", addIndicies(math.format(inputProperty2ValueWithUnits,thousandFormat)));
                question = question.replace("{3}", addIndicies(math.format(inputProperty3ValueWithUnits,thousandFormat)));
                question = question.replace("{4}", inputProperty4Value);
                question = question + questionEnd;

                var answer = outputPropertyValue;

                if (outputPropertyValue.toNumber) {
                    answer = addIndicies(math.format(math.to(outputPropertyValue, outputPropertyValueUnit + outputIndex),thousandFormat));
                }

                if (!outputPropertyValue.toNumber || outputPropertyValue.toNumber(outputPropertyValueUnit + outputIndex) > 0) {
                    questions.push({type : type, question : question, answer: answer});
                }

            }

        }

    }

    return questions;

}

function smallShapeIntoBigShape(area1, area2) {
    return math.divide(area1, area2);
}

function rectangleAreaAndLengthToWidth(area, length) {
    return math.divide(area, length);
}

function rectanglePerimeterAndWidthToLength(perimeter, width) {
    return math.divide(math.subtract(perimeter, math.multiply(width, 2)), 2);
}

function tileSidesAndQuantityToTotalArea(width, length, na, quantity) {
    return math.multiply(width, length, quantity);
}

function twoLengthsDifference(length1, length2) {
    return math.subtract(length1, length2);
}

function twoLengthsToOne(length1, length2) {
    return math.add(length1, length2);
}

function threeLengthsToOne(length1, length2, length3) {
    return math.add(length1, length2, length3);
}


function radiusToDiameter(radius) {
    return math.multiply(radius, 2);
}

function diameterToRadius(diameter) {
    return math.divide(diameter, 2);
}

function squareSideToArea(side) {
    return math.multiply(side, side);
}

function triangleSidesToArea(width, height) {
    return math.divide(math.multiply(width, height), 2);
}


function squarePerimeterToSide(perimeter) {
    return math.divide(perimeter, 4);
}

function cubeSideToVolume(side) {
    return math.multiply(side, side, side);
}

function cuboidSidesToVolume(width, length, height) {
    return math.multiply(width, length, height);
}

function cubeSideToSurfaceArea(side) {
    return math.multiply(side, side, 6);
}

function rectangleSidesToArea(width, height) {
    return math.multiply(width, height);
}

function rectangleSidesToPerimeter(width, height) {
    return math.add(math.multiply(width, 2),math.multiply(height, 2));
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


function addIndicies(value) {

    var i = value.charAt(value.length-1);

    if (isFinite(i)) {
        return value.substring(0,value.length-1) +  "<sup>" + i + "</sup>";
    } else {
        return value;
    }

}

function getShapeMathsV2() {

    var questions = [];

    var units = ["mm","cm","m"];

    var unitText = {
        "mm" : "millimetres",
        "cm" : "centimetres",
        "m" : "metres",
        "mm2" : "square millimetres",
        "cm2" : "square centimetres",
        "m2" : "square metres",
        "mm3" : "cubic millimetres",
        "cm3" : "cubic centimetres",
        "m3" : "cubic metres",
    };

    var tests = [
        {shape : "circle", inputProperties : ["a radius"], outputProperty : "diameter", outputPropertyIndex : 1, transformFunction : radiusToDiameter},
        {shape : "circle", inputProperties : ["a diameter"], outputProperty : "radius", outputPropertyIndex : 1, transformFunction : diameterToRadius},
        {shape : "sphere", inputProperties : ["a radius"], outputProperty : "diameter", outputPropertyIndex : 1, transformFunction : radiusToDiameter},
        {shape : "sphere", inputProperties : ["a diameter"], outputProperty : "radius", outputPropertyIndex : 1, transformFunction : diameterToRadius},
        {shape : "cube", inputProperties : ["equal edges"], outputProperty : "volume", outputPropertyIndex : 3, transformFunction : cubeSideToVolume},
        {shape : "cube", inputProperties : ["equal edges"], outputProperty : "total surface area", outputPropertyIndex : 2, transformFunction : cubeSideToSurfaceArea},
        {shape : "square", inputProperties : ["equal sides"], outputProperty : "area", outputPropertyIndex : 2, transformFunction : squareSideToArea},
        {shape : "square", inputProperties : ["a perimeter"], outputProperty : "length of one side", outputPropertyIndex : 1, transformFunction : squarePerimeterToSide},
        {shape : "box", inputProperties : ["a length", "a width", "a height"], outputProperty : "volume", outputPropertyIndex : 3, transformFunction : cuboidSidesToVolume},
        {shape : "rectangle", inputProperties : ["a length", "a width"], outputProperty : "area", outputPropertyIndex : 2, transformFunction : rectangleSidesToArea},
        {shape : "rectangle", inputProperties : ["a length", "a width"], outputProperty : "perimeter", outputPropertyIndex : 1, transformFunction : rectangleSidesToPerimeter},
        {shape : "triangle", inputProperties : ["a width", "a height"], outputProperty : "area", outputPropertyIndex : 2, transformFunction : triangleSidesToArea}
    ];

    var type = 0;

    var maxQuestionType = tests.length * 2;

    //https://mathjs.org/examples/units.js.html

//    print(math.add(a, b)) // 55 cm
//    print(math.multiply(b, 2)) // 0.2 m
//    print(math.divide(math.unit('1 m'), math.unit('1 s'))) // 1 m / s

    for (x=0; x < tests.length; x++) {

        var test = tests[x];

        for (sameUnit=0; sameUnit<=1; sameUnit++) {

            type = getRandomTypeId(maxQuestionType);

            for (i=1; i < 10; i++) {

                var maxRandomNumber;

                switch(test.outputPropertyIndex) {
                  case 1:
                    maxRandomNumber = 50;
                    break;
                  case 2:
                    maxRandomNumber = 12;
                    break;
                  case 3:
                    maxRandomNumber = 5;
                    break;
                  default:
                    maxRandomNumber = 5;
                }

                var inputProperty1Value = randomIntFromInterval(2, maxRandomNumber);
                var inputProperty2Value = randomIntFromInterval(2, maxRandomNumber);
                var inputProperty3Value = randomIntFromInterval(2, maxRandomNumber);

                var randomInt1 = randomIntFromInterval(0,units.length-1);
                var inputProperty1ValueUnit = units[randomInt1];

                var randomInt2 = randomInt1;

                if (sameUnit == 0) {
                    while (randomInt1 == randomInt2 || Math.abs(randomInt1 - randomInt2) > 1) {
                        randomInt2 = randomIntFromInterval(0,units.length-1);
                    }
                }

                var outputPropertyValueUnit = units[randomInt2];

                var index = "";
                if (test.outputPropertyIndex > 1) {
                    index = test.outputPropertyIndex;
                }

                var inputProperty1ValueWithUnits = math.unit(inputProperty1Value, inputProperty1ValueUnit);
                var inputProperty2ValueWithUnits = math.unit(inputProperty2Value, outputPropertyValueUnit);
                var inputProperty3ValueWithUnits = math.unit(inputProperty3Value, inputProperty1ValueUnit);

                var outputPropertyValue = test.transformFunction(inputProperty1ValueWithUnits, inputProperty2ValueWithUnits, inputProperty3ValueWithUnits);

                var outputPropertyValueUnitText = unitText[outputPropertyValueUnit + index];

                var questionEnd = "";

                if (sameUnit == 0) {
                    questionEnd = " in " + outputPropertyValueUnitText;
                }

                var firstPropertyText = test.inputProperties[0] + " of " + math.format(inputProperty1ValueWithUnits,thousandFormat);

                var secondPropertyText = "";

                if (test.inputProperties.length > 1) {
                    secondPropertyText = "</BR>and " + test.inputProperties[1] + " of " + math.format(inputProperty2ValueWithUnits,thousandFormat);
                }

                var thirdPropertyText = "";

                if (test.inputProperties.length > 2) {
                    thirdPropertyText = "</BR>and " + test.inputProperties[2] + " of " + math.format(inputProperty3ValueWithUnits,thousandFormat);
                }

                var question = "A " + test.shape + " has " + firstPropertyText + secondPropertyText + thirdPropertyText + ".</BR>What is the " + test.outputProperty + questionEnd + "?";

                //var answerWithUnits = math.unit(outputPropertyValue, inputProperty1ValueUnit + index);
                //var answer = " " + math.format(answerWithUnits.toNumber(outputPropertyValueUnit + index),thousandFormat) + addIndicies(outputPropertyValueUnit + index);

                var answer = addIndicies(math.format(math.to(outputPropertyValue, outputPropertyValueUnit + index),thousandFormat));

                questions.push({type : type, question : question, answer: answer});
            }

        }

    }

    return questions;

}


//function getShapeMathsSimple() {
//
//    var questions = [];
//
//    var units = ["mm","cm","m"];
//    var unitText = ["millimetres","centimetres","metres"];
//
//    var type = 0;
//
//    var maxQuestionType = 1;
//
//    //https://mathjs.org/examples/units.js.html
//
////    print(math.add(a, b)) // 55 cm
////    print(math.multiply(b, 2)) // 0.2 m
////    print(math.divide(math.unit('1 m'), math.unit('1 s'))) // 1 m / s
//
//    type = getRandomTypeId(maxQuestionType);
//    for (i=1; i < 10; i++) {
//
//        var radius = randomIntFromInterval(2,50);
//        var diameter = radius * 2;
//
//        var unit1 = units[randomIntFromInterval(0,units.length-1)];
//
//        var randomInt = randomIntFromInterval(0,units.length-1);
//        var unit2 = units[randomInt];
//        var unit2Text = unitText[randomInt];
//
//        var radiusWithUnits = math.unit(radius, unit1);
//        var diameterWithUnits = math.unit(diameter, unit1);
//
//        var questionEnd = " in " + unit2Text;
//
//        if (unit1 == unit2) {
//            questionEnd = "";
//        }
//
//        var question = "A circle has a diameter of " + math.format(diameterWithUnits,thousandFormat) + ". What is the radius" + questionEnd + "?";
//
//        var answer = radiusWithUnits.toNumber(unit2);
//
//        questions.push({type : type, question : question, answer: answer});
//    }
//
//    return questions;
//
//}
