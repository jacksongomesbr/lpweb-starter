var eventos = [
  {id:'1', nome:'XIX Congresso de Computação e Sistemas de Informação - ENCOINFO 2017', dataInicio:'06/02/2017', dataFim:'10/02/2017'},
  {id:'2', nome:'XIII Simpósio Brasileiro de Sistemas de Informação - SBSI', dataInicio:'07/02/2017', dataFim:'11/02/2017'},
  {id:'3', nome:'XXXVII Congresso da Sociedade Brasileira de Computação - CSBC', dataInicio:'08/02/2017', dataFim:'12/02/2017'}
			];

function mostrarEventos() {
	var table = document.getElementById('tabela-eventos');
	for(var i = 0; i < eventos.length; i++) {
		var evento = eventos[i];
		var atributo = Object.keys(evento);
		var tr = document.createElement('tr');
		for(var j = 0; j < atributo.length; j++){
			var td = document.createElement('td');
			td.innerHTML = evento[atributo[j]];
			tr.append(td);
		}
		table.append(tr);
	}
}

function pesquisarTabela() {
	// Declaração de variáveis 
	var input, filter, table, tr, td, i;
	input = document.getElementById("entradaPesquisa");
	filter = input.value.toUpperCase();
	table = document.getElementById("tabela-eventos");
	tr = table.getElementsByTagName("tr");

	// Percorre as linhas da tabela, e esconde o elementos que não combinam com o que está sendo pesquisado
	for (i = 0; i < tr.length; i++) {
		td = tr[i].getElementsByTagName("td")[1];
		if (td) {
			if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
				tr[i].style.display = "";
			} else {
				tr[i].style.display = "none";
			}
		}
	}
}