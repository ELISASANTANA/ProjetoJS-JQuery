//Função validarFormulario vinculada ao botão de Enviar o formulário. Os campos que estiverem com o preenchimento incorreto exibirão um Alert para que sejam corrigidos. 
function validarFormulario() {
    //If para verificar se o campo nome do formulário está vazio ou com ao menos três caracteres.
    if (document.cadastro.nome.value.length < 3) {
        //Caixa trazendo a informação de que o campo não foi preenchido corretamente.
        alert("Nome não informado!");
        //Focus para setar para a caixa de texto que não foi preenchida corretamente.
        document.cadastro.nome.focus();
        //Sem o return false, entra numa repetição de caixa de alert e perde a função do focus.
        return false;
    }

    //Para a validação do sobrenome, e-mail, telefone e mensagem, se aplicam os mesmos comentários usados para a validação do nome.

    if (document.cadastro.sobrenome.value == "" || document.cadastro.sobrenome.value.length < 3) {
        alert("Sobrenome não informado!");
    document.cadastro.sobrenome.focus();
    return false;
}

if (document.cadastro.email.value == "" || document.cadastro.email.value.length < 3) {
    alert("E-mail não informado!");
    document.cadastro.email.focus();
    return false;
}

//Definidas a idade mínima e máxima que deve ser preenchida na data de nascimento do formulário, no padrão internacional YYYY-MM-DD. 
let dataMax = "2021-03-16"
let dataMin = "1891-03-16"
//If para verificar se o campo data de nascimento do formulário está vazio ou com data posterior à data máxima limite de "2021-03-16".
if (document.cadastro.dataNascimento.value == "" || document.cadastro.dataNascimento.value > dataMax) {
    //Caixa trazendo a informação de que o campo não foi preenchido corretamente.
    alert("Data de nascimento inválida! Selecione uma data entre 16/03/1891 a 16/03/2021.");
    //Focus para setar para a campo que não foi preenchida corretamente.
    document.cadastro.dataNascimento.focus();
    //Sem o return false, entra numa repetição de caixa de alert e perde a função do focus.
    return false;
    //Else if para verificar se o campo data de nascimento do formulário está com data anterior à data mínima limite de "1891-03-16".
} else if (document.cadastro.dataNascimento.value < dataMin) {
    //Caixa trazendo a informação de que o campo não foi preenchido corretamente.
    alert("Data de nascimento inválida! Selecione uma data entre 16/03/1891 a 16/03/2021.");
    //Focus para setar para a campo que não foi preenchida corretamente.
    document.cadastro.dataNascimento.focus();
    //Sem o return false, entra numa repetição de caixa de alert e perde a função do focus.
    return false;
}

if (document.cadastro.telefone.value == "" || document.cadastro.telefone.value.length < 10) {
    alert("Telefone não informado!");
    document.cadastro.telefone.focus();
    return false;
}

if (document.cadastro.celular.value == "" || document.cadastro.celular.value.length < 11) {
    alert("Celular não informado!");
    document.cadastro.celular.focus();
    return false;
}

if (document.cadastro.mensagem.value == "" || document.cadastro.mensagem.value.length < 3) {
    alert("Preencha o campo mensagem!");
    document.cadastro.mensagem.focus();
    return false;
}

//Início da verificação do CPF. Caso o campo esteja vazio ou apresente algum erro, gera o Alert de CPF ínválido.
if (vercpf(document.cadastro.cpf.value)) {
    document.cadastro} else {
    errors = "1"; if (errors) alert('CPF INVÁLIDO!');
    document.retorno = (errors == '');
}
//Varificar se o número do CPF inserido está sendo uma sequência numérica repetida. Caso esteja, o CPF é inválido. 
function vercpf(cpf) {
    if (cpf.length != 11 || cpf == "00000000000" || cpf == "11111111111" || cpf == "22222222222" || cpf == "33333333333" || cpf == "44444444444" || cpf == "55555555555" || cpf == "66666666666" || cpf == "77777777777" || cpf == "88888888888" || cpf == "99999999999")
        return false;
    add = 0;
    //Validação dos caracteres do CPF.
    for (i = 0; i < 9; i++)
        add += parseInt(cpf.charAt(i)) * (10 - i);
    rev = 11 - (add % 11);
    if (rev == 10 || rev == 11)
        rev = 0;
    if (rev != parseInt(cpf.charAt(9)))
        return false;
    add = 0;
    for (i = 0; i < 10; i++)
        add += parseInt(cpf.charAt(i)) * (11 - i);
    rev = 11 - (add % 11);
    if (rev == 10 || rev == 11)
        rev = 0;
    if (rev != parseInt(cpf.charAt(10)))
        return false;
    alert('O CPF informado é válido!'); return true;
}

//Usado let para para declarar as variáveis caixa, nome, e-mail e CPF em escopo de bloco e chamar uma caixa de mensagem. 
let caixa = document.getElementById("caixaAcesso");
//Definição do estilo da caixa de mensagem com as informações de login e senha do usuário.
caixa.style.display = "block";
let nome = document.getElementById("nome").value
let email = document.getElementById("email").value
let cpf = document.getElementById("cpf").value
//Concatenei a frase que deve ser exibida na caixa de mesagem.
document.getElementById("mensagemCaixa").innerHTML = ("Olá, " + nome + "! Seu login é o seu e-mail: " + email + " e a sua senha é o seu CPF: " + cpf);

//Alert chamado para confirmar a validação das informações e envio do relatório.
alert("Cadastro enviado com sucesso!");
}

//Início da função chamada para validar o CEP. Usado const para garantir que a varável será inicializada com um determinado valor. 
const apresentaDados = (resultado) => {
    for (let campo in resultado) {
        if (document.querySelector("#" + campo)) {
            console.log(campo);
            document.querySelector("#" + campo).value = resultado[campo];
        }
    }
}
//Função chamada para validar o CEP utilizando a API viacep
function consultaCep() {
    let cepDigitado = document.getElementById("cep");
    //If para verificar se o campo CEP está vazio, se estive a  borda ficará vermelha.
    if (cepDigitado.value == "") {
        cepDigitado.style.border = "1px solid red";
    } else {
        let cepProcurado = cepDigitado.value.replace("-", "");
        console.log(cepProcurado);
        //A API fetch permite buscar um CEP na página viacep. Json retorna as informações do CEP procurado
        fetch(`http://viacep.com.br/ws/${cepProcurado}/json/`)
            .then(response => {
                response.json()
                    .then(data => console.log(apresentaDados(data)))
            })
            .catch(x => console.log("CEP não encontrado"))
    }
}

//Função para fechar a caixa de mensagem com as informações de login e senha.
function fecharJanela() {
    let caixa = document.getElementById("caixaAcesso");
    caixa.style.display = "none";

}
