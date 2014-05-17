function findYoungestPerson(persons) {
    var minAge = 120,
        youngestPerson = "",
        indexOfYoungest = 0;

    for (var i = 0, len = persons.length; i < len; i++) {
        if (persons[i].age < minAge) {
            minAge = persons[i].age;
            indexOfYoungest = i;
        }
    }

    youngestPerson += persons[indexOfYoungest].firstname;
    youngestPerson += " ";
    youngestPerson += persons[indexOfYoungest].lastname;

    return youngestPerson;
}

var persons = [
    { firstname: 'Gosho', lastname: 'Petrov', age: 32 },
    { firstname: 'Bay', lastname: 'Ivan', age: 81 },
    { firstname: 'Misho', lastname: 'Toshkov', age: 12},
    { firstname: 'Pesho', lastname: 'Nikolov', age: 24 },
    { firstname: 'Maria', lastname: 'Tihova', age: 17}];

    jsConsole.writeLine(findYoungestPerson(persons));