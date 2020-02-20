function getFractionsToPercentage() {

    var questions = [];

    for (i = 1; i <= 8; i++) {

        var maxNumerator = i;

        if (i > 5) {
            maxNumerator = 2;
        }

        if (i == 7) {
            maxNumerator = 0;
        }

        for (j = 1; j < maxNumerator; j++) {

            var question = "What is \\({" + j + " \\over " + i + "}\\) as a decimal?";

            var answer = j / i * 100;

            answer = answer + "%";

            if (answer.length > 5) {
                answer = answer.substring(0, 6) + "...%";
            }

            questions.push({type : 1, question : question, answer: answer});

        }
    }

    return questions;

}