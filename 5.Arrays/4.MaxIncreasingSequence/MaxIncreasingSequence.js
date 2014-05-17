function maxIncreasingSequence() {
    var arr = [3, 2, 3, 4, 2, 2, 4],
        maxIncreasing = [],
        maxLength = 1,
        currentLength = 1,
        startIndex = 0;

    for (var i = 0, len = arr.length; i < len - 1; i++) {
        if (arr[i] === arr[i + 1] - 1) {
            currentLength++;
        } else {
            if (maxLength < currentLength) {
                maxLength = currentLength;
                startIndex = i - currentLength + 1;
            }

            currentLength = 1;
        }

        if (i === len - 2) {
            if (maxLength < currentLength) {
                maxLength = currentLength;
                startIndex = len - currentLength;
            }
        }
    }

    for (var i = startIndex; i < startIndex + maxLength; i++) {
        maxIncreasing.push(arr[i]);
    }

    jsConsole.writeLine(maxIncreasing.join(', '));
}

maxIncreasingSequence();