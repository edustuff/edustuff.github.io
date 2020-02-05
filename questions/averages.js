function getMeanAverageQuestions() {

    var questions = [];

    for (n = 0; n < 100; n=n+1) {

        var typeId = 0;

        for (i = 3; i <= 5; i=i+1) {

            typeId = typeId + 1;

            var questionAccepted = false;

            while (questionAccepted == false) {

                var numberString = "";
                var numberTotal = 0;

                for (p = 0; p < i; p=p+1) {

                    var number = Math.floor(Math.random() * 14);

                    numberTotal = numberTotal + number;

                    numberString = numberString + number;

                    if (p < i-2) {
                        numberString = numberString + ", ";
                    }

                    if (p == i-2) {
                        numberString = numberString + " and ";
                    }

                }

                var average = numberTotal / i;

                if (Math.round(average) == average && average < 12) {
                    questionAccepted = true;
                }

                if (questionAccepted) {

                    console.log(numberString, average, questionAccepted);

                    var question = "What is the average (mean) of </BR>" + numberString + "?";

                    questions.push({type : typeId, question : question, answer: average});

                }

            }
        }

    }

    return questions;

}