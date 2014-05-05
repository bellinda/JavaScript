function descendingOrder() {
    var x = jsConsole.readInteger("#xInput");
        y = jsConsole.readInteger("#yInput");
        z = jsConsole.readInteger("#zInput");
        first = 0;
        second = 0;
        third = 0;

        if (x >= y) {
            if (y >= z) {
                first = x;
                second = y;
                third = z;
            } else {  // y < z
                if (x >= z) {
                    first = x;
                    second = z;
                    third = y;
                } else { // y < z && x < z && x >= y
                    first = z;
                    second = x;
                    third = y;
                }
            }
        } else if (x >= z) {
            if (z >= y) {
                first = x;
                second = z;
                third = y;
            } else { // z < y
                if (x >= y) {
                    first = x;
                    second = y;
                    third = z;
                } else { // z < y && x < y && x >= z
                    first = y;
                    second = x;
                    third = z;
                }
            }
        } else if (y >= x) {
            if (x >= z) {
                first = y;
                second = x;
                third = z;
            } else { // x < z && x <= y && y >= z
                if (y >= z) {
                    first = y;
                    second = z;
                    third = x;
                } else { //x < z && x <= y && y < z
                    first = z;
                    second = y;
                    third = x;
                }
            }
        } else if (y >= z) {
            if (z >= x) {
                first = y;
                second = z;
                third = x;
            } else { // z < x
                if (y >= x) {
                    first = y;
                    second = x;
                    third = z;
                } else { //z < x && y < x && y > z
                    first = x;
                    second = y;
                    third = z;
                }
            }
        } else if (z >= x) {
            if (x >= y) {
                first = z;
                second = x;
                third = y;
            } else { //x < y
                if (z >= y) {
                    first = z;
                    second = y;
                    third = x;
                } else { // z < y && x < y && z > x
                    first = y;
                    second = z;
                    third = x;
                }
            }
        } else if (z >= y) {
            if (y >= x) {
                first = z;
                second = y;
                third = x;
            } else { // y < x
                if (z >= x) {
                    first = z;
                    second = x;
                    third = y;
                } else { // z < x && y < x && z > y
                    first = x;
                    second = z;
                    third = y;
                }
            }
        }

    jsConsole.writeLine("Descending order: " + first + ", " + second + ", " + third);
}