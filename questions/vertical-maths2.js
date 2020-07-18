function getVerticalMaths2() {

    var questions = [];

        var type = 0;
        
        var maxQuestionType = 22;

        type = getRandomTypeId(maxQuestionType);
        for (i=100; i < 200; i++) {
            var num1 = i;
            var num2 = 1.25;
            var answer = num1 / num2;
            if (answer == Math.round(answer)) {
                var question = num1 + " &divide; " + num2;
                questions.push({type : type, question : question, answer: answer});
            }
        }


        type = getRandomTypeId(maxQuestionType);
        for (i=1; i < 100; i++) {
            var answer = numberOfLength(2, false) / 100;
            var num2 = numberOfLength(1, false);
            var num1 = round(answer * num2, 2);
            if (num1 != round(num1, 1) && num2 != 1) {
                var question = num1 + " &divide; " + num2;
                questions.push({type : type, question : question, answer: answer});
            }
        }


        type = getRandomTypeId(maxQuestionType);
        for (i=1000; i < 10000; i=i+1) {
            for (j=30; j<100; j=j+10) {
                var num1 = i;
                var num2 = j;
                var answer = num1 / num2;
                if (answer == Math.round(answer) && answer > 12) {
                    var question = num1 + " &divide; " + num2;
                    questions.push({type : type, question : question, answer: answer});
                }
            }
        }


        type = getRandomTypeId(maxQuestionType);
        for (i=11; i < 100; i=i+2) {
            var num1 = i;
            var num2 = 20;
            var question = num1 + " &divide; " + num2;
            var answer = round(num1 / num2, 2);
            questions.push({type : type, question : question, answer: answer});
        }

        type = getRandomTypeId(maxQuestionType);
        for (i=101; i < 300; i=i+2) {
            var num1 = i / 100;
            var num2 = 20;
            var question = num1 + " &divide; " + num2;
            var answer = round(num1 / num2, 4);
            questions.push({type : type, question : question, answer: answer});
        }

        type = getRandomTypeId(maxQuestionType);
        for (i=101; i < 300; i=i+2) {
            var num1 = i;
            var num2 = 4;
            var question = num1 + " &divide; " + num2;
            var answer = round(num1 / num2, 2);
            questions.push({type : type, question : question, answer: answer});
        }

        type = getRandomTypeId(maxQuestionType);
        for (i=101; i < 300; i=i+2) {
            var num1 = i;
            var num2 = 2;
            var question = num1 + " &divide; " + num2;
            var answer = round(num1 / num2, 1);
            questions.push({type : type, question : question, answer: answer});
        }


        type = getRandomTypeId(maxQuestionType);
        for (i=1; i < 100; i++) {
            var num1 = numberOfLength(3, false) / 10;
            var num2 = 2;
            var question = num1 + " &divide; " + num2;
            var answer = round(num1 / num2, 2);
            questions.push({type : type, question : question, answer: answer});
        }


        type = getRandomTypeId(maxQuestionType);
        for (i=1; i < 100; i=i+2) {
            var num1 = round(i / 100, 2);
            var num2 = 2;
            var question = num1 + " &divide; " + num2;
            var answer = round(num1 / num2, 3);
            questions.push({type : type, question : question, answer: answer});
        }


        type = getRandomTypeId(maxQuestionType);
        for (i=1; i < 10; i=i+2) {
            var num1 = round(i / 10, 1);
            var num2 = 2;
            var question = num1 + " &divide; " + num2;
            var answer = round(num1 / num2, 2);
            questions.push({type : type, question : question, answer: answer});
        }


        type = getRandomTypeId(maxQuestionType);
        for (i=1; i < 100; i++) {
            var num1 = numberOfLength(4, false);
            var num2 = numberOfLength(1, false);
            var question = num1 + " &times; " + num2;
            var answer = num1 * num2;
            questions.push({type : type, question : question, answer: answer});
        }


        type = getRandomTypeId(maxQuestionType);
        for (i=1; i < 100; i++) {
            var num1 = numberOfLength(4, false);
            var num2 = numberOfLength(2, false);
            var question = num1 + " &times; " + num2;
            var answer = num1 * num2;
            questions.push({type : type, question : question, answer: answer});
        }

        type = getRandomTypeId(maxQuestionType);
        for (i=1; i < 100; i++) {
            var num1 = numberOfLength(2, false);
            var num2 = numberOfLength(2, false) / 10;
            var question = num1 + " &times; " + num2;
            var answer = round(num1 * num2, 1);
            questions.push({type : type, question : question, answer: answer});
        }


        type = getRandomTypeId(maxQuestionType);
        for (i=1; i < 100; i++) {
            var num1 = numberOfLength(2, false);
            var num2 = numberOfLength(2, false) / 10;
            var question = num1 + " - " + num2;
            var answer = round(num1 - num2, 1);
            questions.push({type : type, question : question, answer: answer});
        }


        type = getRandomTypeId(maxQuestionType);
        for (i=1; i < 100; i++) {
            var num1 = numberOfLength(3, false) / 10;
            var num2 = numberOfLength(3, false) / 10;
            var question = num1 + " - " + num2;
            var answer = round(num1 - num2, 1);
            if (answer > 0) {
                questions.push({type : type, question : question, answer: answer});
            }
        }


        type = getRandomTypeId(maxQuestionType);
        for (i=1; i < 100; i++) {
            var num1 = numberOfLength(1, false) / 10;
            var num2 = numberOfLength(1, false) / 10;
            var question = num1 + " + " + num2;
            var answer = round(num1 + num2, 1);
            questions.push({type : type, question : question, answer: answer});
        }


        type = getRandomTypeId(maxQuestionType);
        for (i=1; i < 100; i++) {
            var num1 = numberOfLength(2, false) / 100;
            var num2 = numberOfLength(1, false) / 100;
            var question = num1 + " + " + num2;
            var answer = round(num1 + num2, 2);
            questions.push({type : type, question : question, answer: answer});
        }


        type = getRandomTypeId(maxQuestionType);
        for (i=1; i < 100; i++) {
            var num1 = numberOfLength(2, false);
            var num2 = numberOfLength(1, false) / 10;
            var question = num1 + " + " + num2;
            var answer = round(num1 + num2, 1);
            questions.push({type : type, question : question, answer: answer});
        }


        type = getRandomTypeId(maxQuestionType);
        for (i=1; i < 100; i++) {
            var num1 = numberOfLength(3, false) / 10;
            var num2 = numberOfLength(3, false) / 10;
            var question = num1 + " + " + num2;
            var answer = round(num1 + num2, 1);
            questions.push({type : type, question : question, answer: answer});
        }


        type = getRandomTypeId(maxQuestionType);
        for (i=1; i < 100; i++) {
            var num1 = numberOfLength(3, false) / 10;
            var num2 = numberOfLength(3, false) / 100;
            var question = num1 + " + " + num2;
            var answer = round(num1 + num2, 2);
            questions.push({type : type, question : question, answer: answer});
        }


        type = getRandomTypeId(maxQuestionType);
        for (i=1; i < 100; i++) {
            var num1 = numberOfLength(4, false) / 100;
            var num2 = numberOfLength(3, false) / 10;
            var question = num1 + " + " + num2;
            var answer = round(num1 + num2, 2);
            questions.push({type : type, question : question, answer: answer});
        }


        type = getRandomTypeId(maxQuestionType);
        for (i=1; i < 100; i++) {
            var num1 = numberOfLength(4, false) / 1000;
            var num2 = numberOfLength(3, false) / 100;
            var question = num1 + " + " + num2;
            var answer = round(num1 + num2, 3);
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

function round(num, dp) {
 return Math.round((num + Number.EPSILON) * Math.pow(10,dp)) / Math.pow(10,dp)
}

function numberOfLength(length, includeZero) {

    var number = "";

    var digitToBeZero = randomIntFromInterval(1,2);

    for (j=0; j<length; j++) {
       if (j == digitToBeZero && includeZero) {
            number = number + "0";
       } else {
            if (j==0) {
                number = number + "" + (Math.floor(Math.random() * 8) + 1);
            } else {
                number = number + "" + (Math.floor(Math.random() * 8) + 1);
            }
        }

    }

    return number * 1;

}

function getAdditionThatForcesCarrying(number1, length) {

    var number1Str = number1 + "";
    var newNumber = "";

    for (j=number1Str.length-1; j>=number1Str.length-length; j--) {
        var digit = number1Str.charAt(j) * 1;
        var newDigit = randomIntFromInterval(10-digit, 9);
        newNumber = newDigit + newNumber;
    }

    return newNumber * 1;

}


function getSubtractionThatForcesBorrowing(number1, length) {

    var number1Str = number1 + "";
    var newNumber = "";

    for (j=number1Str.length-1; j>=number1Str.length-length; j--) {
        var digit = number1Str.charAt(j) * 1;
        var newDigit = randomIntFromInterval(digit + 1, 9);
        newNumber = newDigit + newNumber;
    }

    return newNumber * 1;

}


function randomIntFromInterval(min, max) { // min and max included
  min = math.min(min,max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}