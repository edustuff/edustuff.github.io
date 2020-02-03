function getOperationOrderQuestions() {

    var questions = [];

    var patterns = [
    "X1 #1 X2 #2 X3",
    "(X1 #1 X2) #2 X3",
    "X1 #1 (X2 #2 X3)",
    "X1 #1 X2 #2 X3 #3 X4",
    "(X1 #1 X2) #2 X3 #3 X4",
    "X1 #1 (X2 #2 X3) #3 X4",
    "X1 #1 X2 #2 (X3 #3 X4)",
    "(X1 #1 X2) #2 (X3 #3 X4)",
    ];

    var symbols = ["+","-","&times;","&divide;"];

    for (j = 0; j < 3; j++) {
        for (i = 0; i < patterns.length; i++) {

            var mathPattern = patterns[i];

            mathPattern = mathPattern.replace("#1", symbols[Math.floor(Math.random() * 4)]);
            mathPattern = mathPattern.replace("#2", symbols[Math.floor(Math.random() * 4)]);
            mathPattern = mathPattern.replace("#3", symbols[Math.floor(Math.random() * 4)]);
            mathPattern = mathPattern.replace("#4", symbols[Math.floor(Math.random() * 4)]);

            var answer = 0.1;

            var numberPattern = mathPattern;

            while (answer != Math.round(answer) || !isFinite(answer) || answer == 0 || answer > 144 || answer < -144) {

                numberPattern = mathPattern;

                numberPattern = numberPattern.replace("X1", number());
                numberPattern = numberPattern.replace("X2", number());
                numberPattern = numberPattern.replace("X3", number());
                numberPattern = numberPattern.replace("X4", number());

                answer = calculateAnswer(numberPattern);

            }

            questions.push({type : i + 1, question : numberPattern, answer: answer});

        }
    }

    return questions;

}

function number() {

    var num = Math.floor(Math.random() * 13);

    if (Math.floor(Math.random() * 2) == 0 && num <= 3 && num > 0) {
        return num + "<sup>2</sup>";
    } else {
        return num;
    }

}

function calculateAnswer(question) {

    var modifiedQuestion = question.split("&times;").join("*").split("&divide;").join("/").split("<sup>2</sup>").join("^2");

    console.log(modifiedQuestion);

    var answer = math.evaluate(modifiedQuestion);

    return answer;

}