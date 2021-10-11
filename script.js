let roundPotHeightInput =  document.getElementById('roundPotHeightInput');
let roundPotDiameterSupInput =  document.getElementById('roundPotDiameterSupInput');
let roundPotDiameterInfInput =  document.getElementById('roundPotDiameterInfInput');

let squarePotHeightInput =  document.getElementById('squarePotHeightInput');
let squarePotSupInput =  document.getElementById('squarePotSupInput');
let squarePotInfInput =  document.getElementById('squarePotInfInput');

function calcRoundPotVol(){
  if(roundPotHeightInput.value && roundPotDiameterSupInput.value && roundPotDiameterInfInput.value){
    let h = Number(roundPotHeightInput.value);
    let dS  = Number(roundPotDiameterSupInput.value);
    let dI = Number(roundPotDiameterInfInput.value);
    
    const pi = Math.PI;
    const med = (dS + dI) / 2;
    const diam = (med / 2);
    let vol = (((diam * diam) * pi) * h) * 0.001;
    vol = Math.round(vol * 10.0) / 10.0;
    
    document.getElementById("displayRoundResult").placeholder = vol + ' Litros';
  }else
  numberInvalidAlert();
  
}

function calcSquarePotVol() {
  if(squarePotHeightInput.value && squarePotSupInput.value && squarePotInfInput.value){
    let h = Number(squarePotHeightInput.value);
    let lS  = Number(squarePotSupInput.value);
    let lI = Number(squarePotInfInput.value);
    
    const med = (lS + lI) / 2;
    let vol = ((med * med) * h) * 0.001;
    vol = Math.round(vol * 10.0) / 10.0;
    
    document.getElementById("displaySquareResult").placeholder = vol + ' Litros';
  }else
  numberInvalidAlert();
}

function clearInputs(input1, input2, input3) {
  input1.value = null;
  input2.value = null;
  input3.value = null;
}

function numberInvalidAlert(){
  window.alert('Insira numeros válidos!')
}