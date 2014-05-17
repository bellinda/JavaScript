function checkBreakets() {
    var input = jsConsole.read("#input"),
        numberLeftBreakets = 0,
        numberRightBreakets = 0;

    for (var i = 0, len = input.length; i < len; i++) {
        if (input[i] === "(" && i < len - 1 && input[i + 1] !== ")") {
            numberLeftBreakets++;
        } else if (input[i] === ")" && numberLeftBreakets !== 0) {
            numberRightBreakets++;
        }
    }

    if (numberLeftBreakets === numberRightBreakets) {
        jsConsole.writeLine("-> correct");
    } else {
        jsConsole.writeLine("-> incorrect");
    }
}