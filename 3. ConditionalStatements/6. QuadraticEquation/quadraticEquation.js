function quadraticEquation() {
    var a = jsConsole.readInteger("#aInput");
        b = jsConsole.readInteger("#bInput");
        c = jsConsole.readInteger("#cInput");
        d = 0;
        x1 = 0;
        x2 = 0;
        temp = 0;

        if (a === 0 && b !== 0 && c !== 0) {
            x1 = (-c) / b;
            jsConsole.writeLine("Only one root: x = " + x1);
        } else if (a === 0 && b === 0 && c === 0) {
            jsConsole.writeLine("The equation has no real roots.");
        } else if (b === 0 && a !== 0 && c !== 0) {
            temp = (-c) / a;
            if (temp > 0) {
                x1 = Math.sqrt(temp);
            } else {
                x1 = Math.sqrt(-temp);
            }
            jsConsole.writeLine("There are two real roots: x1 = " + x1 + " and x2 = " + (-x1));
        } else {
            d = b * b - 4 * a * c;
            if (d === 0) {
                x1 = (-b) / (2 * a);
                jsConsole.writeLine("There are two equal real roots: x1 = x2 = " + x1);
            } else if (d < 0) {
                jsConsole.writeLine("There are no real roots.");
            } else {
                x1 = (-b + Math.sqrt(d)) / (2 * a);
                x2 = (-b - Math.sqrt(d)) / (2 * a);
                jsConsole.writeLine("There are two real roots: x1 = " + x1 + " and x2 = " + x2);
            }
        }

}