function signOfProduct() {
    var x = jsConsole.readInteger("#xInput");
        y = jsConsole.readInteger("#yInput");
        z = jsConsole.readInteger("#zInput");

        if (x === 0 || y === 0 || z === 0) {
            jsConsole.writeLine("One of the numbers is equal to zero, so the product will be equal to zero, too.");
        } else if ((x > 0 && y > 0 && z > 0) || (x > 0 && y < 0 && z < 0) || (x < 0 && y > 0 && z < 0) || (x < 0 && y < 0 && z > 0)) {
            jsConsole.writeLine("Sign of the product: +");
        } else {
            jsConsole.writeLine("Sign of the product: -");
        }
}