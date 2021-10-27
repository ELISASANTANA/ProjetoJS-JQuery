// declaração de uma classe com o nome de Produto
class Produto {
  //definição dos atributos da classe
  constructor() {
    this.id = 1
    //this.nome = "";
    this.servico = ''
    //this.valor = 0;
    this.arrayProdutos = []

    //propriedade para testar qual método deve ser executado pelo botão btn1
    this.testeBtn = 0
  }

  // const transacao = {
  //   let despesa = 0;
  //   produto.forEach(transacao =>{
  //     if(transacao.valor < 0) {
  //       despesa = despesa + transacao.valor

  //     }
  //   }
  //     )
  //     return despesa;
  // }

  //salvar o produto digitado pelo usuário no objeto produto
  salvar() {
    //alert("vamos salvar");
    let produto = this.lerDados()

    //chamamos o método para validar o conteúdo dos inputs (somente verificou inputs vazios)
    if (this.validarCampos(produto)) {
      //alert("Podemos salvar");
      if (this.testeBtn == 0) {
        this.adicionar(produto)
      } else {
        this.atualizar(this.testeBtn)
      }
      this.listaDados()
      this.cancelar()
    }
    console.log(this.arrayProdutos)

    //this.cancelar();
  }
  //método para alimentar a tabela com os produtos
  listaDados() {
    // declaração de uma variável para referenciar o tbody da tabela
    let tbody = document.getElementById('tbody')

    // limpar a tabela antes de ser mostrada
    tbody.innerText = ''

    //loop para percorrer o array de Produtos
    for (let i = 0; i < this.arrayProdutos.length; i++) {
      // inserir um nova linha no tbody
      let novaLinha = tbody.insertRow()

      // criar cada coluna(célula) de cada linha
      let td_id = novaLinha.insertCell()
      let td_nome = novaLinha.insertCell()
      let td_servico = novaLinha.insertCell()
      let td_valor = novaLinha.insertCell()
      let td_acoes = novaLinha.insertCell()

      //alimentar as células
      td_id.innerText = this.arrayProdutos[i].id
      td_nome.innerText = this.arrayProdutos[i].nome
      td_servico.innerText = this.arrayProdutos[i].servico
      td_valor.innerText = this.arrayProdutos[i].valor

      //para adiconar uma classe (.center) as colunas
      td_id.classList.add('center')
      td_acoes.classList.add('center')

      // criando um elemento de imagem para ser colocado na quarta coluna da linha
      let imgEdit = document.createElement('img')
      // atribuindo a esse elemento o caminho
      imgEdit.src = 'img/edit.png'
      //adicionando um filho para a quarta coluna
      td_acoes.appendChild(imgEdit)

      // criando um elemento de imagem para ser colocado na quarta coluna da linha
      let imgDelete = document.createElement('img')
      // atribuindo a esse elemento o caminho
      imgDelete.src = 'img/delete.png'
      //adicionando um filho para a quarta coluna
      td_acoes.appendChild(imgDelete)

      //atribuir um método para imgDelete através do setAttribute como os parâmetros: ("evento", método)
      imgDelete.setAttribute(
        'onclick',
        'produto.deletar(' + this.arrayProdutos[i].id + ')'
      )

      //atribuir um método para mostrar os dados do produto selecionado para posterior edição (evento, método)
      imgEdit.setAttribute(
        'onclick',
        'produto.mostrarDados(' + JSON.stringify(this.arrayProdutos[i]) + ')'
      )
    }
  }
  adicionar(produto) {
    this.arrayProdutos.push(produto)
    this.id++
  }
  //método para limpar os inputs
  cancelar() {
    document.getElementById('nomeProduto').value = ''
    document.getElementById('tipoServico').value = ''

    document.getElementById('valorProduto').value = ''
    // voltar a escrita do botão para Salvar
    document.getElementById('btn1').innerText = 'Salvar'
    this.testeBtn = 0
    //alert("vamos cancelar");
  }
  //capturar o que foi digitado pelo usuário nos inputs
  lerDados() {
    let produto = {}

    produto.nome = document.getElementById('nomeProduto').value
    produto.servico = document.getElementById('tipoServico').value

    produto.valor = document.getElementById('valorProduto').value
    produto.id = this.id

    return produto
  }

  //validação dos conteúdos dos inputs (impedindo input vazio)
  validarCampos(produto) {
    let msg = ''
    if (produto.nome == '') {
      msg += '- informe o nome do pacote \n'
    }
    if (produto.servico == '') {
      msg += '- informe o tipo de serviço \n'
    }
    if (produto.valor == '') {
      msg += '- informe o valor do produto \n'
    }
    if (msg != '') {
      alert(msg)
      return false
    }
    return true
  }

  deletar(idProcurado) {
    //alert("Vamos deletar o produto de id: " + idProcurado);
    if (confirm('Deseja realmente deletar o produto de id ' + idProcurado)) {
      for (let i = 0; i < this.arrayProdutos.length; i++) {
        if (this.arrayProdutos[i].id == idProcurado) {
          this.arrayProdutos.splice(i, 1)
          tbody.deleteRow(i)
        }
      }
      // this.arrayProdutos.splice(idProcurado,1);
      // this.listaDados();
    }
  }

  mostrarDados(dados) {
    //alert(dados.id);

    //mostrar as propriedades dos produtos nos inputs
    document.getElementById('nomeProduto').value = dados.nome
    document.getElementById('tipoServico').value = dados.servico

    document.getElementById('valorProduto').value = dados.valor

    //modificar o texto do botão "Salvar"
    document.getElementById('btn1').innerText = 'Atualizar'

    //atribuindo a propriedade testeBtn para o id do produto selecionado
    this.testeBtn = dados.id
  }

  atualizar(id) {
    //alert("Agora vamos atualizar");
    //procurando pelo produto a ser atualizado
    for (let i = 0; i < this.arrayProdutos.length; i++) {
      if (id == this.arrayProdutos[i].id) {
        //atualizando o nome do produto
        this.arrayProdutos[i].nome =
          document.getElementById('nomeProduto').value
        //atualizando o tipo de serviço
        //atualizando o nome do produto
        this.arrayProdutos[i].nome =
          document.getElementById('tipoServico').value
        //atualizando o valor do produto
        this.arrayProdutos[i].valor =
          document.getElementById('valorProduto').value
      }
    }
    //voltando a escrita do botão para "Salvar"
    document.getElementById('btn1').innerText = 'Salvar'
    //voltando a propriedade tesBtn para o modo de Adicionar
    this.testeBtn = 0
  }
}
var produto = new Produto()

//*******************Código para o banner rotativo ***********/

// lista das imagens a serem exibidas
function clicar(){
  
}
