function thirdDigitChecker() {
    var number = jsConsole.readInteger("#input");
    jsConsole.writeLine("The third digit of the given number (from right to left) is 7 -> " + (Math.floor(((number / 10) / 10) % 10)===7));
}