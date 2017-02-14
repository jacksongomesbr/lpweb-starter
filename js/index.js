var eventos = [
  {id : '1', nome:'XIX Congresso de Computação e Sistemas de Informação - ENCOINFO 2017', dataInicio:'06/01/2017', dataFinal:'06/02/2017'},
  {id : '2', nome:'XIII Simpósio Brasileiro de Sistemas de Informação - SBSI', dataInicio:'01/12/2016', dataFinal:'07/12/2016'},
  {id : '3', nome:'XXXVII Congresso da Sociedade Brasileira de Computação - CSBC', dataInicio:'15/02/2017', dataFinal:'20/02/2017'}
];

function mostrarEventos() {
  var tbody = document.getElementById('lista-eventos');

  for(var i = 0; i < eventos.length; i++) {
    var evento = eventos[i];
    var atributosDeEvento = Object.keys(evento);
    var tr = document.createElement('tr');
    tr.className = "eventos-listados";
    for (var j = 0; j < atributosDeEvento.length; j++) {
      var td = document.createElement('td');
      td.innerHTML = evento[atributosDeEvento[j]];
      tr.append(td);
    }
    tbody.append(tr);
  }
}

function getEventoByNome(){
  var nomeEvento = document.getElementById("nomeEvento").value;
  var tbody = document.getElementById('lista-eventos');
  var linhas = document.getElementsByClassName('eventos-listados');
  removerListaEventos(linhas);
  for (var j = 0; j < eventos.length; j++) {
    var evento = eventos[j];
    if(evento.nome.toUpperCase().search(nomeEvento.toUpperCase()) != -1){
      var atributosDeEvento = Object.keys(evento);
      var tr = document.createElement('tr');
      tr.className = "eventos-listados";
      for (var k = 0; k < atributosDeEvento.length; k++) {
        var td = document.createElement('td');
        td.innerHTML = evento[atributosDeEvento[k]];
        tr.append(td);
      }
      tbody.append(tr);
    }
  }
}
function removerListaEventos(linhas){
  for (var i = 0; i < linhas.length; i) { //primeiro eu removo toda a lista de eventos para depois mostar só os que correspondem aos criterios de pesquisa
    linhas[i].remove();
  }
}

function ativarInputDataInicial(){
  document.getElementById("dataInicialEvento").style.display = "initial";
  var btnIr = document.createElement("button");
  var text = document.createTextNode("Ir");
  btnIr.appendChild(text);
  var input =  document.getElementById("dataInicialEvento");
}
function ativarInputDataFinal(){
  document.getElementById("dataFinalEvento").style.display = "initial";
}

function getEventoByDataInicial() {
  var dataInicialPesquisa = document.getElementById("dataInicialEvento").value;
  var diaP =  dataInicialPesquisa.substring(8,10);
  var mesP = dataInicialPesquisa.substring(5,7) - 1;
  var anoP = dataInicialPesquisa.substring(0, 4);

  dataInicialPesquisa = new Date(anoP, mesP, diaP);
  var tbody = document.getElementById('lista-eventos');
  var linhas = document.getElementsByClassName('eventos-listados');
  removerListaEventos(linhas);
  for (var j = 0; j < eventos.length; j++) {
    var evento = eventos[j];
    var dataInicialDoEvento = evento.dataInicio;
    var diaE = dataInicialDoEvento.substring(0,2) ;
    var mesE = dataInicialDoEvento.substring(3,5) - 1;
    var anoE = dataInicialDoEvento.substring(6, 10);

    dataInicialDoEvento = new Date(anoE, mesE, diaE);
    if(dataInicialDoEvento >= dataInicialPesquisa){
      var atributosDeEvento = Object.keys(evento);
      var tr = document.createElement('tr');
      tr.className = "eventos-listados";
      for (var k = 0; k < atributosDeEvento.length; k++) {
        var td = document.createElement('td');
        td.innerHTML = evento[atributosDeEvento[k]];
        tr.append(td);
      }
      tbody.append(tr);
    }
  }
}

function getEventoByDataFinal() {
  var dataFinalPesquisa = document.getElementById("dataFinalEvento").value;
  var diaP =  dataFinalPesquisa.substring(8,10);
  var mesP = dataFinalPesquisa.substring(5,7) - 1;
  var anoP = dataFinalPesquisa.substring(0, 4);

  dataFinalPesquisa = new Date(anoP, mesP, diaP);
  var tbody = document.getElementById('lista-eventos');
  var linhas = document.getElementsByClassName('eventos-listados');
  removerListaEventos(linhas);
  for (var j = 0; j < eventos.length; j++) {
    var evento = eventos[j];
    var dataFinalDoEvento = evento.dataFinal;
    var diaE = dataFinalDoEvento.substring(0,2) ;
    var mesE = dataFinalDoEvento.substring(3,5) -1;
    var anoE = dataFinalDoEvento.substring(6, 10);

    dataFinalDoEvento = new Date(anoE, mesE, diaE);
    if(dataFinalDoEvento <= dataFinalPesquisa){
      var atributosDeEvento = Object.keys(evento);
      var tr = document.createElement('tr');
      tr.className = "eventos-listados";
      for (var k = 0; k < atributosDeEvento.length; k++) {
        var td = document.createElement('td');
        td.innerHTML = evento[atributosDeEvento[k]];
        tr.append(td);
      }
      tbody.append(tr);
    }
  }
}


document.getElementById("btn-pesquisarNome").addEventListener("click", getEventoByNome);
document.getElementById("nomeEvento").addEventListener("keyup", getEventoByNome);

document.getElementById("btn-pesquisarDataInicial").addEventListener("click", ativarInputDataInicial);
document.getElementById("btn-pesquisarDataFinal").addEventListener("click", ativarInputDataFinal);

document.getElementById("dataInicialEvento").addEventListener("change", getEventoByDataInicial);
document.getElementById("dataFinalEvento").addEventListener("change", getEventoByDataFinal);
