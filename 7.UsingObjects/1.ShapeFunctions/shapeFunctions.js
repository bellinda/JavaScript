function buildPoint(x, y) {
    return {
        x:x,
        y:y,
        toString: function (){return "(" + this.x + ", " + this.y + ")";}
    }
}

function buildLine(startPoint, endPoint) {
    return {
        startPoint: startPoint,
        endPoint: endPoint,
        toString: function (){return "start point " + this.startPoint + " & end point " + this.endPoint;}
    }
}

function calculateDistanceBetweenPoint(firstPoint, secondPoint) {
    var xSquares = Math.pow((firstPoint.x - secondPoint.x), 2),
        ySquares = Math.pow((firstPoint.y - secondPoint.y), 2);
    return Math.sqrt(xSquares + ySquares);
}

function canThreeLinesFormTriangle(firstLine, secondLine, thirdLine) {
    if ((firstLine + secondLine) > thirdLine && (secondLine + thirdLine) > firstLine && (firstLine + thirdLine) > secondLine) {
        return true;
    } else {
        return false;
    }
}

var pointA = buildPoint(3, 2);
var pointB = buildPoint(9, 7);
var pointC = buildPoint(4, 8);

var line1 = buildLine(pointA, pointB);
var line2 = buildLine(pointB, pointC);
var line3 = buildLine(pointA, pointC);

jsConsole.writeLine("Distance between point A and point B = " + calculateDistanceBetweenPoint(pointA, pointB));
jsConsole.writeLine("Lines: first-> " + line1 + ", second -> " + line2 + " and third -> " + line3 + " can build a triangle -> " + canThreeLinesFormTriangle(line1, line2, line3));
