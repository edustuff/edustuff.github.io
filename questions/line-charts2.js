function getChartQuestions() {

    var questions = [];

    var type = 0;

    var numberOfDigits = 2;

    type++;
    for (i=1; i < 100; i++) {

        var func = function(element) {

        var dataPoints = [];

        var cats = [];

        var xAxisCats = randomIntFromInterval(1,2);

        if (xAxisCats == 1) {
            cats = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
        } else {
            cats = ['January', 'February', 'March', 'April', 'May'];
        }

        for (j=1; j<=5; j++) {
            var nextValue = 0;

            do {
                nextValue = randomIntFromInterval(121, 132)/100;
            } while (nextValue == dataPoints[j-1]);

            dataPoints.push(nextValue);
        }

        Highcharts.chart({
                   		chart: {
                   			renderTo: element,
                   			borderWidth: 2,
                       },

                       title:{
                             text: "Temperature"
                       },

                       plotOptions: {
                       		line: {
                           	marker: {
                             	enabled: false
                             }
                           },
                           series: {
                               label: {
                                   connectorAllowed: false
                               },
                               animation: false
                           }
                       },

                       credits: {
                           enabled: false
                       },

                       legend: {
                               enabled: false
                       },

                       yAxis: {
                       	tickAmount:10,
                         min: 1.20,
                         max: 1.36
                       },

                       xAxis: {
                           categories: cats,

                           tickColor: 'black',
                           tickWidth: 1,
                           tickmarkPlacement: 'on'
                       },


                       series: [{
                           data: dataPoints
                       }]
                   });
               };

        var num1 = numberOfLength(numberOfDigits, false);
        var num2 = getAdditionThatForcesCarrying(num1, numberOfDigits-1);
        var question = num1 + " + " + num2;
        var answer = num1 + num2;
        questions.push({type : type, question : "What is the answer to " + question, answer: answer, data: func});
    }

    return questions;

}

function randomIntFromInterval(min, max) { // min and max included
  min = math.min(min,max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function round(num, dp) {
 return Math.round((num + Number.EPSILON) * Math.pow(10,dp)) / Math.pow(10,dp)
}

//https://developers.google.com/chart/interactive/docs/gallery/linechart

//<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
//<div id="chart_div"></div>

//google.charts.load('current', {packages: ['corechart', 'line']});
//google.charts.setOnLoadCallback(drawBasic);

//function drawBasic() {



//}