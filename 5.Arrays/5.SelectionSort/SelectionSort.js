function sortArray() {
    var arr = [3, 12, -7, 4, -13, -11, 17, 100, -1],
        sortedArray = [],
        min = 9007199254740992;

    while (arr.length > 0) {
        for (var i = 0; i < arr.length; i++) {
            if (min > arr[i]) {
                min = arr[i];
            }
        }

        arr.splice(arr.indexOf(min), 1);
        sortedArray.push(min);
        min = 9007199254740992;
    }

    jsConsole.writeLine(sortedArray.join(', '));
}

sortArray();