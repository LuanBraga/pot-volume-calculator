let roundPotHeightSelect =  document.getElementById('roundPotHeightSelect');
let roundPotDiameterSupSelect =  document.getElementById('roundPotDiameterSupSelect');
let roundPotDiameterInfSelect =  document.getElementById('roundPotDiameterInfSelect');

let squarePotHeightSelect =  document.getElementById('squarePotHeightSelect');
let squarePotSupSelect =  document.getElementById('squarePotSupSelect');
let squarePotInfSelect =  document.getElementById('squarePotInfSelect');

function calcRoundPotVol(){
  let h = Number(roundPotHeightSelect.value);
  let dS  = Number(roundPotDiameterSupSelect.value);
  let dI = Number(roundPotDiameterInfSelect.value);
  
  const pi = Math.PI;
  const med = (dS + dI) / 2;
  const diam = (med / 2);
  let vol = (((diam * diam) * pi) * h) * 0.001;
  vol = Math.round(vol * 10.0) / 10.0;
  
  document.getElementById("displayRoundResult").placeholder = vol + ' Litros';
}

function calcSquarePotVol() {
  let h = Number(squarePotHeightSelect.value);
  let lS  = Number(squarePotSupSelect.value);
  let lI = Number(squarePotInfSelect.value);
  
  const med = (lS + lI) / 2;
  let vol = ((med * med) * h) * 0.001;
  vol = Math.round(vol * 10.0) / 10.0;
  
  document.getElementById("displaySquareResult").placeholder = vol + ' Litros';
}