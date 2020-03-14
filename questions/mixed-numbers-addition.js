function getMixedNumberAdditions() {

    var questions = [];

    var denominators = [];

    var type = 0;

    for (i1 = 2; i1 <=12; i1++) {
        for (i2 = 2; i2 <=12; i2++) {
            for (i3 = 1; i3<=3; i3++) {
                for (i4 = 1; i4<=i3; i4++) {

                    var lcm = lcm_two_numbers(i1, i2);

                    if ((lcm / i1 < 6 && lcm / i2 < 6)) {

                        var denominator1 = i1;
                        var denominator2 = i2;

                        var numerator1 = Math.floor(Math.random() * (denominator1 - 1)) + 1;
                        var numerator2 = Math.floor(Math.random() * (denominator2 - 1)) + 1;

                        var questionAdd = i3 + "\\({" + numerator1 + " \\over " + denominator1 + "}\\) + " + i4 + "\\({" + numerator2 + " \\over " + denominator2 + "}\\)";
                        var questionSub = i3 + "\\({" + numerator1 + " \\over " + denominator1 + "}\\) - " + i4 + "\\({" + numerator2 + " \\over " + denominator2 + "}\\)";
                        var questionMult = i3 + "\\({" + numerator1 + " \\over " + denominator1 + "}\\) &times; " + i4 + "\\({" + numerator2 + " \\over " + denominator2 + "}\\)";
                        var questionDiv = i3 + "\\({" + numerator1 + " \\over " + denominator1 + "}\\) &divide; " + i4 + "\\({" + numerator2 + " \\over " + denominator2 + "}\\)";

                        numerator1 = numerator1 + (i3 * denominator1);
                        numerator2 = numerator2 + (i4 * denominator2);

                        var answerDenominator = lcm;

                        var answerNumeratorAdd = answerNumerator = ((lcm / denominator1) * numerator1) + ((lcm / denominator2) * numerator2);
                        var answerNumeratorSub = answerNumerator = ((lcm / denominator1) * numerator1) - ((lcm / denominator2) * numerator2);
                        var answerNumeratorMult = answerNumerator = numerator1 * numerator2;
                        var answerNumeratorDiv = answerNumerator = numerator1 * denominator2;

                        var answerDenominatorMult = denominator1 * denominator2;
                        var answerDenominatorDiv = numerator2 * denominator1;

                        var answerAdd = "\\({" + answerNumeratorAdd + " \\over " + answerDenominator + "}\\)";
                        var answerSub = "\\({" + answerNumeratorSub + " \\over " + answerDenominator + "}\\)";
                        var answerMult = "\\({" + answerNumeratorMult + " \\over " + answerDenominatorMult + "}\\)";
                        var answerDiv = "\\({" + answerNumeratorDiv + " \\over " + answerDenominatorDiv + "}\\)";

        //                var simplifiedAnswerAdd = reduce(answerNumeratorAdd, answerDenominator);
        //                var simplifiedAnswerSub = reduce(answerNumeratorSub, answerDenominator);
        //
        //                if (simplifiedAnswerAdd != answerAdd) {
        //                    questionAddSimplified = questionAdd + " (simplified)";
        //                    questions.push({type : 3, question : questionAddSimplified, answer: simplifiedAnswerAdd});
        //                }

        //                if (simplifiedAnswerSub != answerSub) {
        //                    questionSubSimplified = questionSub + " (simplified)";
        //                }

                        if (answerNumeratorAdd == answerDenominator) {
                            answerAdd = 1;
                        }

                        if (answerNumeratorSub == answerDenominator) {
                            answerSub = 1;
                        }

                        if (answerNumeratorMult == answerDenominatorMult) {
                            answerMult = 1;
                        }

                        if (answerNumeratorDiv == answerDenominatorDiv) {
                            answerDiv = 1;
                        }

                        if (answerNumeratorSub == 0) {
                            answerSub = 0;
                        }

                        if (answerNumeratorAdd <= 144 && answerDenominator <=144) {
                            questions.push({type : 1, question : questionAdd, answer: answerAdd});
                        }

                        if (answerNumeratorSub <= 144 && answerDenominator <=144) {
                            if (answerNumeratorSub >= 0) {
                                questions.push({type : 2, question : questionSub, answer: answerSub});
                            }
                        }

                        if (answerNumeratorMult <= 144 && answerDenominatorMult <= 144) {
                            questions.push({type : 3, question : questionMult, answer: answerMult});
                        }

                        if (answerNumeratorDiv <= 144 && answerDenominatorDiv <= 144) {
                            questions.push({type : 4, question : questionDiv, answer: answerDiv});
                        }
                    }
                }

            }
        }
    }


    return questions;

}

function lcm_two_numbers(x, y) {
   if ((typeof x !== 'number') || (typeof y !== 'number'))
    return false;
  return (!x || !y) ? 0 : Math.abs((x * y) / gcd_two_numbers(x, y));
}

function gcd_two_numbers(x, y) {
  x = Math.abs(x);
  y = Math.abs(y);
  while(y) {
    var t = y;
    y = x % y;
    x = t;
  }
  return x;
}

function reduce(numerator,denominator){
  var gcd = function gcd(a,b){
    return b ? gcd(b, a%b) : a;
  };
  gcd = gcd(numerator,denominator);
//  console.log(numerator,denominator, (numerator/gcd), (denominator/gcd))
  return "\\({" + (numerator/gcd) + " \\over " + (denominator/gcd) + "}\\)";
}