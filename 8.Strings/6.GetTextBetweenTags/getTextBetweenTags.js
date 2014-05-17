function getTextBetweenTags() {
    var input = "<html><head><title>Sample site</title></head><body><div>text<div>more text</div>and more...</div>in body</body></html>",
        text = "",
        isInTag = false;

    for (var i = 0; i < input.length; i++) {
        if (input[i] === "<") {
            isInTag = true;
            while (input[i] !== ">") {
                i++;
            }
            continue;
        }
        text += input[i];

    }

    return text;
}

jsConsole.writeLine(getTextBetweenTags());