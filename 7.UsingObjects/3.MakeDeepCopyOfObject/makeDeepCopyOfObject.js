function copy(obj) {
    var copyPesho = {};

    if (typeof obj === "number" || typeof obj === "string" || typeof obj === undefined) {
        copyPesho = obj;
    } else {
        for (var prop in obj) {
            copyPesho[prop] = obj[prop];
        }
    }
    return copyPesho;
}

var pesho = {
    name: "Petar Nikolov",
    age: 24,
    city: "Varna",
    toString: function () { return "Name: " + this.name + ", age: " + this.age + ", city: " + this.city; }
};
    //pesho = "I love you";

jsConsole.writeLine(copy(pesho));