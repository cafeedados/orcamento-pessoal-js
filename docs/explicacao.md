# EXPLICACAO DO DESENVOLVIMENTO

### 1. Criacao dos arquivos Index e Consultas

### 2. Recuperar o valos dos campos da pagina Index

1. Colocar o evento Onclick no botao Index
2. Criar uma funcao Cadastrar Despesas
3. Capiturar os dados dos campos com getelementbyid 
   > uma dica que ao inves de colocar o .value no final do get
   > Podemos colocar ele exemplo console.log(ano.value)

### 3. Criando a classe que representa o Objeto Despesa
 1. Criando a class Despesas
 2. Criar um objeto com base na classe utilizando os parametros atribuidos na viw

### 4. Realizar a integracao com o Local Storage

```JavaScript

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


```

















### Explicacao Sobre Web Storage

Os navegadores modernos em geral, tem recursos de armazenamento de dados em geral dentro do proprio browser que podem ser:

**- Local Storage:** Esse tipo de armazenamento quando realizado os dados armazenados eles nao sao anexados na requizicao HTTP, ou seja ficam no navegados de maneira analoga a um banco de dados. E ele suporta uma quantidade maior de dados que o recurso de Cookie. O LOCAL STORAGE e um armazenamento persistente, nos podemos armazenas as informacoes, fechar a instancia do navegador e reiniciar a maquina e os dados irao ficar armazenados a nao ser que eles sejam intencionalmente removidos.

**- Session Storage:** Esse tipo de armazenamento quando realizado os dados armazenados eles nao sao anexados na requizicao HTTP, ou seja ficam no navegados de maneira analoga a um banco de dados. E ele suporta uma quantidade maior de dados que o recurso de Cookie. O SESSION STORAGE Armazena o dado enquanto a sessao ainda esta ativa, ou seja quando fechamos a instancia do navegador todas as informacoes armazenadas sao perdidas.

- IndexdDB: 

- Web SQL:

**- Cookies:** Funcionam como dados que sao armazenados no lado do cliente portanto no browser. E sempre que existe uma requizicao HTTP, ou seja sempre que acessamos determinada pagina os cookies sao anexados a essa requisicao, de forma que o servidor possa extrair esse cookie, analisar e trabalhar a sua logica com base nas informacoes cadastradas no lado do cliente, e apos esse processamento fazer o retorno da requizicao solicitada pelo cliente.

Antes do HTML5 usamos muito o recurso de Cookies, mas apos a criacao dele os browsers em geral passaram a incorporar outros locais de armazenamento de dados.