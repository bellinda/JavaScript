function evenOrOdd() {
    var number = jsConsole.readInteger("#number");
    if (number % 2 === 0) {
        jsConsole.writeLine(number + " is even.");
    }
    else {
        jsConsole.writeLine(number + " is odd");
    }
}