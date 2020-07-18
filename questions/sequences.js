function add(base, position, amount) {
    return base + (position * amount);
}

function times10(base, position, amount) {
    return base * (Math.pow(10, position));
}

function times20(base, position, amount) {
    return base * (Math.pow(20, position));
}



function getSequenceQuestions() {

    var questions = [];

    createSequence(1, 0, 100, 10, questions, add, false);
    createSequence(2, 0, 100, 10, questions, add, true);
    createSequence(3, 0, 100, 10, questions, times10, false);
    createSequence(4, 0, 100, 10, questions, times10, true);
    createSequence(5, 1, 5, 2, questions, times20, false);
    createSequence(6, 1, 5, 2, questions, times20, true);
    createSequence(7, -50, 0, 10, questions, add, false);
    createSequence(8, -50, 0, 10, questions, add, true);

    return questions;

}

function createSequence(typeId, minBase, maxBase, stepSize, questions, transformation, reverse) {

    for (i = minBase; i <= maxBase; i=i+Math.floor(Math.random() * stepSize)) {

        var element1 = i;

        var addition = Math.floor(Math.random() * 10) + 1;

        var sequenceCount = Math.floor(Math.random() * 2) + 4;

        var missingTermPosition = Math.floor(Math.random() * sequenceCount);

        var sequence = "";//"<p class='questionMinor'>What is the missing term in this sequence?</p>";

        var answer = "";

        for (j = 0; j < sequenceCount; j++) {

            var spacer = "";
            if (j != 0) spacer = ", ";

            var term = transformation(element1, j, addition);

            if (j == missingTermPosition) {
                answer = term;
                if (reverse) {
                    sequence = "...." + spacer + sequence;
                } else {
                    sequence = sequence + spacer + "....";
                }
            } else {
                if (reverse) {
                    sequence = term + spacer + sequence;
                } else {
                    sequence = sequence + spacer + term;
                }
            }
        }

        questions.push({type : typeId, question : sequence, answer: answer});
    }

}