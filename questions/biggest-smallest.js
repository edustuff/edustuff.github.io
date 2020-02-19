var questionType = 0;

function getBiggestSmallest() {

    var questions = [];

    // DONE
    // all decimals (mixed 1,2,3 decimal places)
    // all 1/? (where ? is varied)
    // all ?/n (where ? is varied and n is constant)
    // all ?-1/? (where ? is varied)
    // all n/? (where n is constant and ? is varied)
    // all x/y improper fractions, where x is a multiple of y

    // TO-DO
    // all proper fractions (common denominator)
    // all improper fractions (?)
    // all x/y of n (where x/y is a proper fraction) and n is a multiple of x/y greater than 1
    // mixed numbers (?)
    // combination of the above

    questions.push.apply(questions, getDecimals());
    questions.push.apply(questions, fractions1());

    return questions;

}

function shuffleDigits(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function swap(array) {
    do {
    var i = Math.floor(Math.random() * array.length);
    var j = Math.max(0, i - 1);
    } while (j == i);

    [array[i], array[j]] = [array[j], array[i]];
}

function fractions1() {

    var questions = [];

    var questionType = "smallest";
    var questionTypeId = 3;
    var answerValue = null;

    for (var x=0; x<=4; x++)
    {

        questionTypeId = x + 2;


        for (var n=0; n<20; n++) {

            var answer = "";

            if (questionType == "smallest") {
                questionType = "biggest";
                answerValue = null;
            } else {
                questionType = "smallest";
                answerValue = null;
            }

            var numbers = [];

            switch(x) {
                case 0:
                    var denominator = Math.floor(Math.random() * 100) + 5;
                    break;
                case 1:
                    var numerator = 1;
                    break;
                case 2:
                    break;
                case 3:
                    var numerator = Math.floor(Math.random() * 100) + 1;
                    break;
                case 4:
                    break;

            }


            for (var i=0; i<5; i++) {

                do {

                    switch(x) {
                        case 0:
                            var numerator = Math.floor(Math.random() * denominator);
                            break;
                        case 1:
                            var denominator = Math.floor(Math.random() * 100) + 1;
                            break;
                        case 2:
                            var denominator = Math.floor(Math.random() * 100) + 5;
                            var numerator = denominator - 1;
                            break;
                        case 3:
                            var denominator = Math.floor(Math.random() * 100) + numerator;
                            break;
                        case 4:
                            var denominator = Math.floor(Math.random() * 11) + 2;
                            var numerator = denominator * (Math.floor(Math.random() * 12) + 1);
                            break;
                    }

                    var fraction = "\\({" + numerator + " \\over " + denominator + "}\\)";

                    if (x==2) {
                        console.log(fraction);
                    }

                } while (numbers.includes(fraction));

                numbers.push(fraction);

                var fractionValue = numerator / denominator;

                console.log(answerValue, fractionValue);

                if (questionType == "biggest" && (answerValue == null || fractionValue > answerValue)) {
                    answerValue = fractionValue;
                    answer = fraction;
                }

                if (questionType == "smallest" && (answerValue == null || fractionValue < answerValue)) {
                    answerValue = fractionValue;
                    answer = fraction;
                }

            }

            questions.push({type : questionTypeId, question : "What fraction is the <B>" + questionType + "</B>?<p class='hidden'>" + (numbers + "").split(",").join(" , ") + "</p>", answer: answer, answers: numbers});
        }

    }

    return questions;

}

function getDecimals() {

    var questions = [];

    var questionType = "smallest";
    var questionTypeId = 1;
    var answer = 1000000;

    for (var n=0; n<20; n++) {

        if (questionType == "smallest") {
            questionType = "biggest";
            answer = 0;
        } else {
            questionType = "smallest";
            answer = 1000000;
        }

        var digits = [];
        var numbers = [];

        digits.push(Math.round(Math.random() * 10));
        digits.push(Math.round(Math.random() * 10));
        digits.push(Math.round(Math.random() * 10));
        digits.push(Math.round(Math.random() * 10));
        digits.push(".");

        shuffleDigits(digits);

        for (var i=0; i<5; i++) {

            do {

                var number = "";
                swap(digits);

                for (var j=0; j<digits.length; j++)
                {
                    number = number + ("" + digits[j]);
                }

                number = number * 1;

            } while (numbers.includes(number));

            numbers.push(number);

            if (questionType == "biggest" && number > answer) {
                answer = number;
            }

            if (questionType == "smallest" && number < answer) {
                answer = number;
            }

        }

        questions.push({type : questionTypeId, question : "What number is the <B>" + questionType + "</B>?<p class='hidden'>" + (numbers + "").split(",").join(" , ") + "</p>", answer: answer, answers: numbers});
    }

    return questions;

}