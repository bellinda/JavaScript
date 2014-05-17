function findMaxMinOfSequence () {
    var numbers = [-3, 10, 17, 0, -111],
        min = numbers[0],
        max = numbers[0];

    //first way to find max and min number of the sequence:
    jsConsole.writeLine("First way:");
    numbers.sort(orderBy);
    jsConsole.writeLine("Max number: " + numbers[numbers.length - 1] + "; Min number: " + numbers[0]);

    //second way
    jsConsole.writeLine("Second way:");
    for (var i = 0, len = numbers.length; i < len; i++) {
        if (min > numbers[i]) {
            min = numbers[i];
        } else if (max < numbers[i]) {
            max = numbers[i];
        }
    }
    jsConsole.writeLine("Max number: " + max + "; Min number: " + min);
}

function orderBy(a, b) {
    return (a == b) ? 0 : (a > b) ? 1 : -1;
}

findMaxMinOfSequence();