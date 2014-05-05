function greatestOf5() {
    var a = jsConsole.read("#aInput");
        b = jsConsole.read("#bInput");
        c = jsConsole.read("#cInput");
        d = jsConsole.read("#dInput");
        e = jsConsole.read("#eInput");
        inputs = [];
        inputs[0] = a;
        inputs[1] = b;
        inputs[2] = c;
        inputs[3] = d;
        inputs[4] = e;
        inputs.sort();
        greatest = parseInt(inputs[0]);
        debugger;
 
    if (!isNaN(parseInt(inputs[4]))) {  //if the inputs are numbers (try with the last in alphabetical order - if there is a string, it would be there)
        for (var i = 0; i < 5; i++) {
            if (greatest < parseInt(inputs[i])) {
                greatest = inputs[i];
            }
        }
        jsConsole.writeLine("The greatest one: " + greatest);
    } else {
        jsConsole.writeLine("The greatest one: " + inputs[4]);
    }
    

}