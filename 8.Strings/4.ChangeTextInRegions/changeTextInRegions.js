function changeTextInRegions() {
    var text = "We are <mixcase>living</mixcase> in a <upcase>yellow submarine</upcase>. We <mixcase>don't</mixcase> have <lowcase>anything</lowcase> else.";
    var isInOpenTag = false;
    var tag = '';
    var toBeChanged = '';
    var randomCounter = 0;
    var replacement = "";

    for (var i = 0; i < text.length; i++) {
        if (text[i] === "<" && i < text.length - 1 && text[i + 1] !== "/") {
            isInOpenTag = true;
            continue;
        }

        if (text[i] !== ">" && isInOpenTag === true && tag === "") {
            while (text[i] !== ">") {
                tag += text[i];
                i++;
            }
        }

        if (isInOpenTag && text[i] === ">") {

            toBeChanged = "<" + tag + ">" + text.substring(i + 1, text.indexOf("</")) + "</" + tag + ">";
            switch (tag) {
                case "mixcase":
                    replacement = text.substring(i + 1, text.indexOf("</"));
                    for (var k = 0; k < replacement.length; k++) {
                        if (k === 0 || k % 2 === 0) {
                            var temp = replacement[k].toUpperCase();
                            replacement = replacement.replace(replacement[k], temp);
                        } else {
                            var temp = replacement[k].toLowerCase();
                            replacement = replacement.replace(replacement[k], temp);
                        }
                    }
                    text = text.replace(toBeChanged, replacement);
                    i = i - (tag.length + 2) + replacement.length;
                    isInOpenTag = false;
                    break;
                case "upcase":
                    replacement = text.substring(i + 1, text.indexOf("</")).toUpperCase();
                    text = text.replace(toBeChanged, replacement);
                    i = i - (tag.length + 2) + replacement.length;
                    //i += (toBeChanged.length - tag.length - 2);
                    isInOpenTag = false;
                    break;
                case "lowcase":
                    replacement = text.substring(i + 1, text.indexOf("</")).toLowerCase();
                    text = text.replace(toBeChanged, replacement);
                    i = i - (tag.length + 2) + replacement.length;
                    isInOpenTag = false;
                    break;
            }
        }

        tag = "";
    }
    return text;
}

jsConsole.writeLine(changeTextInRegions());