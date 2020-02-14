var questionType = 0;

function getFractionSimplifications() {

    var questions = [];

    for (denominator = 1; denominator <= 144; denominator++) {
        for (numerator = 1; numerator < denominator; numerator++) {

            var fraction = "\\({" + numerator + " \\over " + denominator + "}\\)";

            var simplifiedFraction = reduce(numerator, denominator);

            if (fraction != simplifiedFraction) {

                var question = "Simplify " + fraction;

//                console.log(question);
                questions.push({type : 1, question : question, answer: simplifiedFraction});

            }

        }

    }



    return questions;

}

function reduce(numerator,denominator){
  var gcd = function gcd(a,b){
    return b ? gcd(b, a%b) : a;
  };
  gcd = gcd(numerator,denominator);
//  console.log(numerator,denominator, (numerator/gcd), (denominator/gcd))
  if (gcd <= 12 && (denominator/gcd) <= 5) {
    questionType = (denominator/gcd) - 1;
    return "\\({" + (numerator/gcd) + " \\over " + (denominator/gcd) + "}\\)";
    } else {
        return "\\({" + (numerator) + " \\over " + (denominator) + "}\\)";
    }
}