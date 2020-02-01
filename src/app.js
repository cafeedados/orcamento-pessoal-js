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



