function findMostFrequentNumber() {
    var arr = [4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3],
        mostFrequent = arr[0],
        count = 1,
        maxCount = 1,
        current;

    for (var i = 0, len = arr.length; i < len; i++) {
        current = arr[i];
        for (var k = 0, len = arr.length; k < len; k++) {
            if (current === arr[k] && i !== k) {
                count++;
            }
        }
        if (count > maxCount) {
            maxCount = count;
            mostFrequent = current;
        }

        count = 1;
    }

    jsConsole.writeLine("Most frequent number in the sequence: " + mostFrequent);
}

findMostFrequentNumber();