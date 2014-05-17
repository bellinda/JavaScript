function maxSequenceOfEqualElements() {
    var arr = [1, 1, 1, 0, -7, -7, -7, -7, 3, 3, 9, 3],
        equalElements = [],
        current = arr[0],
        count = 1,
        maxCount = 1,
        startIndex = 0;

    for (var i = 1, len = arr.length; i < len; i++) {
        if (current === arr[i]) {
            count++;
        } else {
            if (maxCount < count) {
                maxCount = count;
                startIndex = i - count + 1;
            }
            count = 1;
        }
        current = arr[i];
        if (i === len - 1) {
            if (maxCount < count) {
                maxCount = count;
                startIndex = i - count + 1;
            }
        }
    }

    for (var i = 0; i < maxCount; i++) {
        equalElements.push(arr[startIndex]);
    }

    jsConsole.writeLine(equalElements.join(', '));
}

maxSequenceOfEqualElements();