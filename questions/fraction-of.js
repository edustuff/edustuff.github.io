var questionType = 0;

function getFractionOf() {

    var questions = [];

    var fractions = [];

    fractions.push({label:"half of", value: 1/2, max:144-5});
    fractions.push({label:"a quarter of", value: 1/4, max:144-5});
    fractions.push({label:"three-quarters of", value: 3/4, max:36-5});
    fractions.push({label:"a third of", value: 1/3, max:36-5});
    fractions.push({label:"two-thirds of", value: 2/3, max:36-5});

    for (i=0; i<10; i++) {

        for (p=0; p<=1; p++){

            for (f=0; f<fractions.length; f++) {

                if (p==0 || !fractions[f].label.includes("third")) {

                    var number = Math.floor(Math.random() * fractions[f].max);

                    var answers = [];

                    for (j=number; j<number+5; j++) {

                        var possibleAnswer = (j * fractions[f].value);

                        if (p==1) {
                            possibleAnswer = "&pound;" + possibleAnswer.toFixed(2);
                        }

                        if (p==0 && (possibleAnswer + "").length > 5) {
                            possibleAnswer = (possibleAnswer + "").substring(0, 5) + "...";
                        }

                        answers.push(possibleAnswer);

                    }

                    do {
                        var answerId = Math.floor(Math.random() * answers.length);
                        var answer = answers[answerId];
                    } while (Math.round(answer) == answer);

                    var questionValue = (number + answerId);

                    if (p==1) {
                        questionValue = "&pound;" + questionValue;
                    }

                    questions.push({type : f+1, question : "What is " + fractions[f].label + " " + questionValue  + "?", answer: answer, answers: answers });

                }
            }

        }

    }


    return questions;

}

/*

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

*/