<html lang="en" >
  <head>
    <link href="css/all.css" rel="stylesheet"> <!--load all styles -->
    <meta charset="UTF-8">
    <title>potVolCalculator</title>
    <meta name="viewport" content="width=device-width, initial-scale=1"><link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.0.2/css/bootstrap.min.css'><link rel="stylesheet" href="./style.css">

  </head>
  <body>
  <!-- partial:index.partial.html -->
  <div class="container">
    
    <nav aria-label="breadcrumb" class="marginator">
      <ol class="breadcrumb">
        <li class="breadcrumb-item active" aria-current="page">Calcule o volume do seu vaso de plantas em litros</li>
        <i class="fas fa-seedling icon"></i>
      </ol>
    </nav>
  
    <div class="card marginator">
      <div class="card-header">
        <h5 class="card-title">Área do vaso circular</h5>
      </div>
      <div id="roundPotForm" class="card-body">
        <div class="form-group">
          <div>
            <label for="roundPotHeightInput">Insira a altura (cm)</label>
          </div>
         
          <input type="number" min="1" class="form-control" id="roundPotHeightInput"/>
        </div>
        <div class="form-group">
          <label for="roundPotDiameterSupInput">Insira o diametro do topo (cm)</label>
          <input type="number" class="form-control" id="roundPotDiameterSupInput"/>
        </div>
        <div class="form-group">
          <label for="roundPotDiameterInfInput">Insira o diametro da base (cm)</label>
          <input type="number" class="form-control" id="roundPotDiameterInfInput">
        </div>
        <button onclick="calcRoundPotVol()" class="btn btn-success" style="margin-top: 1rem;">Calcular</button>
        <button onclick="clearInputs(roundPotHeightInput, roundPotDiameterSupInput, roundPotDiameterInfInput)" class="btn btn-warning" style="margin-top: 1rem;">Limpar</button>
      </div>
      <div class="card-footer">
        <label for="displayRoundResult">Resultado</label>
        <input type="number" class="form-control" id="displayRoundResult" readonly>
      </div>
    </div>
      
    <div class="card marginator">
      <div class="card-header">
        <h5 class="card-title">Área do vaso quadrado</h5>
      </div>
      <div id="squarePotForm" class="card-body">
        <div class="form-group">
          <label for="squarePotHeightInput">Insira a altura (cm)</label>
          <input type="number" class="form-control" id="squarePotHeightInput"/>
        </div>
        <div class="form-group">
          <label for="squarePotSupInput">Insira o lado superior (cm)</label>
          <input type="number" class="form-control" id="squarePotSupInput"/>
        </div>
        <div class="form-group">
          <label for="squarePotInfInput">Insira o lado inferior (cm)</label>
          <input type="number" class="form-control" id="squarePotInfInput"/>
        </div>
        <button onclick="calcSquarePotVol()" class="btn btn-success" style="margin-top: 1rem;">Calcular</button>
        <button onclick="clearInputs(squarePotHeightInput, squarePotSupInput, squarePotInfInput)" class="btn btn-warning" style="margin-top: 1rem;">Limpar</button>
      </div>
      <div class="card-footer">
        <label for="displaySquareResult">Resultado</label>
        <input type="number" class="form-control" id="displaySquareResult" readonly>
      </div>
    </div>
  </div>
  <!-- partial -->
    <script src='https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.1.2/js/bootstrap.min.js'></script>
    <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js'></script><script  src="./script.js"></script>

  </body>
</html>
