function add(base, position, amount) {
    return base + (position * amount);
}

function subtract(base, position, amount) {
    return base - (position * amount);
}

function getSequenceQuestions() {

    var questions = [];

    createSequence(1, questions, add);
    createSequence(2, questions, subtract);

    return questions;

}

function createSequence(typeId, questions, transformation) {

    for (i = 1; i <= 100; i=i+Math.floor(Math.random() * 10)) {

        var element1 = i;

        var addition = Math.floor(Math.random() * 10) + 1;

        var sequenceCount = Math.floor(Math.random() * 2) + 4;

        var missingTermPosition = Math.floor(Math.random() * sequenceCount);

        var sequence = "<p class='questionMinor'>What is the missing term in this sequence?</p>";

        var answer = "";

        for (j = 0; j < sequenceCount; j++) {

            var spacer = "";
            if (j != 0) spacer = ", ";

            var term = transformation(element1, j, addition);

            if (j == missingTermPosition) {
                answer = term;
                sequence = sequence + spacer + "....";
            } else {
                sequence = sequence + spacer + term;
            }
        }

        questions.push({type : typeId, question : sequence, answer: answer});
    }

}