var text = "I2O5";
i = 1;
oxi_id = text.indexOf("O");
oxi = text.charAt(oxi_id+i);

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