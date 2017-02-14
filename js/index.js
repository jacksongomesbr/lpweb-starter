var eventos = [
  {id:'1', nome:'XIX Congresso de Computação e Sistemas de Informação - ENCOINFO 2017', dataInicio:'06/02/2017', dataFim:'10/02/2017'},
  {id:'2', nome:'XIII Simpósio Brasileiro de Sistemas de Informação - SBSI', dataInicio:'07/02/2017', dataFim:'11/02/2017'},
  {id:'3', nome:'XXXVII Congresso da Sociedade Brasileira de Computação - CSBC', dataInicio:'08/02/2017', dataFim:'12/02/2017'},
  {id:'4', nome:'Mister Catra - Live Reive', dataInicio:'20/02/2017', dataFim:'26/02/2017'},
  {id:'5', nome:'Showzaço do Cleyton Rasta - Bora Debochar', dataInicio:'20/03/2017', dataFim:'20/08/2017'}
			];

function mostrarEventos() {
	// cria variavel table, seu valor é o elemento do html que tiver o ID 'tabela-eventos'
	var table = document.getElementById('tabela-eventos');
	// percorre todos os eventos cadastrados (aqui eventos é uma variável global)
	for(var i = 0; i < eventos.length; i++) {
		
		var evento = eventos[i];
		// atributo recebe um array com os atributos do evento
		var atributo = Object.keys(evento);
		// crio uma tr (table row)
		var tr = document.createElement('tr');
		
		// for que percorre o array de atributos
		for(var j = 0; j < atributo.length; j++){
			
			// criei uma célula de tabela
			var td = document.createElement('td');
			// valor dessa célula = atributo na posição J
			td.innerHTML = evento[atributo[j]];
			// concatenei o valor de td na minha linha
			tr.append(td);
		} //  ao final de cada iteração deste for, teremos adicionado uma linha à tabela
		table.append(tr);
		// concatenei o tr (a linha de tabela) à minha tabela
	}
	// ao final deste for, terei percorrido todos os elementos do ArrayList eventos
}

function pesquisarTabela() {
	// Declaração de variáveis 
	var input, filter, table, tr, td, i;
	// variael input receberá o valor do campo do documento html que possui o id 'entradaPesquisa'
	input = document.getElementById("entradaPesquisa");
	// variavel filter recebera o VALOR do campo input (nessa parte ele recebe o texto contido no campo) 
	filter = input.value.toUpperCase();
	// cria variavel table, seu valor é o elemento do html que tiver o ID 'tabela-eventos'
	table = document.getElementById("tabela-eventos");
	// cria array tr (linha de tabela), seu valor são os elementos do html que tiverem o tipo 'tr'
	tr = table.getElementsByTagName("tr");
	
	// for que percorrerá todos os elementos do array tr
		for (i = 0; i < tr.length; i++) {
		
		// pega o segundo td do tr[i] (esse TD contém o nome dos negocios)
		td = tr[i].getElementsByTagName("td")[1];
		// se td não for vazio
		if (td){
			// se o index da palavra pesquisada for maior que -1... (-1 == ñ encontrado)
			if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
				// faz nada
			} else {
				tr[i].remove();
				i = i - 1;
			}
		}
	}
}