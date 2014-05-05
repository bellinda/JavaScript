function assigningLiteral() {
    var integer = 256;
        floatingPointLiteral = 56.7;
        stringLiteral = "I am a string literal";  //you can write it only with ' ', too
        booleanLiteral = true;
        arrayLiteral = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
        objectLiteral = { name: "Cat", breed: "Siamese", color: "beige" };
        quotedString = "'How you doin'?', Joey said."
        nullableVariable = null;
        undefinedVariable = undefined;


    console.log("Integer literal example: " + integer);
    console.log("Floating-point literal example: " + floatingPointLiteral);
    console.log("String literal example: " + stringLiteral);
    console.log("Boolean literal example: " + booleanLiteral);
    console.log("Array literal example: " + arrayLiteral);
    console.log("Object literal example: " + objectLiteral.name + ", " + objectLiteral.breed + ", " + objectLiteral.color);
    console.log("");
    console.log("String variable with quoted text in it: " + quotedString);
    console.log("");
    console.log("typeof to an integer: " + typeof (integer));
    console.log("typeof to a floating-point: " + typeof (floatingPointLiteral));
    console.log("typeof to a string: " + typeof (stringLiteral));
    console.log("typeof to a boolean literal: " + typeof (booleanLiteral));
    console.log("typeof to an array: " + typeof (arrayLiteral));
    console.log("typeof to an object literal: " + typeof (objectLiteral));
    console.log("");
    console.log("typeof to a variable with value = null: " + typeof (nullableVariable));
    console.log("typeof to a variable with value = undefined: " + typeof(undefinedVariable));
};