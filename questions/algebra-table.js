function getAlgebraTableQuestions() {

    var questions = [];

    var factors = [0.5,1,2,3,4,5,6,7,8,9,10,11,12];

    for (a = 0; a < factors.length; a++) {

        i = factors[a];

        for (j = -12; j <= 12; j++) {

            var squared = randomIntFromInterval(1,2);

            var squaredTxt = "";

            if (squared == 2) {
                squaredTxt = "<sup>2</sup>";
            }

            var formula = i + "n" + squaredTxt + " + " + j;

            if (j < 0) {
                formula = i + "n" + squaredTxt + " - " + Math.abs(j);
            }

            if (i == 1) {
                formula = formula.replace("1n", "n");
            }

            var example_n = randomIntFromInterval(2, 5);
            var example_a = (i * Math.pow(example_n,squared)) + j;

            var n1 = randomIntFromInterval(6, 19);
            if (squared == 2) {
                n1 = randomIntFromInterval(2, 6);
            }
            var a1 = (i * Math.pow(n1,squared)) + j;

            var n2 = randomIntFromInterval(20, 30);
            if (squared == 2) {
                n2 = randomIntFromInterval(7, 12);
            }
            var a2 = (i * Math.pow(n2,squared)) + j;

            var table = "<TABLE class='printed-question-minor' border='1' style='border: 0px solid black; border-spacing: 0px'>";

            table = table + "<TR height='40cm' bgcolor='#D5DBDB'>";
            table = table + "<TH width='100cm'>n</TH>";
            table = table + "<TH width='100cm'>" + formula + "</TH>";

            table = table + "<TR height='40cm'>";
            table = table + "<TD style='text-align:center'>" + example_n + "</TD>";
            table = table + "<TD style='text-align:center'>" + example_a + "</TD>";
            table = table + "</TR>";

            table = table + "<TR height='40cm'>";
            table = table + "<TD style='text-align:center'>" + n1 + "</TD>";
            table = table + "<TD></TD>";
            table = table + "</TR>";

            table = table + "<TR height='40cm'>";
            table = table + "<TD></TD>";
            table = table + "<TD style='text-align:center'>" + a2 + "</TD>";
            table = table + "</TR>";

            table = table + "</TR>";
            table = table + "</TABLE>";

            var text = "Complete the table with the two missing values.</BR></BR>";

            var type = 1;

            if (j<0) {
                type = 2;
            }

            if (i == 1) {
                type = 3;
            }

            if (i == 0.5) {
                type = 4;
            }

            if (squared == 2) {
                type = 5;
            }

            if (j != 0) {
                questions.push({type : type, question : text + table, answer: "(" + a1 + "; " + n2 +    ")"});
            }
        }
    }

    // 0.5n
    // n squared

    return questions;

}

function randomIntFromInterval(min, max) {
  min = math.min(min,max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}