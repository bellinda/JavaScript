function reverseNumber() {
    var number = jsConsole.readInteger("#number"),
        copyOfNumber = number,
        reversedNum = "",
        lastDigit = 0;

    while(number > 0) {
        lastDigit = number % 10;
        reversedNum += lastDigit;
        number = Math.floor(number / 10);
    }

    jsConsole.writeLine(copyOfNumber + " -> " + reversedNum);
}