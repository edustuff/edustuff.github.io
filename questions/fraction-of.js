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