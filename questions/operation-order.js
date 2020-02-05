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

    for (j = 0; j < 3; j++) {
        for (i = 0; i < patterns.length; i++) {

            var mathPattern = patterns[i];

            mathPattern = mathPattern.replace("#1", symbols[Math.floor(Math.random() * 4)]);
            mathPattern = mathPattern.replace("#2", symbols[Math.floor(Math.random() * 4)]);
            mathPattern = mathPattern.replace("#3", symbols[Math.floor(Math.random() * 4)]);
            mathPattern = mathPattern.replace("#4", symbols[Math.floor(Math.random() * 4)]);

            var answer = 0.1;

            var numberPattern = mathPattern;

            var numberOrder = false;

            while (!numberOrder || answer != Math.round(answer) || !isFinite(answer) || answer == 0 || answer > 144 || answer < -144) {

                numberPattern = mathPattern;

                num1 = number();
                num2 = number();
                num3 = number();
                num4 = number();

                //console.log(num1, num2, num3, num4);
                //console.log(num1 > num2 , num2 > num3 , num3 > num4);
//                numberOrder = (num1 > num2 && num2 > num3 && num3 > num4);
                numberOrder = true;

                if (numberOrder) {
                    numberPattern = numberPattern.replace("X1", num1);
                    numberPattern = numberPattern.replace("X2", num2);
                    numberPattern = numberPattern.replace("X3", num3);
                    numberPattern = numberPattern.replace("X4", num4);

                    answer = calculateAnswer(numberPattern);
                }

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

function hasExclusions(question) {

  var segment = question.match(/\(.+\)/g);

  if (!segment) return false;

  //console.log(segment);

  var segmentAnswer = math.evaluate(segment);

  //console.log(segmentAnswer);

  if (segmentAnswer <= 0) {return true;} else {return false;}

}

function calculateAnswer(question) {

    var modifiedQuestion = question.split("&times;").join("*").split("&divide;").join("/").split("<sup>2</sup>").join("^2");

    //console.log(modifiedQuestion);

    var t = hasExclusions(modifiedQuestion);

    console.log(t);

    if (t) return 999;

    var answer = math.evaluate(modifiedQuestion);

    return answer;

}