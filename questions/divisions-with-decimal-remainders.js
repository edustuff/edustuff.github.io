function getDivisionsWithDecimalRemainders() {

    var questions = [];

    for (i = 1; i <= 100; i=i+1) {
        for (p = 1; p <= 9; p++) {
            var answer = i / p;
            var answerStr = answer + "";
            var decimalRemainder = "";
            if (answerStr.includes(".")) {
                var decimalRemainder = answerStr.split(".")[1];
            }
            for (r = 2; r <=3; r++)
            if (decimalRemainder.length == r) {
                var question = i + " &divide; " + p;
                questions.push({type : r - 1, question : question, answer: answer});
            }
        }
    }

    return questions;

}

