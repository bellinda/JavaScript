function numbers1toN () {
    var n = jsConsole.readInteger("#n");

    for (var i = 1; i <= n; i++) {
        if (i !== n) {
            jsConsole.write(i + " ");
        } else {
            jsConsole.write(i);
        }
    }
}