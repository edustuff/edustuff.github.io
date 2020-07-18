function getChartQuestions() {

    var questions = [];

    var data = new google.visualization.DataTable();
    data.addColumn('number', 'X');
    data.addColumn('number', 'Dogs');

var data = google.visualization.arrayToDataTable([
          ['Day', 'Exchange Rate'],
          ['Monday',  randomIntFromInterval(122,134) / 100],
          ['Tuesday',  randomIntFromInterval(122,134) / 100],
          ['Wednesday',  randomIntFromInterval(122,134) / 100],
          ['Thursday',  randomIntFromInterval(122,134) / 100],
          ['Friday',  randomIntFromInterval(122,134) / 100],
          ['Saturday',  randomIntFromInterval(122,134) / 100],
          ['Sunday',  randomIntFromInterval(122,134) / 100],
        ]);

//    data.addRows([
//    [0, 0],   [1, 10],  [2, 23],  [3, 17],  [4, 18],  [5, 9],
//    [6, 11],  [7, 27],  [8, 33],  [9, 40],  [10, 32], [11, 35],
//    [12, 30], [13, 40], [14, 42], [15, 47], [16, 44], [17, 48],
//    [18, 52], [19, 54], [20, 42], [21, 55], [22, 56], [23, 57],
//    [24, 60], [25, 50], [26, 52], [27, 51], [28, 49], [29, 53],
//    [30, 55], [31, 60], [32, 61], [33, 59], [34, 62], [35, 65],
//    [36, 62], [37, 58], [38, 55], [39, 61], [40, 64], [41, 65],
//    [42, 63], [43, 66], [44, 67], [45, 69], [46, 69], [47, 70],
//    [48, 72], [49, 68], [50, 66], [51, 65], [52, 67], [53, 70],
//    [54, 71], [55, 72], [56, 73], [57, 75], [58, 70], [59, 68],
//    [60, 64], [61, 60], [62, 65], [63, 67], [64, 68], [65, 69],
//    [66, 70], [67, 72], [68, 75], [69, 80]
//    ]);

//    curveType: 'none', curveType: 'function'
//    ticks: [5,10,15,20]


    var options = {
    width: 900,
    height: 500,
    curveType: 'none',
    hAxis: {
    title: 'Time'
    },
    vAxis: {
        textStyle: {
            fontSize: 10
        },
        title: 'Popularity',
        gridlines: {
            count: 9
        },
        ticks: [{v:1.20, f:'1.20'},{v:1.22, f:'1.22'},{v:1.24, f:'1.24'},{v:1.26, f:'1.26'},{v:1.28, f:'1.28'},{v:1.30, f:'1.30'},{v:1.32, f:'1.32'},{v:1.34, f:'1.34'},{v:1.36, f:'1.36'}]
    }
    };


    var type = 0;

    var numberOfDigits = 2;

    type++;
    for (i=1; i < 100; i++) {
        var num1 = numberOfLength(numberOfDigits, false);
        var num2 = getAdditionThatForcesCarrying(num1, numberOfDigits-1);
        var question = num1 + " + " + num2;
        var answer = num1 + num2;
        questions.push({type : type, question : "What is the answer to " + question, answer: answer, data: data, options: options});
    }



//    for (i=1; i < 10; i++) {
//        questions.push({type : 1, question : "<div id='chart_div' data='" + i + "'></div>", answer: i, data: data, options: options});
//    }

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