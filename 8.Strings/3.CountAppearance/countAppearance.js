function countAppearance() {
    var input = jsConsole.read("#input"),
        count = 0,
        pattern = new RegExp(input, "g"),
        match,
        text = "We are living in an yellow submarine. We don't have anything else. Inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 days.";

    match = pattern.exec(text.toLowerCase());

    while(match !== null) {
        count++;
        match = pattern.exec(text.toLowerCase());
    }
    jsConsole.writeLine(count);
}