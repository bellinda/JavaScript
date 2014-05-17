function reverseString() {
    var input = jsConsole.read("#input"),
        reversed = "";
    for (var i = input.length - 1; i >= 0; i--) {
        reversed += input[i];
    }

    jsConsole.writeLine(input + " => " + reversed);
}