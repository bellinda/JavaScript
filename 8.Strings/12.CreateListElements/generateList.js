function generateList(people, template) {
    template = template.trim();
    var output = "<ul>";
    var currentPerson;


    for (var i in people) {
        currentPerson = template.replace("-{name}-", people[i].name);
        currentPerson = currentPerson.replace("-{age}-", people[i].age);
        output += ("<li>" + currentPerson + "</li>");
        console.log(output);
    }
    output += "</ul>";

    return output;
}

var people = [{ name: 'Peter', age: 14 }, { name: 'Georgi', age: 17}];
var tmpl = document.getElementById('list-item');
var peopleList = generateList(people, tmpl.innerHTML);
jsConsole.writeLine(peopleList);

//peopleList = '<ul><li><strong>Peter</strong> 
//<span>14</span></li><li>…</li>…</ul>'

//<div data-type="template" id="list-item"> 
//<strong>-{name}-</strong> <span>-{age}-</span> 
// /div>