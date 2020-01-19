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

    return questions;

}