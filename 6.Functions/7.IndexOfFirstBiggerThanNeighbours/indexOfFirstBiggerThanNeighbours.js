function checkElementIfBiggerThanNeighbours(position, testArray) {
    if (isNaN(position)) {
        return jsConsole.writeLine("You are trying to search not a number in an array of numbers. Try again with a NUMBER!");
    }

    if (position !== (testArray.length - 1) && position !== 0 && testArray[position] > testArray[position + 1] && testArray[position] > testArray[position - 1]) {
        return true;
    } else if (position === 0 && testArray[position] > testArray[position + 1]) {
        return true;
    } else if ((position == testArray.length - 1) && testArray[position] > testArray[position - 1]) {
        return true;
    } else if (position !== (testArray.length - 1) && position !== 0 && (testArray[position] > testArray[position - 1] || testArray[position] > testArray[position + 1])) {
        return false;
    } else {
        return false;
    }
}

function findIndexOfFirstBigger() {
    var testArray = [2, 5, 7, -3, 7, 11, 2, -9, 7, 5, 2, -11];
    // var testArray = [2, 2, 4, 4, 5, 5, 8, 8, 9, 9]; -> returned value = -1

    for (var i = 0, len = testArray.length; i < len; i++) {
        if (checkElementIfBiggerThanNeighbours(i, testArray) === true) {
            return i;
        }
    }

    return -1;
}

jsConsole.writeLine(findIndexOfFirstBigger());