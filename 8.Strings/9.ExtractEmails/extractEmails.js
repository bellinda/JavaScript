function extractEmails() {
    var input = "Did you mean test@gmail.com is wrong? Can you try it with your email, f.e. myEmail@abv.bg entered in the textbox? Can you send me an email on pesho@bethere.com ? Oh sorry, my new email is pesho.peshov@fdiba.tu-sofia.bg",
        pattern = new RegExp("[A-Za-z_.*-0-9]{2,49}@\\w{2,49}[.][A-Za-z_.-0-9]{2,49}", "g");
    match = input.match(pattern);

    return match.join('<br />');
}

jsConsole.writeLine(extractEmails());