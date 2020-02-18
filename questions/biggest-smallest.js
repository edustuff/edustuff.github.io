var questionType = 0;

function getBiggestSmallest() {

    var questions = [];

    // all decimals (mixed 1,2,3 decimal places)
    // all proper fractions (common divisor)
    // all improper fractions (?)
    // all 1/? (where ? is varied)
    // all ?-1/? (where ? is varied)
    // all n/? (where n is constant and ? is varied)
    // all x/y of n (where x/y is a proper fraction) and n is a multiple of x/y greater than 1
    // mixed numbers (?)
    // combination of the above

    var questionType = "smallest";
    var questionTypeId = 1;
    var answer = 1000000;

    for (var n=0; n<50; n++) {

        if (questionType == "smallest") {
            questionType = "biggest";
            questionTypeId = 1;
            answer = 0;
        } else {
            questionType = "smallest";
            questionTypeId = 2;
            answer = 1000000;
        }

        var digits = [];
        var numbers = [];

        digits.push(Math.round(Math.random() * 10));
        digits.push(Math.round(Math.random() * 10));
        digits.push(Math.round(Math.random() * 10));
        digits.push(Math.round(Math.random() * 10));
        digits.push(".");

        shuffleDigits(digits);

        console.log(digits);

        for (var i=0; i<5; i++) {

            do {

                var number = "";
                swap(digits);

                for (var j=0; j<digits.length; j++)
                {
                    number = number + ("" + digits[j]);
                }

                number = number * 1;

            } while (numbers.includes(number));

            numbers.push(number);

            if (questionType == "biggest" && number > answer) {
                answer = number;
            }

            if (questionType == "smallest" && number < answer) {
                answer = number;
            }

        }

        questions.push({type : questionTypeId, question : "What is the <B>" + questionType + "</B> number?<p class='questionMinor'>" + (numbers + "").split(",").join(" , ") + "</p>", answer: answer, answers: numbers});
    }

    return questions;

}

function shuffleDigits(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function swap(array) {
    do {
    var i = Math.floor(Math.random() * array.length);
    var j = Math.max(0, i - 1);
    } while (j == i);

    [array[i], array[j]] = [array[j], array[i]];
}