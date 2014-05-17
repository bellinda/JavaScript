function findOccurancesOfWord(typeOfSeacrh) {
    var word = jsConsole.read("#word"),
        pattern = "\\b" + word + "\\s|\\b" + word + "\\W",
        myRe = new RegExp(pattern, "g"),
        text = 'Today is not the best day of my life, but I can say that it could not be the worst, too. The day of today is for rest. But TODAY I should say "I\'ll do it today" ',
        myArr = [];

    switch (typeOfSeacrh) {
        case "caseSensitive":
            myArr = text.match(myRe);
            jsConsole.writeLine("Occurances of the word '" + word + "' in sensitive case = " + myArr.length);
            break;
        case "caseInsensitive":
            myArr = text.toLowerCase().match(myRe);
            jsConsole.writeLine("Occurances of the word '" + word + "' in insensitive case = " + myArr.length);  
            break;
    }
}