function isWithinACircleOutOfRectangle() {
    var x = jsConsole.readInteger("#xInput");
        y = jsConsole.readInteger("#yInput");
        insideCircle = ((x - 1) * (x - 1) + (y - 1) * (y - 1)) <= 3 * 3;
        insideRectangle = (x >= -1 && x <= 5) && (y >= -1 && y <= 1);
    if (insideCircle === true && insideRectangle === false) {
        var proove = true;
    }
    else {
        var proove = false;
    }
    jsConsole.writeLine("The point with coordinates (" + x + ", " + y + ") is within the circle K((0, 5), 3) and out of the rectangle R(top = 1, left = -1, width = 6, height = 2)  -> " + proove);
}