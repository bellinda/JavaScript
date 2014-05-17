function findIndexByBinarySearch() {
    var arr = [4, 1, 11, 8, 22, 3, 14, 24, 7, 2, 17, 9, -3],
        toBeFound = 7,
        min = 0,
        max = arr.length - 1,
        elementsBeforeSearched = 0,
        middleElementPosition,
        middleElement;


    arr = arr.sort(orderBy);

    //First way:

    while (min <= max) {
        middleElementPosition = Math.floor((min + max) / 2);
        middleElement = arr[middleElementPosition];
        if (middleElement === toBeFound) {
            break;
        } else if(toBeFound > arr[middleElementPosition]){
            min = middleElementPosition + 1;
        } else if (toBeFound < arr[middleElementPosition]) {
            max = middleElementPosition - 1;
        }
    }
    jsConsole.writeLine("Searched number: " + toBeFound + ", index: " + middleElementPosition);
}

    //Second way:

//    while (arr.length >= 1) {
//        middleElementPosition = Math.floor(arr.length / 2);
//        middleElement = arr[middleElementPosition];
//        if (toBeFound < middleElement) {
//            arr.splice(arr.indexOf(middleElement));
//        } else if (toBeFound > middleElement) {
//            arr.splice(0, middleElementPosition);
//            elementsBeforeSearched += middleElementPosition;
//        } else if (toBeFound === middleElement) {
//            if (arr.length === 2 || arr.length === 3) {
//                elementsBeforeSearched++;
//            }
//            break;
//        }
//    }
//    jsConsole.writeLine("Searched number: " + toBeFound + ", index: " + elementsBeforeSearched);
//}

function orderBy(a, b) {
    return (a == b) ? 0 : (a > b) ? 1 : -1;
}

findIndexByBinarySearch();