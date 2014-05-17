function stringFormat(params) {
    var mainString = params,
        toBeReplaced = "",
        index = 0;

    for (var i = 0; i < params.length; i++) {
        if (params[i] === "{") {
            toBeReplaced = params.substring(i, params.indexOf("}") + 1);
            index = parseInt(params[i + 1]);
            params = params.replace(toBeReplaced, arguments[index + 1]);
            i += 2;
        }
    }

    console.log(arguments[1]);
    return params;
}


var frmt = '{0}, {1}, {0} text {2}'; 
var str = stringFormat(frmt, 1, 'Pesho', 'Gosho');
jsConsole.writeLine(str);