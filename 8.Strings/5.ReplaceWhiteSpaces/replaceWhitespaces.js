function replaceWhitespaes() {
    var text = "Generally, Bulgarians are very warm people, and they can cope with many stereotypes and ignorant questions, but there are some things that can easily upset us. So if you really want to get on the nerves of a Bulgarian, follow this advice.",
        nbsp = "&nbsp;";
    for (var i = 0; i < text.length; i++) {
        if (text[i] === " ") {
            text = text.replace(text[i], nbsp);
        }
    }
    console.log(text);
    return text;
}

jsConsole.writeLine(replaceWhitespaes());