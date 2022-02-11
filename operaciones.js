var text = "I2O5";
var oxi_id = text.indexOf("O");
var oxi = text.charAt(oxi_id + i);

var i = 1;
function recursiva() {
    if (isNaN(oxi)) {
        i++;
        oxi = text.charAt(oxi_id + i);
        recursiva();
    }
    else {
        oxi = oxi;
    }
}
recursiva();
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

i = 0;
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

var text
function write(element_Name, element_Id) {
    text =
        `"${element_Id}": {
        "nombre" : "${element_Name}",
    },`
    return text;
}

async function datos(n) {
    const response = await fetch("http://127.0.0.1:5500/Tabla%20periodica/tablaPeriodica.json");
    const json = await response.json();
    console.log(json[n].nombre);
    console.log(json[n].simbolo);

    promise_nombre = json[n].nombre;
    promise_id = json[n].simbolo;

    promises = [promise_nombre, promise_id];
    return promises;
};

i = 0;
var json = [];

async function ciclo() {
    while (117 > i) {
        var valores = await datos(i);
        write(valores[0], valores[1]);
        json.push(text);
        i++;
    }
    
}

