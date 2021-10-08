<html lang="en" >
<head>
  <meta charset="UTF-8">
  <title>potVolCalculator</title>
  <meta name="viewport" content="width=device-width, initial-scale=1"><link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.0.2/css/bootstrap.min.css'><link rel="stylesheet" href="./style.css">

</head>
<body>
<!-- partial:index.partial.html -->
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
      <button onclick="calcRoundPotVol()" class="btn btn-primary" style="margin-botton: 1rem;">Calcular</button>
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
      <button onclick="calcSquarePotVol()" class="btn btn-primary" style="margin-botton: 1rem;">Calcular</button>
    </div>
    <div class="card-footer">
      <label for="displaySquareResult">Resultado</label>
      <input class="form-control" id="displaySquareResult" readonly>
    </div>
  </div>
</div>
<!-- partial -->
  <script src='https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.1.2/js/bootstrap.min.js'></script>
<script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js'></script><script  src="./script.js"></script>

</body>
</html>
