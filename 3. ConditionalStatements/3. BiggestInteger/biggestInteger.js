function biggestInteger() {
    var x = jsConsole.readInteger("#xInput");
        y = jsConsole.readInteger("#yInput");
        z = jsConsole.readInteger("#zInput");

        if (x >= y) {
            if (y >= z) {
                jsConsole.writeLine("Biggest integer: " + x);
            } else {
                if (x >= z) {
                    jsConsole.writeLine("Biggest integer: " + x);
                } else {
                    jsConsole.writeLine("Biggest integer: " + z);
                }
            }
        } else if (x >= z) {
            if (z >= y) {
                jsConsole.writeLine("Biggest integer: " + x);
            } else {
                if (x >= y) {
                    jsConsole.writeLine("Biggest integer: " + x);
                } else {
                    jsConsole.writeLine("Biggest integer: " + y);
                }
            }
        } else if (y >= x) {
            if (x >= z) {
                jsConsole.writeLine("Biggest integer: " + y);
            } else {
                if (y >= z) {
                    jsConsole.writeLine("Biggest integer: " + y);
                } else {
                    jsConsole.writeLine("Biggest integer: " + z);
                }
            }
        } else if (y >= z) {
            if (z >= x) {
                jsConsole.writeLine("Biggest integer: " + y);
            } else {
                if (y >= x) {
                    jsConsole.writeLine("Biggest integer: " + y);
                } else {
                    jsConsole.writeLine("Biggest integer: " + x);
                }
            }
        } else if (z >= x) {
            if (x >= y) {
                jsConsole.writeLine("Biggest integer: " + z);
            } else {
                if (z >= y) {
                    jsConsole.writeLine("Biggest integer: " + z);
                } else {
                    jsConsole.writeLine("Biggest integer: " + y);
                }
            }
        } else if (z >= y) {
            if (y >= x) {
                jsConsole.writeLine("Biggest integer: " + z);
            } else {
                if (z >= x) {
                    jsConsole.writeLine("Biggest integer: " + z);
                } else {
                    jsConsole.writeLine("Biggest integer: " + x);
                }
            }
        }
}