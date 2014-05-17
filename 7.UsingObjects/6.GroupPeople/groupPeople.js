function group(persons, property) {
    var result ="";
    var firstNames = [],
        lastNames = [],
        ages = [],
        grouped = {
            toString: function () {
                for (var prop in this) {
                    if (prop !== "toString") {
                        result += prop + ": ";
                        for (var i = 0, len = this[prop].length; i < len; i++) {
                            result += this[prop][i].firstname + " " + this[prop][i].lastname;
                            if (i !== len - 1) {
                                result += ", ";
                            } else {
                                result += ";\n";                            
                            }
                        }
                    }
                }
                return result;
            }
        }
        
    switch (property) {
        case "firstname":
            for (var index in persons) {
                if (firstNames.indexOf(persons[index].firstname) === -1) {
                    grouped[persons[index].firstname] = [];
                }
            }
            for (var prop in grouped) {
                for (var index in persons) {
                    if (persons[index].firstname === prop) {
                        grouped[prop].push(persons[index]);
                    }
                }
            }
            break;
        case "lastname":
            for (var index in persons) {
                if (lastNames.indexOf(persons[index].lastname) === -1) {
                    grouped[persons[index].lastname] = [];
                }
            }
            for (var prop in grouped) {
                for (var index in persons) {
                    if (persons[index].lastname === prop) {
                        grouped[prop].push(persons[index]);
                    }
                }
            }
            break;
        case "age":
            for (var index in persons) {
                if (ages.indexOf(persons[index].age) === -1) {
                    grouped[persons[index].age] = [];
                }
            }
            for (var prop in grouped) {
                for (var i in persons) {
                    if (persons[i].age === parseInt(prop)) {
                        grouped[prop].push(persons[i]);
                    }
                }
            }
            break;
    }
    return grouped.toString();
}

var persons = [
    { firstname: 'Gosho', lastname: 'Nikolov', age: 17 },
    { firstname: 'Bay', lastname: 'Ivan', age: 81 },
    { firstname: 'Gosho', lastname: 'Toshkov', age: 24 },
    { firstname: 'Pesho', lastname: 'Nikolov', age: 24 },
    { firstname: 'Maria', lastname: 'Tihova', age: 17}];

jsConsole.writeLine(group(persons, "firstname"));
jsConsole.writeLine(group(persons, "lastname"));
jsConsole.writeLine(group(persons, "age"));


 
//        var smallest = persons[0].firstname,
//        var personToAdd = {},
//grouped["firstname"] = [];
//while (grouped["firstname"].length < persons.length) {
//    for (var i = 0, len = persons.length; i < len; i++) {
//        if (smallest > persons[i].firstname) {
//            smallest = persons[i].firstname;
//            personToAdd = persons[i];
//        }
//    }
//    grouped["firstname"].push(personToAdd);
//    smallest = persons[0].firstname;
//}