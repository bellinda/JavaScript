function extractPalindromes() {
    var text = "On this LeVeL, you can see an old Madam with a third eye on her head, during ABBA are playing.",
        palindromes = [];


    text = text.split(' ');
    var regEx = new RegExp('[,.!?]+');
    for (var i = 0; i < text.length; i++) {
        var currentWord = text[i].toLowerCase();
        currentWord = currentWord.replace(regEx, '');
        if (currentWord === reverseWords(currentWord) && currentWord.length !== 1) {
            text[i] = text[i].replace(regEx, '');
            palindromes.push(text[i]);
        }
    }

    return palindromes.join("<br />");
}

function reverseWords(word){
    var reversed = "";
    for (var i = word.length - 1; i >= 0; i--) {
        reversed += word[i];
    }

    return reversed;
}

jsConsole.writeLine(extractPalindromes());