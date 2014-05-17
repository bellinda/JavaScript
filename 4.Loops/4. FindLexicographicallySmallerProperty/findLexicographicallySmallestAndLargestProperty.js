function findLexicographicallySmallestAndLargestProperty() {
    var windowProperties = [],
        documentProperties = [],
        navigatorProperties = [],
        minWindowProperty,
        maxWindowProperty,
        minDocumentProperty,
        maxDocumentProperty,
        minNavigatorProperty,
        maxNavigatorProperty;


    for (var prop in window) {
        windowProperties.push(prop);
    }

    for (var prop in document) {
        documentProperties.push(prop);
    }

    for (var prop in navigator) {
        navigatorProperties.push(prop);
    }

    minWindowProperty = windowProperties[0];
    maxWindowProperty = windowProperties[0];
    minDocumentProperty = documentProperties[0];
    maxDocumentProperty = documentProperties[0];
    minNavigatorProperty = navigatorProperties[0];
    maxNavigatorProperty = navigatorProperties[0];

    for (var index in windowProperties) {
        if (minWindowProperty > windowProperties[index]) {
            minWindowProperty = windowProperties[index];
        } else if (maxWindowProperty < windowProperties[index]) {
            maxWindowProperty = windowProperties[index];
        }
    }

    jsConsole.writeLine("Lexicographically largest property in window: " + maxWindowProperty + "; lexicographically smallest property in window: " + minWindowProperty);

    for (var index in documentProperties) {
        if (minDocumentProperty > documentProperties[index]) {
            minDocumentProperty = documentProperties[index];
        } else if (maxDocumentProperty < documentProperties[index]) {
            maxDocumentProperty = documentProperties[index];
        }
    }

    jsConsole.writeLine("Lexicographically largest property in document: " + maxDocumentProperty + "; lexicographically smallest property in document: " + minDocumentProperty);

    for (var index in navigatorProperties) {
        if (minNavigatorProperty > navigatorProperties[index]) {
            minNavigatorProperty = navigatorProperties[index];
        } else if (maxNavigatorProperty < navigatorProperties[index]) {
            maxNavigatorProperty = navigatorProperties[index];
        }
    }

    jsConsole.writeLine("Lexicographically largest property in navigator: " + maxNavigatorProperty + "; lexicographically smallest property in navigator: " + minNavigatorProperty);
}

findLexicographicallySmallestAndLargestProperty();