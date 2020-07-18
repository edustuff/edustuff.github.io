function getPrimeQuestions() {

    var questions = [];

    for (i = 1; i <= 9; i++) {



        questions.push({type : 1, question : i + " is a prime number?", answer: false, prompt: i + " can be divided by " + factors(i)});
    }

    return questions;

}

