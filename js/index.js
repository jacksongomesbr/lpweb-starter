  var eventos = [
    {id:1,inicio:'12-12-2017',termino:'23-12-2017',nome:'XIX Congresso de Computação e Sistemas de Informação - ENCOINFO 2017'},
    {id:2,inicio:'12-12-2017',termino:'23-12-2017',nome:'XIII Simpósio Brasileiro de Sistemas de Informação - SBSI'},
    {id:3,inicio:'12-12-2017',termino:'23-12-2017',nome:'XXXVII Congresso da Sociedade Brasileira de Computação - CSBC'}
  ];

  /**
    ZONA DE TESTES
  */
	
	
	
  /*
    FIM DA ZONA
  */
  
  window.onload = function(){
    mostrarEventos()
    disablePesq();
    verificaMetodoPesq();
  }

  function disablePesq(){
    document.getElementById("pesq-nome").style.display="none";
    document.getElementById("pesq-dataI").style.display="none";
    document.getElementById("pesq-dataT").style.display="none";
  }

  function verificaMetodoPesq(){
    if(document.getElementById("rbt-nome").checked == true){
      disablePesq();
      document.getElementById("pesq-nome").style.display="block";
    }
    else if (document.getElementById("rbt-dataT").checked == true) {
      disablePesq();
      document.getElementById("pesq-dataI").style.display="block";
    }
    else if (document.getElementById("rbt-dataI").checked == true) {
      disablePesq();
      document.getElementById("pesq-dataT").style.display="block";
    }
  }

  function mostrarEventos() {
    var tbody = document.getElementById('lista-eventos');

    for(var i = 0; i < eventos.length; i++) {
      var evento = eventos[i];
      var atrEventos = Object.keys(evento);
      var tr = document.createElement('tr');
      tr.className = "lista";
      for(var j=0;j<atrEventos.length;j++){
        var td = document.createElement('td');
        td.innerHTML = evento[atrEventos[j]];
        tr.append(td);
      }
      tbody.append(tr);
    }
  }

  function pesquisar() {
    var inputContent = document.getElementById('pesquisa').value;
    var tbody = document.getElementById('lista-eventos');
    clear();
    if(inputContent == ''){
      mostrarEventos();
    }
    else{
      clear();
      for(var i = 0; i < eventos.length; i++){
        var evento = eventos[i];
        var atrEventos = Object.keys(evento);
        if(evento.nome.toUpperCase().search(inputContent.toUpperCase()) >= 0){
          var tr = document.createElement('tr');
          tr.className = "lista";
          for(var j=0;j<atrEventos.length;j++){
            var td = document.createElement('td');
            td.innerHTML = evento[atrEventos[j]];
            tr.append(td);
          }
          tbody.append(tr);
        }
      }
    }
  }

  function clear(){
    var tblEventos = document.getElementsByClassName('lista');
    for(var i=0;i<tblEventos.length;i){
      tblEventos[i].remove();
    }
  }
