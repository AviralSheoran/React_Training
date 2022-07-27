let g = 89;


// else-if statement
if (g > 90) {
    console.log("A");
} else if (g > 80 && g < 90) {
    console.log("B");
} else if (g > 70 && g < 80) {
    console.log("C");
} else if (g > 60 && g < 70) {
    console.log("D")
} else if (g < 60) {
    console.log("FAIL");
}

// switch statement
let m = 120;

switch (m) {
    case 'm > 90':
        console.log("A");
        break;
    case 'm>80 && m<90':
        console.log("B");
        break;
    case 'm>70 && m<80':
        console.log("C");
        break;
    case 'm>60 && m<70':
        console.log("D");
        break;
    case 'm<60':
        console.log("FAIL");
        break;
    default:
        console.log("INVALID MARKS");
}