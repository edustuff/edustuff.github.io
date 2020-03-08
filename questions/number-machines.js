var id = 0;

function getNumberMachines() {

    var questions = [];

    var graphType = "graph LR;";

    var graphFormatting = "classDef edgePath stroke:#1899DA,stroke-width:4px;classDef node stroke-width:4px,fill:#F08B25,stroke:#1899DA;";

    for (i = 1; i<1000; i++) {

        for (x = 0; x <2; x++) {

            id=0;

            var startingNumber = round(Math.random() * 144, 0);

            var question = graphType;

            if (x == 0) {
                question = question + step(startingNumber);
            } else {
                question = question + step("?");
            }

            var nextStepNumber = startingNumber;

            var transitionOk = true;

            var types = [];
            var stepResults = [];

            for (n = 1; n <=3; n++) {

                stepResults.push(nextStepNumber);

                var nextStep1 = nextStep(startingNumber, nextStepNumber);

                nextStepText = nextStep1.text;

                types.push(nextStep1.option);

                question = question + " --> " + nextStepText;

                var nextNumberStr  = round(nextStep1.number,1) + "";

                if (nextStepNumber == 0 || nextStepNumber == 1 ||   stepResults.includes(nextStep1.number) || nextStep1.number > 144 || round(nextStep1.number,1) != nextStep1.number || (round(nextStep1.number,0) != nextStep1.number && nextNumberStr[nextNumberStr.length-1] != "5")) {
                    transitionOk = false;
                }

                nextStepNumber = nextStep1.number;
            }

            if (x == 0) {
                question = question + " --> " + step("?");
                answer = nextStepNumber;
            } else {
                question = question + " --> " + step(nextStepNumber);
                answer = startingNumber;
            }

            question = question + ";";

            question = question + graphFormatting;

            if (transitionOk) {
                for (t=0; t<types.length; t++) {
                    questions.push({type : types[t], question : question, answer: answer, prompt: "Answer = " + answer});
                }
            }

        }

    }

    return questions;

}

function step(text) {
    return nextId() + "[" + text + "]";
}

function nextId() {
    id=id+1;
    return "A" + id;
}

function nextStep(originalNumber, number) {

    var adjustment = round(Math.random() * 12, 0) + 1;

    var option = round(Math.random() * 8, 0) + 1;

    switch(option) {
        case 1:
            return {option: option, number: number + adjustment, text: step("add " + adjustment)};
            break;
        case 2:
            return {option: option, number: number - adjustment, text: step("subtract " + adjustment)};
            break;
        case 3:
            return {option: option, number: number * adjustment, text: step("multiply by " + adjustment)};
            break;
        case 4:
            return {option: option, number: number / adjustment, text: step("divide by " + adjustment)};
            break;
        case 5:
            return {option: option, number: number / 2, text: step("halve it")};
            break;
        case 6:
            return {option: option, number: number * 2, text: step("double it")};
            break;
        case 7:
            return {option: option, number: number * number, text: step("square it")};
            break;
        case 8:
            return {option: option, number: number / originalNumber, text: step("divide by original number")};
            break;
        case 9:
            return {option: option, number: number + (adjustment * originalNumber), text: step("add " + adjustment + " times original number")};
            break;
    }

    throw("Unexpected State Exception");

}

function round(num, dp) {
 return Math.round((num + Number.EPSILON) * Math.pow(10,dp)) / Math.pow(10,dp)
}