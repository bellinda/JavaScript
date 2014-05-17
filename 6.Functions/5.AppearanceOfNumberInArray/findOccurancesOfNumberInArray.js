function findOccurancesOfNumberInArray() {
    var testArray = [2, 5, 7, -3, 7, 11, 2, -9, 7, 5, 2, -11],
        number = jsConsole.readInteger("#number"),
        occurances = 0;

    if (isNaN(number)) {
        return jsConsole.writeLine("You are trying to search not a number in an array of numbers. Try again with a NUMBER!");
    }

    for (var index in testArray) {
        if (testArray[index] === number) {
            occurances++;
        }
    }

    correctAnswer = testOccurances(number, occurances);

    jsConsole.writeLine("Resultat of the main function: number of occurances of " + number + " in the array = " + occurances + ". Resultata of the test function -> " + ((correctAnswer === true) ? "correct" : "incorrect"));
}


//[, , , -3, , 11, , -9, , , , -11]
function testOccurances(number, occurances) {
    if ((number === 2 || number === 7) && occurances === 3) {
        return true;
    } else if (number === 5 && occurances === 2) {
        return true;
    } else if ((number === -3 || number === 11 || number === -9 || number === -11) && occurances === 1) {
        return true;
    } else if (number !== 2 && number !== 7 && number !== 5 && number !== -3 && number !== 11 && number !== -9 && number !== -11 && occurances == 0) {
        return true;
    } else {
        return false;
    }
}