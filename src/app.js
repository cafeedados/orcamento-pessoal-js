class Despesas {
    constructor(ano, mes, dia, tipo, descricao, valor){
        this.ano = ano;
        this.mes = mes;
        this.dia = dia;
        this.tipo = tipo ;
        this.descricao = descricao;
        this.valor = valor;
    }

}




function cadastrarDespesa(){
   let ano = document.getElementById('ano');
   let mes =  document.getElementById('mes');
   let dia =  document.getElementById('dia');
   let tipo =  document.getElementById('tipo');
   let descricao =  document.getElementById('descricao');
   let valor =  document.getElementById('valor');

   let despesas = new Despesas(
    ano.value,  
    mes.value,  
    dia.value,  
    tipo.value,   
    descricao.value,   
    valor.value 
    );

    gravar(despesas)
  
}



/**
 * 
 * No local storage temos o setitem que permite passar dois parametros, o primeiro 
 * parametro e a identificacao do objeto que vamos armazenar, e o segundo e o dado que
 * queremos armazenar. Sendo que esse dado ele precisa ser encaminhado com uma notacao JSON
 * e como estamos trabalhando com objetos literais devemos converter ele para uma notacao JSON
 * para converter podemos usar o objeto nativo do JS chamado JSON 
 */

function gravar(d){
    localStorage.setItem('despesa', JSON.stringify(d)) //como colocamos o setItem sempre que preencher ele ira sobreescrever o item anterior
}