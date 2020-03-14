function getMultiplyDivideByFactorsOfTen() {

    var questions = [];

    var possibleAnswers = [];

    var lowestPossibleAnswer1 = round(Math.random() * 1, 3);
//    var lowestPossibleAnswer2 = round(Math.random() * 1, 3);
    var lowestPossibleAnswer3 = round(Math.random() * 0.1, 3);
//    var lowestPossibleAnswer4 = round(Math.random() * 10, 3);

    for (n = 0; n <= 7; n++) {
        possibleAnswers.push(round(lowestPossibleAnswer1 * Math.pow(10,n),3));
//        possibleAnswers.push(round(lowestPossibleAnswer2 * Math.pow(10,n),3));
        possibleAnswers.push(round(lowestPossibleAnswer3 * Math.pow(10,n),3));
//        possibleAnswers.push(round(lowestPossibleAnswer4 * Math.pow(10,n),3));
    }

    for (n = 0; n < 200; n++) {

        var type = 0;

        for (a = 1; a <=3; a++) {

            for (t = 1; t <=2; t++) {

                type = type + 1;

                var value = possibleAnswers[Math.floor(Math.random() * possibleAnswers.length)];
                var adjustment = Math.pow(10, a);

                if (t == 1) {
                    question = math.format(value,thousandFormat) + " &times; " + adjustment;
                    answer = value * adjustment;
                } else {
                    question = math.format(value,thousandFormat) + " &divide; " + adjustment;
                    answer = value / adjustment;
                }

                if (possibleAnswers.includes(answer)) {
                    questions.push({type : type, question : question, answer: math.format(answer,thousandFormat)});
                }

            }

        }

    }

    return questions;

}

function round(num, dp) {
 return Math.round((num + Number.EPSILON) * Math.pow(10,dp)) / Math.pow(10,dp)
}

function thousandFormat(value) {
    return value.toLocaleString()
}