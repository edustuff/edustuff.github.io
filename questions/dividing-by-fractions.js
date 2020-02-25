function dividingByFractions() {

    var cnt = 0;

    var questions = [];

    var fractions = [];
    fractions.push({numerator: 1, denominator: 2});
    fractions.push({numerator: 1, denominator: 3});
    fractions.push({numerator: 1, denominator: 4});

    for (i = 1; i<20; i++) {

        for (f = 0; f<fractions.length; f++) {

            var multiplier = i;

            var fractionStr = "\\({" + fractions[f].numerator + " \\over " + fractions[f].denominator + "}\\)";

            var fractionValue = fractions[f].numerator / fractions[f].denominator;

            var possibleAnswer = fractionValue * multiplier;

            if (possibleAnswer == round(possibleAnswer, 2)) {

                var question = possibleAnswer + " &divide; " + fractionStr;

                questions.push({type : f+1, question : question, answer: multiplier});
            }

            var possibleAnswerAsFraction = math.multiply(multiplier, math.fraction(fractions[f].numerator + "/" + fractions[f].denominator));

            if (possibleAnswerAsFraction.n != possibleAnswerAsFraction.d) {

                var questionWithFraction = "\\({" + possibleAnswerAsFraction.n + " \\over " + possibleAnswerAsFraction.d + "}\\)" + " &divide; " + fractionStr;
                questions.push({type : fractions.length + f + 1, question : questionWithFraction, answer: multiplier});

            }

            if (possibleAnswerAsFraction.n > possibleAnswerAsFraction.d) {

                var mixedNumber = improperFractionToMixedNumber(possibleAnswerAsFraction.n, possibleAnswerAsFraction.d);

                if (mixedNumber.n > 0) {
                    var questionWithMixedNumbers = mixedNumber.i + "\\({" + mixedNumber.n + " \\over " + mixedNumber.d + "}\\)" + " &divide; " + fractionStr;
                    questions.push({type : (fractions.length * 2) + f + 1, question : questionWithMixedNumbers, answer: multiplier});
                }

            }

        }
    }

    return questions;

}

function round(num, dp) {
 return Math.round((num + Number.EPSILON) * Math.pow(10,dp)) / Math.pow(10,dp)
}

function improperFractionToMixedNumber(n, d) {
    var i2 = parseInt(n / d);
    var n2 = n;
    n2 -= i2 * d;
    var d2 = d;
    return {i:i2, n:n2, d:d2};
}