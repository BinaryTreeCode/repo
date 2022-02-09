var text = "Li3 H8 + 5O2";
var text = "Li3H85O2";
let i = 0;

while (text.length > i) {
    a = text.charAt(i)
    b = text.charAt(i + 1)
    if (a == " " || a == "+" || a == "-") {
        console.log("eliminar " + a);
        text = text.replace(a, "");
    }
    else {
        if (VM(text, i)) {
            if (isNaN(a)) {
                elemento1 = a;
                console.log(a + " es un mayuscula");
                if (b != VM(b, 0)) {
                    elemento1 = a + b;
                }
            }
        }
    }
    i++;
}
function VM(palabra, n) {
    return palabra.charAt(n) === palabra.charAt(n).toUpperCase()
}



