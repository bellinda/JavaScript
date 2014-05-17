//Разбирам условието като "кои не се делят едновременно на 3 и на 7" 

function printNotDevisible () {
    var n = jsConsole.readInteger("#n");

    for (var i = 1; i <= n; i++) {
        if (!(i % 3 === 0 && i % 7 === 0)) {
            jsConsole.write(i + " ");
        }
    }
}