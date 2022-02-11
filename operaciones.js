var text = "I2O5";
var i = 1;
var oxi_id = text.indexOf("O");
var oxi = text.charAt(oxi_id+i);

function recursiva (){
    if (isNaN(oxi)) {
        i++;
        oxi = text.charAt(oxi_id+i);
        recursiva();
    }
    else {
        oxi = oxi;
    }
}
recursiva ();
function oxidoN(elemento) {
    switch (elemento) {
        case "": elemento = "mono";
        case "2": elemento = "di";
        case "3": elemento = "tri";
        case "4": elemento = "tetra";
        case "5": elemento = "penta";
        case "6": elemento = "hexa";
        case "7": elemento = "hepta";
        case "8": elemento = "octa";
        case "9": elemento = "nona";
        case "10": elemento = "deca";
        default: elemento = "";
    };
}
oxidoN(oxi)

let i = 0;
let largo = text.length;
var oxi_no;
while (largo > i) {
    o = text.charAt(i);
    if (isNaN(o)) {
        console.log(o);
        oxi_no = "";
    }
    else {
        console.log(o);
        oxi_no = o;
    }
    i++;
}
oxidoN(oxi_no)


// sistematica = `${oxi}oxido de ${oxi_no}${noMetal}`;


function write(nombre) {
    text = 
    `"${nombre}": {
        "nombre" : "Hidrógeno",
    },`
    return text;
}

let i = 0;
while (117 > i) {
    nombre =
    i++;
}
    
