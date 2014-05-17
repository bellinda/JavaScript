function replaceLinkTags() {
    var input = "<p>Please visit <a href=\"http://academy.telerik.com\">our site</a> to choose a training course. Also visit <a href=\"www.devbg.org\">our forum</a> to discuss the courses.</p>",
        openningTagReg = new RegExp("<a href=\"", "g"),
        openningTagEndReg = new RegExp("\">", "g"),
        closingTagReg = new RegExp("</a>", "g");
    input = input.replace(openningTagReg, "[URL=");
    input = input.replace(openningTagEndReg, "]");
    input = input.replace(closingTagReg, "[/URL]");
    console.log(input);

    return input;
}

jsConsole.writeLine(replaceLinkTags());