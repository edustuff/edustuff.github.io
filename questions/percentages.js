function getPercentageQuestions() {

    var questions = [];


    for (i = 10; i <= 120; i=i+10) {
        for (p = 0; p <= 100; p=p+10) {
        questions.push({type : 1, question : p + "% of " + i, answer: i * (p / 100)});
        }
    }

    for (i = 20; i <= 120; i=i+20) {
        for (p = 5; p <= 95; p=p+10) {
        questions.push({type : 2, question : p + "% of " + i, answer: i * (p / 100)});
        }
    }

    for (i = 4; i <= 48; i=i+4) {
        questions.push({type : 3, question : "25% of " + i, answer: i / 4});
    }

    for (i = 1; i <= 19; i=i+2) {
        questions.push({type : 4, question : "50% of " + i, answer: i / 2});
    }

    for (i = 1; i <= 100; i=i+Math.floor(Math.random() * 10)) {
        questions.push({type : 5, question : "10% of &pound;" + i, answer: "&pound;" + (i / 10).toFixed(2)});
    }

    for (i = 1; i <= 100; i=i+Math.floor(Math.random() * 10)) {
        questions.push({type : 6, question : "1% of &pound;" + i, answer: "&pound;" + (i / 100).toFixed(2)});
    }

    for (i = 1; i <= 100; i=i+Math.floor(Math.random() * 10)) {
        questions.push({type : 7, question : "11% of &pound;" + i, answer: "&pound;" + (i * 0.11).toFixed(2)});
    }

    for (i = 10; i <= 40; i=i+10) {
        for (h = 1; h <= 3; h++) {
            for (m = 30; m <= 59; m=m+1) {
                var percentage = i;
                var total = (h * 60) + m;
                var answer = total * (i / 100);
                if (answer == Math.round(answer)) {
                    var answerHour = Math.floor(answer / 60);
                    var answerMinute = answer % 60;
                    questions.push({type : 8, question : percentage + "% of " + h + "h" + m + "m</BR><P class='printed-question-minor'>(give your answer in hours and minutes)</P>", answer: answerHour + "h" + answerMinute + "m"});
                }
            }
        }
    }

    for (i = 1; i <= 100; i++) {
        var answer = i;
        var questionPart = answer / 4;
        if (questionPart = Math.round(questionPart)) {
            questions.push({type : 9, question : "25% of ? = " + questionPart, answer: answer});
        }
    }

    for (i = 1; i <= 100; i=i+Math.floor(Math.random() * 10)) {
        for (p = 1; p <= 2; p++) {
            var questionPart = i / 10 * p
            var percentage = p * 10
            questions.push({type : 10, question : "What percentage of &pound;" + i + " is &pound;" + questionPart.toFixed(2), answer: percentage + "%"});
        }
    }

    return questions;

}