function getIndiciesQuestions() {

    var type = 0;

    var maxQuestionType = 16;

    type = getRandomTypeId(maxQuestionType);
    for (i = 1; i <= 14; i++) {
        questions.push({type : type, question : i + " x " + i, answer: i * i});
    }

    type = getRandomTypeId(maxQuestionType);
    for (i = 1; i <= 14; i++) {
        questions.push({type : type, question : i + "<sup>2</sup>", answer: i * i});
    }

    type = getRandomTypeId(maxQuestionType);
    for (i = 2; i <= 14; i++) {
        var result = i * i;
        questions.push({type : type, question : "What is the value of ?</BR>?<sup>2</sup> = " + result , answer : i});
    }

    type = getRandomTypeId(maxQuestionType);
    for (i = 2; i <= 14; i++) {
        var result = i * i;
        questions.push({type : type, question : "What is the value of ?</BR>" + i + "<sup>?</sup> = " + result , answer : 2});
    }

    type = getRandomTypeId(maxQuestionType);
    for (i = 1; i <= 5; i++) {
        questions.push({type : type, question : i + " x " + i + " x " + i, answer: i * i * i});
    }

    type = getRandomTypeId(maxQuestionType);
    for (i = 1; i <= 5; i++) {
        questions.push({type : type, question : i + " x " + i + " x " + i, answer: i * i * i});
    }

    type = getRandomTypeId(maxQuestionType);
    for (i = 2; i <= 5; i++) {
        var result = i * i * i;
        questions.push({type : type, question : "What is the value of ?</BR>?<sup>3</sup> = " + result, answer : i});
    }

    type = getRandomTypeId(maxQuestionType);
    for (i = 2; i <= 5; i++) {
        var result = i * i * i;
        questions.push({type : type, question : "What is the value of ?</BR>" + i +"<sup>?</sup> = " + result, answer : 3});
    }

    type = getRandomTypeId(maxQuestionType);
    for (i = 1; i <= 3; i++) {
        questions.push({type : type, question : i + " x " + i + " x " + i  + " x " + i, answer: i * i * i * i});
    }

    type = getRandomTypeId(maxQuestionType);
    for (i = 1; i <= 3; i++) {
        questions.push({type : type, question : i + "<sup>4</sup>", answer: i * i * i * i});
    }

    type = getRandomTypeId(maxQuestionType);
    for (i = 2; i <= 3; i++) {
        var result = i * i * i * i;
        questions.push({type : type, question : "What is the value of ?</BR>?<sup>4</sup> = " + result, answer : i});
    }

    type = getRandomTypeId(maxQuestionType);
    for (i = 2; i <= 3; i++) {
        var result = i * i * i * i;
        questions.push({type : type, question : "What is the value of ?</BR>" + i + "<sup>?</sup> = " + result, answer : 4});
    }

    type = getRandomTypeId(maxQuestionType);
    for (i = 1; i <= 3; i++) {
        questions.push({type : type, question : i + "<sup>5</sup>", answer: i * i * i * i * i});
    }

    type = getRandomTypeId(maxQuestionType);
    for (i = 1; i <= 3; i++) {
        questions.push({type : type, question : i + " x " + i + " x " + i  + " x " + i  + " x " + i, answer: i * i * i * i * i});
    }

    type = getRandomTypeId(maxQuestionType);
    for (i = 2; i <= 3; i++) {
        var result = i * i * i * i * i;
        questions.push({type : type, question : "What is the value of ?</BR>?<sup>5</sup> = " + result, answer : i});
    }

    type = getRandomTypeId(maxQuestionType);
    for (i = 2; i <= 3; i++) {
        var result = i * i * i * i * i;
        questions.push({type : type, question : "What is the value of ?</BR>" + i + "<sup>?</sup> = " + result, answer : 5});
    }

    return questions;

}


existingTypeIds = [];
function getRandomTypeId(max) {

    var newId = -1;

    do {
        newId = Math.floor(Math.random() * max) + 1;
    } while (existingTypeIds.includes(newId));

    existingTypeIds.push(newId);

    return newId;

}