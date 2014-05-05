function divisibleOrNot() {
    var number = jsConsole.readInteger("#input");
    jsConsole.writeLine(number + " can be divided (without remainder) by 7 and 5 in the same time -> " + ((number % 7 === 0)&&(number % 5 === 0)));
}