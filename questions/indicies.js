function getIndiciesQuestions() {

    var questions = [];

    for (i = 1; i <= 14; i++) {
        questions.push({question : i + "<sup>2</sup>", answer: i * i});
        questions.push({question : i + " x " + i, answer: i * i});
    }

    for (i = 1; i <= 5; i++) {
        questions.push({question : i + "<sup>3</sup>", answer: i * i * i});
        questions.push({question : i + " x " + i + " x " + i, answer: i * i * i});
    }

    for (i = 1; i <= 3; i++) {
        questions.push({question : i + "<sup>4</sup>", answer: i * i * i * i});
        questions.push({question : i + " x " + i + " x " + i  + " x " + i, answer: i * i * i * i});
    }

    for (i = 1; i <= 3; i++) {
        questions.push({question : i + "<sup>5</sup>", answer: i * i * i * i * i});
        questions.push({question : i + " x " + i + " x " + i  + " x " + i  + " x " + i, answer: i * i * i * i * i});
    }

    return questions;

}