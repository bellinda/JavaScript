function hasProperty(obj, property) {

    if (typeof obj === "number" || typeof obj === "string" || typeof obj === undefined) {
        return false;
    } else {
        for (var prop in obj) {
            if (prop === property) {
                return true;
            }
        }
    }
    return false;
}

var pesho = {
    name: "Petar Nikolov",
    age: 24,
    city: "Varna",
    toString: function () { return "Name: " + this.name + ", age: " + this.age + ", city: " + this.city; }
};
//pesho = "I love you";
var hasPropCity = hasProperty(pesho, 'city');
var hasPropGender = hasProperty(pesho, 'gender');

jsConsole.writeLine("has property 'city' -> " + hasPropCity);
jsConsole.writeLine("has property 'gender' -> " + hasPropGender);