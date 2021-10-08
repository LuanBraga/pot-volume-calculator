<style>
    .marginator {
        margin: 1rem;
    }
</style>


<div class="container">
  
  <nav aria-label="breadcrumb" class="marginator">
    <ol class="breadcrumb">
      <li class="breadcrumb-item active" aria-current="page">Pot Volume Calculator</li>
    </ol>
  </nav>
 
  <div class="card marginator">
    <div class="card-header">
      <h5 class="card-title">Área do vaso circular</h5>
    </div>
    <div class="card-body">
      <div class="form-group">
        <label for="roundPotHeightSelect">Insira a altura (cm)</label>
        <input class="form-control" id="roundPotHeightSelect"/>
      </div>
      <div class="form-group">
        <label for="roundPotDiameterSupSelect">Insira o diametro do topo (cm)</label>
        <input class="form-control" id="roundPotDiameterSupSelect"/>
      </div>
      <div class="form-group">
        <label for="roundPotDiameterInfSelect">Insira o diametro da base (cm)</label>
        <input class="form-control" id="roundPotDiameterInfSelect">
      </div>
      <button onclick="calcRoundPotVol()" class="btn btn-primary marginator">Calcular</button>
    </div>
    <div class="card-footer">
      <label for="displayRoundResult">Resultado</label>
      <input class="form-control" id="displayRoundResult" readonly>
    </div>
  </div>
    
  <div class="card marginator">
    <div class="card-header">
      <h5 class="card-title">Área do vaso quadrado</h5>
    </div>
    <div class="card-body">
      <div class="form-group">
        <label for="squarePotHeightSelect">Insira a altura (cm)</label>
        <input class="form-control" id="squarePotHeightSelect"/>
      </div>
      <div class="form-group">
        <label for="squarePotSupSelect">Insira o lado superior (cm)</label>
        <input class="form-control" id="squarePotSupSelect"/>
      </div>
      <div class="form-group">
        <label for="squarePotInfSelect">Insira o lado inferior (cm)</label>
        <input class="form-control" id="squarePotInfSelect"/>
      </div>
      <button onclick="calcSquarePotVol()" class="btn btn-primary marginator">Calcular</button>
    </div>
    <div class="card-footer">
      <label for="displaySquareResult">Resultado</label>
      <input class="form-control" id="displaySquareResult" readonly>
    </div>
  </div>
</div>

<script>
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
</script>