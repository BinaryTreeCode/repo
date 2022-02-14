var formula_ID = document.getElementById("formula");
var tradicional_text = document.getElementById("tradicional_input");

const formula_text = document.getElementById("Fórmula_text");
const sistematica_ID = document.getElementById("Sistemática");
const stock_ID = document.getElementById("Stock");
const tradicional_ID = document.getElementById("Tradicional");

var text = "";
var oxiR;
var ONM;
//  ONM = oxiddción_no_metal
var noMetal_beta, noMetal_id;
var noMetal = "";
var sistematica, stock, tradicional;
function star() {
    text = formula_ID.value;
    oxi_id = text.indexOf("O");
    i = 1;
    oxi = text.charAt(oxi_id + i);
    recursiva();
    i = 0;
    element()    
    ONM = text.charAt(noMetal_id + 1);
    if (isNaN(ONM)) {
        ONM = "";
    }
    else {
        ONM = ONM;
    }

    oxi = oxidoN(oxi);
    ONM = ONMN(ONM); //  ONMN = oxiddción_no_metal_numero
    oxiR = oxidoNR(oxi);
    nameMetal();
    write();
};

function recursiva() {
    if (isNaN(oxi)) {
        i++;
        oxi = text.charAt(oxi_id + i);
        recursiva();
    }
    else {
        return oxi;
    }
}

function VM(palabra, n) {
    return palabra.charAt(n) === palabra.charAt(n).toUpperCase()
}
function element() {
    while (text.length > i) {
        o = text.charAt(i);
        m = text.charAt(i + 1);

        if (VM(o, 0) && o != "O" && isNaN(o)) {
            noMetal_beta = o;
            noMetal_id = i;
            console.log(noMetal_beta)
            if (VM(m, 0) == false && m != "(" && m != ")" && m != "" && m != " ") {
                noMetal_beta = o + m;
                noMetal_id = i + 1;
            }
            break;
        }
        else {
            noMetal_beta = "";
        }
        i++;
    }
}

function oxidoN(elemento) {
    switch (elemento) {
        case "": elemento = "mono";
            break;
        case "2": elemento = "di";
            break;
        case "3": elemento = "tri";
            break;
        case "4": elemento = "tetra";
            break;
        case "5": elemento = "penta";
            break;
        case "6": elemento = "hexa";
            break;
        case "7": elemento = "hepta";
            break;
        case "8": elemento = "octa";
            break;
        case "9": elemento = "nona";
            break;
        case "10": elemento = "deca";
            break;
        default: elemento = "";
            break;
    };
    return elemento;
}
function oxidoNR(elemento) {
    switch (elemento) {
        case "2": elemento = "II";
            break;
        case "3": elemento = "III";
            break;
        case "4": elemento = "IV";
            break;
        case "5": elemento = "V";
            break;
        case "6": elemento = "VI";
            break;
        case "7": elemento = "VII";
            break;
        case "8": elemento = "VIII"
            break;
        case "9": elemento = "IX"
            break;
        case "10": elemento = "X"
            break;
        default: elemento = "I";
            break;
    };
    return elemento;
}
function ONMN(elemento) {
    switch (elemento) {
        case "": elemento = "";
            break;
        case "2": elemento = "di";
            break;
        case "3": elemento = "tri";
            break;
        case "4": elemento = "tetra";
            break;
        case "5": elemento = "penta";
            break;
        case "6": elemento = "hexa";
            break;
        case "7": elemento = "hepta";
            break;
        case "8": elemento = "octa";
            break;
        case "9": elemento = "nona";
            break;
        case "10": elemento = "deca";
            break;
        default: elemento = "";
            break;
    };
    return elemento;
}

async function datos(simbolo) {
    const response = await fetch("http://127.0.0.1:5500/Tabla%20periodica/JSON/pruebas.json");
    const json = await response.json();
    promise = eval(simbolo);
    return promise;
};

async function nameMetal() {
    simbolo_beta = `json.${noMetal_beta}.nombre`;
    noMetal = await datos(simbolo_beta);
    console.log(noMetal);
    noMetal = noMetal.toLowerCase();
    
    sistematica = `${oxi}oxido de ${ONM}${noMetal}`;
    stock = `oxido de ${noMetal} (${oxiR})`;
    console.log(sistematica);
    console.log(stock);

    write();
};


function write() {
    formula_text.innerHTML = text;
    sistematica_ID.innerHTML = sistematica;
    stock_ID.innerHTML = stock;
    tradicional_ID.innerHTML = tradicional_text.value;
}