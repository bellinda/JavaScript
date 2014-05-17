function compareCharArraysLexicographically() {
    var firstArr = ['+', '5', 'a', 'L', "*", "#"],
        secondArr = ['@', 'b', '7', 'L', '&', 'h'];

    for (var i = 0, len = firstArr.length; i < len; i++) {
        if (firstArr[i] < secondArr[i]) {
            jsConsole.writeLine(firstArr[i] + " < " + secondArr[i]);
        } else if (firstArr[i] > secondArr[i]) {
            jsConsole.writeLine(firstArr[i] + " > " + secondArr[i]);
        } else {
            jsConsole.writeLine(firstArr[i] + " = " + secondArr[i]);
        }
    }
}

compareCharArraysLexicographically();