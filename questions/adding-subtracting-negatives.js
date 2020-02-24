function addingSubtractingNegativeNumbers() {

    var questions = [];

    for (i = 1; i<100; i++) {

        var number1 = Math.floor(Math.random() * 10) + 1;
        var number2 = -1 * (Math.floor(Math.random() * 10) + 1);

        var additionQuestion = number1 + " + " + number2;
        var additionAnswer = number1 + number2;

        var subtractionQuestion = number1 + " - " + number2;
        var subtractionAnswer = number1 - number2;

        if (additionAnswer >= 0) {
            questions.push({type : 1, question : additionQuestion, answer: additionAnswer});
        } else {
            questions.push({type : 3, question : additionQuestion, answer: additionAnswer});
        }

        if (subtractionAnswer >= 0) {
            questions.push({type : 2, question : subtractionQuestion, answer: subtractionAnswer});
        } else {
            questions.push({type : 4, question : subtractionQuestion, answer: subtractionAnswer});
        }

    }

    return questions;

}