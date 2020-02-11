function getPercentageToDecimal() {

    var questions = [];

    for (i = 1; i <= 5; i++) {
        for (j = 1; j < i; j++) {

            var question = "What is \\({" + j + " \\over " + i + "}\\) as a decimal?";

            var answer = j / i;

            answer = answer + "";

            if (answer.length > 4) {
                answer = answer.substring(0, 6);
            }

            questions.push({type : 1, question : question, answer: answer});

        }
    }

    return questions;

}