function getMeanAverageQuestions2() {

    var questions = [];

    for (n = 0; n < 100; n=n+1) {

        var typeId = 0;

        for (i = 5; i <= 10; i=i+1) {

            typeId = typeId + 1;

            var questionAccepted1 = false;
            var questionAccepted2 = false;

            while (questionAccepted1 == false && questionAccepted2 == false) {

                var numberString = "";
                var numberTotal = 0;

                var numbers = [];

                for (p = 0; p < i; p=p+1) {

                    var number = Math.floor(Math.random() * 50) + 1;

                    numbers.push(number);

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

                if (round(average,1) == average && average < 40) {
                    questionAccepted1 = true;
                }

                if (round(average,0) == average && average < 40) {
                    questionAccepted2 = true;
                }

                if (questionAccepted1) {

//                    console.log(numberString, average, questionAccepted1);

                    var question = "What is the average (mean) of </BR>" + numberString + "?";
                    questions.push({type : 1, question : question, answer: average});

                    var question2 = "Calculate the average of</BR>" + numberString + ".</BR>How many number are above the average?";

                    var question3 = "Calculate the average of</BR>" + numberString + ".</BR>How many number are below the average?";

                    var aboveCnt = 0;
                    var belowCnt = 0;
                    for (a=0; a<numbers.length; a++) {
                        if (numbers[a] > average) {
                            aboveCnt++;
                        }
                        if (numbers[a] < average) {
                            belowCnt++;
                        }
                    }

                    questions.push({type : 2, question : question2, answer: average + " (" + aboveCnt + " above)"});
                    questions.push({type : 2, question : question3, answer: average + " (" + belowCnt + " below)"});

                }

                if (questionAccepted2) {

                    for (extraScore1 = 10; extraScore1<50; extraScore1++) {
                        for (extraScore2 = 10; extraScore2<50; extraScore2++) {

                            var newAverage1 = ((average * numbers.length) + extraScore1) / (numbers.length + 1);
                            var newAverage2 = ((average * numbers.length) + extraScore1 + extraScore2) / (numbers.length + 2);

                            if (round(newAverage1,1) == newAverage1) {

                                var question4 = numbers.length + " pupils take a test.</BR>The average score is " + average + ".</BR>Later an extra pupil takes the test and scores " + extraScore1 + ".</BR>What is the average score now?"

                                questions.push({type : 3, question : question4, answer: newAverage1});

                            }


                            if (round(newAverage1,0) == newAverage1) {

                                var question6 = numbers.length + " pupils take a test.</BR>The average score is " + average + ".</BR>Later an extra pupil takes the test and the average score is now " + newAverage1 + ".</BR>What did the extra pupil get as a score?"

                                questions.push({type : 5, question : question6, answer: extraScore1});

                            }


                            if (round(newAverage2,1) == newAverage2) {

                                var question5 = numbers.length + " pupils take a test.</BR>The average score is " + average + ".</BR>Later two extra pupils takes the test and scores " + extraScore1 + " and " + extraScore2 + ".</BR>What is the average score now?"

                                questions.push({type : 4, question : question5, answer: newAverage2});

                            }

                        }

                    }


                }


                // TODO

                if (questionAccepted2 && numbers.length >= 6) {

                    var total1 = 0;
                    var cnt1 = 0;

                    var total2 = 0;
                    var cnt2 = 0;

                    for (b = 0; b < numbers.length; b++) {
                        if (b < 4) {
                            total1 = total1 + numbers[b];
                            cnt1++;
                        } else {
                            total2 = total2 + numbers[b];
                            cnt2++;
                        }
                    }

                    var avg1 = total1 / cnt1;
                    var avg2 = total2 / cnt2;

                    var combinedAvg = (total1 + total2) / (cnt1 + cnt2);

                    if (avg1 != avg2 && round(avg1,0) == avg1 && round(avg2,0) == avg2 && round(combinedAvg,0) == combinedAvg) {

                        var question7 = "There are " + numbers.length + " pupils in a class.</BR>On Monday " + cnt1 + " pupils take a test and score on average " + avg1 + ".</BR>On Tuesday the remaining " + cnt2 + " pupils take the same test and score on average " + avg2 + ".</BR>What is the average score for the whole class?"

                        questions.push({type : 6, question : question7, answer: combinedAvg});

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