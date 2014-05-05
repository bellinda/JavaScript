function thirdBitChecker() {
    var number = jsConsole.readInteger("#input");
        digit = number >> 3;
    jsConsole.writeLine("The third bit of the given number (from right to left) is 1 -> " + ((digit | 1) === digit));
}