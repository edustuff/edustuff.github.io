function getNumberMachines() {

    var questions = [];



    for (i = 1; i<50; i++) {

//      padding-top:3vh;
//      padding-bottom:3vh;
//      border-radius: 3vw;
//      background: rgb(240, 139, 37, 1);
//      background: linear-gradient(45deg, rgba(240, 139, 37, 1) 0%, rgba(229, 63, 50, 1) 100%);
//      border: 1vw solid rgba(24, 153, 218, 1);
//      font-size: 5vw;
//      text-align: center;

        var question = "graph LR;A[Client] --> B[Load Balancer " + i + "];classDef edgePath stroke:#1899DA,stroke-width:4px;classDef node stroke-width:4px,fill:#F08B25,stroke:#1899DA;";

        questions.push({type : 1, question : question, answer: i});

    }

    return questions;

}

function round(num, dp) {
 return Math.round((num + Number.EPSILON) * Math.pow(10,dp)) / Math.pow(10,dp)
}