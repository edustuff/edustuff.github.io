function getVerticalMaths() {

    var questions = [];

        var type = 0;

        for(numberOfDigits=3;numberOfDigits<=4;numberOfDigits++)
        {
            type++;
            for (i=1; i < 100; i++) {
                var num1 = numberOfLength(numberOfDigits, false);
                var num2 = getAdditionThatForcesCarrying(num1, numberOfDigits-1);
                var question = num1 + " + " + num2;
                var answer = num1 + num2;
                questions.push({type : type, question : question, answer: answer});
            }
        }

        var numberOfDigits=4;

        type++;
        for (i=1; i < 100; i++) {
            var num1 = numberOfLength(numberOfDigits, true);
            var num2 = getSubtractionThatForcesBorrowing(num1, numberOfDigits-1);
            var question = num1 + " - " + num2;
            var answer = num1 - num2;
            questions.push({type : type, question : question, answer: answer});
        }


        var numberOfDigits=2;

        type++;
        for (i=1; i < 100; i++) {
            var num1 = numberOfLength(numberOfDigits, false);
            var num2 = numberOfLength(numberOfDigits, false);
            var question = num1 + " &times; " + num2;
            var answer = num1 * num2;
            questions.push({type : type, question : question, answer: answer});
        }

        type++;
        for (i=1; i < 1500; i++) {
            for (j=3; j<10; j++) {
                var num1 = i;
                var num2 = j;
                var answer = num1 / num2;
                if (answer == Math.round(answer) && answer > 12) {
                    var question = num1 + " &divide; " + num2;
                    questions.push({type : type, question : question, answer: answer});
                }
            }
        }

    return questions;

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