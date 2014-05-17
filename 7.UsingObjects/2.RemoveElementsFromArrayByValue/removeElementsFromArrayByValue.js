Array.prototype.remove = function (value) {
    for (var i = 0; i < this.length; i++) {
        if (this[i] === value) {
            this.splice(i, 1);
        }
    }
}

var arr = [1, 2, 1, 4, 1, 3, 4, 1, 111, 3, 2, 1, '1'];
arr.remove(1);
jsConsole.writeLine("[" + arr.join(', ') + "]");


//second way to do it:
//Array.prototype.remove = function (value) {
    //    var result = [];
    //    for (var i = 0; i < this.length; i++) {
    //        if (this[i] !== value) {
    //            result.push(this[i]);
    //        }
    //    }
//    return result;
//}

//var arr = [1, 2, 1, 4, 1, 3, 4, 1, 111, 3, 2, 1, '1'];
//arr = arr.remove(1);
//jsConsole.writeLine("[" + arr.join(', ') + "]");