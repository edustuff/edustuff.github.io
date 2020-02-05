function getConversionQuestions() {

    var questions = [];

    var scales = [
        ["mm","cm","m","km"],
        ["g","kg"],
        ["ml","cl","l"],
        ["mm2","cm2","m2"],
        ["mm3","cm3","m3"]
    ]

    var possibleAnswers = [];

    var lowestPossibleAnswer1 = round(Math.random() * 10, 3);
    var lowestPossibleAnswer2 = round(Math.random() * 1, 3);
    var lowestPossibleAnswer3 = round(Math.random() * 0.1, 3);
//    var lowestPossibleAnswer4 = round(Math.random() * 10, 3);

    for (n = 0; n <= 5; n++) {
        possibleAnswers.push(round(lowestPossibleAnswer1 * Math.pow(10,n),3));
        possibleAnswers.push(round(lowestPossibleAnswer2 * Math.pow(10,n),3));
        possibleAnswers.push(round(lowestPossibleAnswer3 * Math.pow(10,n),3));
//        possibleAnswers.push(round(lowestPossibleAnswer4 * Math.pow(10,n),3));
    }

    for (n = 0; n < 10; n++) {
        for (i = 0; i < scales.length; i++) {
            for (j = 0; j < scales[i].length; j++) {
                for (k = 0; k < scales[i].length; k++) {
                    if (j != k) {
                        var unit1 = scales[i][j];
                        var unit2 = scales[i][k];

                        var answerFound = false;
                        var attempt = 0;

                        while (answerFound == false && attempt < 20) {

                            attempt = attempt + 1;

                            var value = possibleAnswers[Math.floor(Math.random() * possibleAnswers.length)];

                            //console.log(value);

                            var value1 = value + unit1;

                            var value1Unit = math.unit(value1);

                            var question = "Convert " + math.format(value1Unit.toNumber(unit1),thousandFormat) + " " + addIndicies(unit1) + " into " + addIndicies(unit2);

                            var answer = value1Unit.toNumber(unit2);

                            if (possibleAnswers.includes(answer)) {

                                answerFound = true;

                                //console.log(question + " = " + answer);

                                questions.push({type : i + 1, question : question, answer: math.format(answer,thousandFormat)});
                            }

                        }
                    }
                }
            }
        }
    }

    return questions;

}

function addIndicies(value) {

    var i = value.charAt(value.length-1);

    if (isFinite(i)) {
        return value.split(i).join("<sup>" + i + "</sup>")
    } else {
        return value;
    }

}

function round(num, dp) {
 return Math.round((num + Number.EPSILON) * Math.pow(10,dp)) / Math.pow(10,dp)
}

function thousandFormat(value) {
    return value.toLocaleString()
}