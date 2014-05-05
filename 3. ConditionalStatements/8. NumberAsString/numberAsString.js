function numberAsString() {
    var number = jsConsole.readInteger("#number");
        name = "";
        secondDigit = parseInt((number % 100)/10);
        thirdDigit = parseInt((number % 100) % 10);
        //debugger;

        if (isNaN(number)) {
            jsConsole.writeLine("NaN");
        } else if (number === 0) {
            name = "zero";
            jsConsole.writeLine(name);
        } else {
            switch (parseInt(number / 100)) {
                case 1:
                    name = "one hundered";
                    break;
                case 2:
                    name = "two hundred";
                    break;
                case 3:
                    name = "three hundred";
                    break;
                case 4:
                    name = "four hundred";
                    break;
                case 5:
                    name = "five hundred";
                    break;
                case 6:
                    name = "six hundred";
                    break;
                case 7:
                    name = "seven hundred";
                    break;
                case 8:
                    name = "eight hundred";
                    break;
                case 9:
                    name = "nine hundred";
                    break;
                default:
                    name = "";
                    break;
            }
            if (number % 100 === 0) {
                jsConsole.writeLine(name);
            } else {
                if ((parseInt(number / 100) !== 0) && (number % 100 !== 0)) {
                    name += " and ";
                } 
                if (parseInt(number % 100) <= 19) {
                    switch (parseInt(number % 100)) {
                        case 1:
                            name += "one";
                            break;
                        case 2:
                            name += "two";
                            break;
                        case 3:
                            name += "three";
                            break;
                        case 4:
                            name += "four";
                            break;
                        case 5:
                            name += "five";
                            break;
                        case 6:
                            name += "six";
                            break;
                        case 7:
                            name += "seven";
                            break;
                        case 8:
                            name += "eight";
                            break;
                        case 9:
                            name += "nine";
                            break;
                        case 10:
                            name += "ten";
                            break;
                        case 11:
                            name += "eleven";
                            break;
                        case 12:
                            name += "twelve";
                            break;
                        case 13:
                            name += "thirteen";
                            break;
                        case 14:
                            name += "fourteen";
                            break;
                        case 15:
                            name += "fifteen";
                            break;
                        case 16:
                            name += "sixteen";
                            break;
                        case 17:
                            name += "seventeen";
                            break;
                        case 18:
                            name += "eighteen";
                            break;
                        case 19:
                            name += "ninteen";
                            break;
                        default:
                            name += "zero";
                            break;
                    }
                } else {
                    switch (secondDigit) {
                        case 2:
                            name += "twenty ";
                            break;
                        case 3:
                            name += "thirty ";
                            break;
                        case 4:
                            name += "fourty ";
                            break;
                        case 5:
                            name += "fifty ";
                            break;
                        case 6:
                            name += "sixty ";
                            break;
                        case 7:
                            name += "seventy ";
                            break;
                        case 8:
                            name += "eighty ";
                            break;
                        case 9:
                            name += "ninety ";
                            break;
                        default:
                            name += "";
                            break;
                    }

                    switch (thirdDigit) {
                        case 1:
                            name += "one";
                            break;
                        case 2:
                            name += "two";
                            break;
                        case 3:
                            name += "three";
                            break;
                        case 4:
                            name += "four";
                            break;
                        case 5:
                            name += "five";
                            break;
                        case 6:
                            name += "six";
                            break;
                        case 7:
                            name += "seven";
                            break;
                        case 8:
                            name += "eight";
                            break;
                        case 9:
                            name += "nine";
                            break;
                        default:
                            name += "";
                            break;
                    }
                }
                jsConsole.writeLine(name);
            }
        } 
    }    

