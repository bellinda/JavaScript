function countDivs() {
    var allDivs = document.getElementsByTagName('div');
    jsConsole.writeLine("The number of the divs in my web page is " + allDivs.length);
}

countDivs();