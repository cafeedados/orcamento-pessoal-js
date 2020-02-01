class Despesas {
    constructor(ano, mes, dia, tipo, descricao, valor){
        this.ano = ano;
        this.mes = mes;
        this.dia = dia;
        this.tipo = tipo;
        this.descricao = descricao;
        this.valor = valor;
    }

    validarDados(){
        for(let i in this){
            //vai recuperar os atributos [] como fosse a notacao ponto exemplo i.ano
            if(this[i] == undefined || this[i] == '' || this[i] == null){
                return false;

            }

        }
        return true;

    }

};

class BD {

    constructor(){
        let id = localStorage.getItem('id')

        if(id === null){
            localStorage.setItem('id',0)
            //passando que o id comeca em zero
        }

    }

    getProximoID(){
        let proximoID = localStorage.getItem('id')
        //getitem serve para pegar

        return parseInt(proximoID) + 1 //retornar o valor

    }

    gravar(d){

        //setitem serve para armazenar 
        let id = this.getProximoID(); //chamando com this pq e um obejto do proprio objteo

        localStorage.setItem(id, JSON.stringify(d))

        localStorage.setItem('id', id)

    }

    recuperarTodosRegistros(){

    let despesas = []; //criando um array de despesas

       let id = localStorage.getItem('id'); 
       
       /**
        * para cada item recuperado do id partindo de um
        * ira incrementar ate quando a variavel i for menor ou igual ao id.
        */
       for(let i = 1; i<= id; i++){

        //recuperar a despesa onvertendo o json para um objeto literal
        let despesa =  JSON.parse(localStorage.getItem(i))

        //verificar se existem indices pulados ou removidos
        if (despesa === null){
            continue
        }

        despesas.push(despesa)
        

       }
     
       return despesas;
    }

    pesquisar(despesa) {

        let despesasFiltradas = []
        despesasFiltradas = this.recuperarTodosRegistros();


        /*metodo gilter nao atua no array original para atualizar o array original devemos
         sobrepor o array original com a info atualizada
         */
        //ano
        if(despesa.ano != ''){
         despesasFiltradas = despesasFiltradas.filter(d => d.ano == despesa.ano) 

        }
        
        //mes
        if(despesa.mes != ''){
            despesasFiltradas = despesasFiltradas.filter(d => d.mes == despesa.mes)
   
        }

        //dia
        if(despesa.dia != ''){
            despesasFiltradas = despesasFiltradas.filter(d => d.dia == despesa.dia)
   
        }

        //tipo
        if(despesa.tipo != ''){
            despesasFiltradas = despesasFiltradas.filter(d => d.tipo == despesa.tipo)
   
        }
        
        //descricao
        if(despesa.descricao != ''){
            despesasFiltradas = despesasFiltradas.filter(d => d.descricao == despesa.descricao)
   
        }

        return despesasFiltradas
    }


}

let bd = new BD()



function cadastrarDespesa() {
    let ano = document.getElementById('ano');
    let mes = document.getElementById('mes');
    let dia = document.getElementById('dia');
    let tipo = document.getElementById('tipo');
    let descricao = document.getElementById('descricao');
    let valor = document.getElementById('valor');

    let despesas = new Despesas(
        ano.value,
        mes.value,
        dia.value,
        tipo.value,
        descricao.value,
        valor.value
    );

    if (despesas.validarDados()) {
        //dialog de sucesso
        //onde chama a funcao gravar, vamos chamar o objeto e executrar o objeto despesa
        bd.gravar(despesas)
        // Texto do botao com inner HTML
        document.getElementById('modal_titulo').innerHTML = 'Sucesso';
        document.getElementById('modeal_texto').innerHTML = 'Despesa cadastrada com sucesso :)'
        document.getElementById('modal_botao').innerHTML = 'Voltar'

        //Estilo
        document.getElementById('modal_botao').className = 'btn btn-success';
        document.getElementById('modal_divTitulo').className = 'modal-header text-success';


        //limpando os campos
        document.getElementById('ano').value = '';
        document.getElementById('mes').value = '';
        document.getElementById('dia').value = '';
        document.getElementById('tipo').value = '';
        document.getElementById('descricao').value = '';
        document.getElementById('valor').value = '';

        $('#modalRegistroDespesas').modal('show')
        console.log('dados validos')
    } else {
        //dialog de erro
        // Texto do botao com inner HTML
        document.getElementById('modal_titulo').innerHTML = 'Error na inclusao do registro';
        document.getElementById('modeal_texto').innerHTML = 'Campos invalidos, ou digitados incorretamente'
        document.getElementById('modal_botao').innerHTML = 'Voltar e Corrigir'
        //Estilo
        document.getElementById('modal_botao').className = 'btn btn-danger';
        document.getElementById('modal_divTitulo').className = 'modal-header text-danger';

        //chamando o modal
        $('#modalRegistroDespesas').modal('show')
        console.log('Dados invalodos')

    }
}




 //sempre que o evendo onload carregar no body do html consulta
function carregaListaDespesas(despesas = [], filtro = false){ //filtro = a false significa que nao e um filtro valido
     
    //ou seja se nao tiver nada no carregamento ele carrega todas as despesas
    if(despesas.length == 0 && filtro == false){ 
        despesas =  bd.recuperarTodosRegistros()

    } // se nao for igual a zero significa que o array despesas possui valor 
    // e que esses valores deverao ser mostrados

   
     
    //selecionando elemento tbody
    let listaDespesas = document.getElementById('listas_despesas')
    listaDespesas.innerHTML = ''

    //percorrer o array despesas, listando cada despesas dinamica

    despesas.forEach(function(d){
        console.log(d)

         //criando linhas (tr)
         let linha = listaDespesas.insertRow()

         //criar as colunas {td}
         linha.insertCell(0).innerHTML = `${d.dia}/${d.mes}/${d.ano}`
         
         //ajustar o tipo ja que ele chega como um numero
         switch(parseInt(d.tipo)){
             case 1: d.tipo = 'Alimentacao'
                break
            case 2: d.tipo = 'Educacao'
                break
            case 3: d.tipo = 'Lazer'
                break
            case 4: d.tipo = 'Saude'
                break
            case 5: d.tipo = 'Transporte'
                break
         }
         linha.insertCell(1).innerHTML = d.tipo;

         linha.insertCell(2).innerHTML = d.descricao;
         linha.insertCell(3).innerHTML = d.valor;
    })

   

}


function pesquisarDespesa(){
    console.log('teste')
    let ano = document.getElementById('ano').value;
    let mes = document.getElementById('mes').value;
    let dia = document.getElementById('dia').value;
    let tipo = document.getElementById('tipo').value;
    let descricao = document.getElementById('descricao').value;
    let valor = document.getElementById('valor').value;
    
    let despesa = new Despesas(ano, mes, dia, tipo, descricao, valor)

    let despesas =  bd.pesquisar(despesa);
    
   this.carregaListaDespesas(despesas, true) //indicando que o parametro e verdadeiro para enviar para funcao

   
}

