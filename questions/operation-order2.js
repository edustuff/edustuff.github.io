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
    "(X1 #1 X2 #2 X3) #3 X4",
    "X1 #1 (X2 #2 X3 #3 X4)"
    ];

    var symbols = ["+","-","&times;","&divide;"];

    var type = 0;

    var minNumber = 6;
    var maxNumber = 12;

    for (i = 0; i < patterns.length; i++) {

        type++;

        for (s1 = 0; s1 < symbols.length; s1++) {
            for (s2 = 0; s2 < symbols.length; s2++) {
                for (s3 = 0; s3 < symbols.length; s3++) {
                    for (n1 = minNumber; n1 < maxNumber; n1++) {
                        for (n2 = minNumber; n2 < maxNumber; n2++) {
                            for (n3 = minNumber; n3 < maxNumber; n3++) {
                                for (n4 = minNumber; n4 < maxNumber; n4++) {

                                    var mathPattern = patterns[i];

                                    mathPattern = mathPattern.replace("#1", symbols[s1]);
                                    mathPattern = mathPattern.replace("#2", symbols[s2]);
                                    mathPattern = mathPattern.replace("#3", symbols[s3]);

                                    var numberPattern = mathPattern;

                                    numberPattern = numberPattern.replace("X1", n1);
                                    numberPattern = numberPattern.replace("X2", n2);
                                    numberPattern = numberPattern.replace("X3", n3);
                                    numberPattern = numberPattern.replace("X4", n4);

                                    var answer = calculateAnswer(numberPattern);

                                    if (answer == Math.round(answer) && isFinite(answer) && answer != 0 && answer < 500 && answer > -500) {
                                        questions.push({type : type, question : numberPattern, answer: answer});
                                    }

                                }
                            }
                        }
                    }
                }
            }
        }
    }


    return questions;

}

function number() {

    var num = Math.floor(Math.random() * 20) + 2;

    if (Math.floor(Math.random() * 2) == 0 && num <= 3 && num > 0) {
        return num + "<sup>2</sup>";
    } else {
        return num;
    }

}

function hasExclusions(question) {

  var segment = question.match(/\(.+\)/g);

  if (!segment) return false;

  //console.log(segment);

  var segmentAnswer = math.evaluate(segment);

  //console.log(segmentAnswer);

  if (segmentAnswer <= 0) {return true;} else {return false;}

}

function hasExclusions2(question) {

  var segment = question.match(/\d+ \/ \d+/g);

  if (!segment) return false;

  //console.log(segment);

  var segmentAnswer = math.evaluate(segment);

  //console.log(segmentAnswer);

  if (Math.abs(segmentAnswer - Math.round(segmentAnswer)) < 0.0000001) {
    //console.log("t: " + segment + "=" + segmentAnswer);
    return true;
    }
    else
  {
    //console.log("t: " + segment + "=" + segmentAnswer);
    return false;
  }

}

function calculateAnswer(question) {

    var modifiedQuestion = question.split("&times;").join("*").split("&divide;").join("/").split("<sup>2</sup>").join("^2");

    //console.log(modifiedQuestion);

    var t = hasExclusions(modifiedQuestion);
    //console.log(t);
    if (t) return 999999;

    var t2 = hasExclusions2(modifiedQuestion);
    //console.log("t2: " + t2);
    if (t2) return 999999;

    var answer = math.evaluate(modifiedQuestion);

    return answer;

}