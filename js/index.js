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
  // alert("nome pesquisado: [" + nomeEvento +"]");
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

document.getElementById("btn-pesquisarNome").addEventListener("click", getEventoByNome);
document.getElementById("nomeEvento").addEventListener("keyup", getEventoByNome);
