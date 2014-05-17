function checkElementIfBiggerThanNeighbours() {
    var testArray = [2, 5, 7, -3, 7, 11, 2, -9, 7, 5, 2, -11],
        position = jsConsole.readInteger("#position");

    if (isNaN(position)) {
        return jsConsole.writeLine("You are trying to search not a number in an array of numbers. Try again with a NUMBER!");
    }

    if (position !== (testArray.length - 1) && position !== 0 && testArray[position] > testArray[position + 1] && testArray[position] > testArray[position - 1]) {
        jsConsole.writeLine("The number at position " + position + " is bigger than its neighbours.");
    } else if (position === 0 && testArray[position] > testArray[position + 1]) {
        jsConsole.writeLine("The number is at position 0 in the array and is bigger than its right neighbour.");
    } else if ((position == testArray.length - 1) && testArray[position] > testArray[position - 1]) {
        jsConsole.writeLine("The number is at the last position of the array and it is bigger than its left neighbour.");
    } else if (position !== (testArray.length - 1) && position !== 0 && (testArray[position] > testArray[position - 1] || testArray[position] > testArray[position + 1])) {
        jsConsole.writeLine("The number at position " + position + " is bigger only than one of its neighbours.");
    } else {
        jsConsole.writeLine("The number at position " + position + " is not bigger than its neighbours.");
    }
}