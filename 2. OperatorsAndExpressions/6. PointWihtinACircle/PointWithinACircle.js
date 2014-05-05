function isWithinACircle() {
    var x = jsConsole.readInteger("#xInput");
        y = jsConsole.readInteger("#yInput");
    if ((x >= 0 && x <= 5) && (y >= 0 && y <= 5)) {
        var proove = true;
    }
    else {
        var proove = false;
    }
    jsConsole.writeLine("The point with coordinates (" + x + ", " + y + ") is within the circle K(0, 5) -> " + proove);
}