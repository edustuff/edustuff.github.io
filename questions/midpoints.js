function getMidpoints() {

    var cnt = 0;

    var questions = [];

    var type = 0;

    for (dp = 0; dp<3; dp++) {

        for (e =0; e<=1; e++) {

            type = type + 1;

            for (i = 1; i<50; i++) {

                var num1 = round(Math.random() * 50, dp);
                var num2 = round((Math.random() * 50) + num1, dp);

                var midpoint = num1 + ((num2 - num1) / 2);

                if (midpoint == round(midpoint, dp + e) && num1 != num2) {

                    var midPointStr = midpoint + "";
                    if (dp + e == 0 || midPointStr.charAt(midPointStr.length - 1) == '5') {

                        var question = "Which number is halfway between " + num1 + " and " + num2 + "?";

                        questions.push({type : type, question : question, answer: midpoint});

                    }


                }

            }

        }
    }

    return questions;

}

function round(num, dp) {
 return Math.round((num + Number.EPSILON) * Math.pow(10,dp)) / Math.pow(10,dp)
}