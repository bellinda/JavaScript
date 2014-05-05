function calculateTrapArea() {
    var a = jsConsole.readInteger("#aInput");
        b = jsConsole.readInteger("#bInput");
        h = jsConsole.readInteger("#hInput");
        area = (a + b)* h / 2;
    
    jsConsole.writeLine("The area of trapezoid with sides a = " + a + ", b = " + b + " and height h = " + h + " is equal to " + area);
}