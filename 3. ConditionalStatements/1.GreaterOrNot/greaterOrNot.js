function greaterOrNot() {
    var x = jsConsole.readInteger("#xInput");
        y = jsConsole.readInteger("#yInput");
        temp = 0;

    if (x > y) {
        temp = x;
        x = y;
        y = temp;
        jsConsole.writeLine("The first number is greater than the second one => we exchange their values => x = " + x + ", y = " + y);
    } else {
        jsConsole.writeLine("The first number is NOT greater than the second one => we do NOT exchange their values => x = " + x + ", y = " + y);
    }
}