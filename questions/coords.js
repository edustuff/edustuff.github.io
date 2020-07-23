function getCoordQuestions() {

    var questions = [];

    var points = ["A","B","C"];

    for (i=0; i<100; i++) {

        var rnd1;
        var rnd2;
        var rnd3;
        var rnd4;

        do {
            rnd1 = randomIntFromInterval(0,8);
            rnd2 = randomIntFromInterval(0,8);
            rnd3 = randomIntFromInterval(0,8);
            rnd4 = randomIntFromInterval(0,8);
        } while (rnd1 == rnd2 || rnd1 == rnd3 || rnd1 == rnd4 || rnd2 == rnd3 || rnd2 == rnd4 || rnd3 == rnd4);

        console.log(rnd1,rnd2,rnd3,rnd4);

        var S0 = randomIntFromInterval(0,3);

        transform = noOp;

        if (S0 == 1) {
            transform = reflectX;
        }

        if (S0 == 2) {
            transform = reflectY;
        }

        if (S0 == 3) {
            transform = rotate180;
        }

        var coords = [
            transform([rnd1,rnd2]),
            transform([rnd3,rnd2]),
            transform([rnd3,rnd4])
            ];

        var picture = "<script type='text/tikz'>" +
        " \\begin{tikzpicture}[thick, scale=0.4, every node/.style={scale=0.8}]" +
                " \\filldraw[gray] " + print(coords[0]) + " node[blue]{$A$}" +
                " -- " + print(coords[1]) + " node[blue]{$B$}" +
                " -- " + print(coords[2]) + " node[blue]{$C$};" +
        " \\draw[thick,-] (-8,0) -- (8,0) node[anchor=north west] {};" +
        " \\draw[thick,-] (0,-8) -- (0,8) node[anchor=south east] {};" +
                " \\foreach \\x in {0}" +
                " \\draw [shift={(\\x,0)}] (0pt,5pt) -- (0pt,-5pt) node[] {\\x};" +
        " \\foreach \\x in {-8,-6,-4,-2,2,4,6,8}" +
        " \\draw [shift={(\\x,0)}] (0pt,5pt) -- (0pt,-5pt) node[below] {\\x};" +
                " \\foreach \\x in {-7,-5,-3,-1,1,3,5,7}" +
                " \\draw [shift={(\\x,0)}] (0pt,5pt) -- (0pt,-5pt) node[below] {};" +
        " \\foreach \\y in {-8,-6,-4,-2,2,4,6,8}" +
        " \\draw [shift={(0,\\y)}] (5pt,0pt) -- (-5pt,0pt) node[left] {\\y};" +
                " \\foreach \\y in {-7,-5,-3,-1,1,3,5,7}" +
                " \\draw [shift={(0,\\y)}] (5pt,0pt) -- (-5pt,0pt) node[left] {};" +
        " \\end" +
        "{tikzpicture}" +
        "</script>";

        var Q1R = randomIntFromInterval(0,2);
        var Q2R = randomIntFromInterval(0,2);
        var Q3R = randomIntFromInterval(0,2);

        var Q1 = "What are the co-ordinates of point " + points[Q1R] + "?";
        var A1 = print(coords[Q1R]);

        var S1 = randomIntFromInterval(0,1);

        var Q2 = "If the shape is reflected in the x-axis, what will be the new co-ordinates of point " + points[Q2R] + "?";
        var A2 = print(reflectX(coords[Q2R]));

        if (S1 == 1) {
            Q2 = "If the shape is reflected in the y-axis, what will be the new co-ordinates of point " + points[Q2R] + "?";
            A2 = print(reflectY(coords[Q2R]));
        }

        var S2 = randomIntFromInterval(0,2);

        var Q3 = "If the shape is rotated 180 degrees around point (0,0) what will be the new co-ordinates of point " + points[Q3R] + "?";
        var A3 = print(reflectX(reflectY(coords[Q3R])));

        if (S2 == 1) {
            Q3 = "If the shape is rotated 90 degrees clockwise around point (0,0) what will be the new co-ordinates of point " + points[Q3R] + "?";
            A3 = print(rotate90clockwise(coords[Q3R]));
        }

        if (S2 == 2) {
            Q3 = "If the shape is rotated 90 degrees anti-clockwise around point (0,0) what will be the new co-ordinates of point " + points[Q3R] + "?";
            A3 = print(rotate90antiClockwise(coords[Q3R]));
        }

        var table = "</BR><TABLE border='1' style = 'text-align: center''>" +
        "<TR><TD height='70mm' width='380mm'>" + Q1 + "</TD><TD width='100mm'>..........</TD></TR>" +
        "<TR><TD height='70mm' width='380mm'>" + Q2 + "</TD><TD width='100mm'>..........</TD></TR>" +
        "<TR><TD height='70mm' width='380mm'>" + Q3 + "</TD><TD width='100mm'>..........</TD></TR>" +
        "</TABLE>";

        questions.push({type : 1, question : picture + table, answer: A1 + " ; " + A2 + " ; " + A3});
    }

    return questions;

}

function print(coord) {
    return "(" + coord[0] + "," + coord[1] + ")";
}

function noOp(coord) {
    return coord;
}

function reflectY(coord) {
    return [-1 * coord[0],coord[1]];
}

function reflectX(coord) {
    return [coord[0],-1 * coord[1]];
}

function rotate180(coord) {
    return reflectX(reflectY(coord));
}

function rotate90clockwise(coord) {
    return [coord[1],-1 * coord[0]];
}

function rotate90antiClockwise(coord) {
    return [-1 * coord[1],coord[0]];
}

function randomIntFromInterval(min, max) { // min and max included
  min = math.min(min,max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}