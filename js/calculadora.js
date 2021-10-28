// JS da página orçamento

// CALCULADORA SIMPLES
// array que guardar os botoes clicados
var resultado = [];

var d;
var e;
var f;

//eventos onclick para que no momento do clique print na tela html

// classe declarada limpar no clique limpa display da calculadora
$('.limpar').on('click', function () {
    // metodo splice remove indices do array*********
    resultado.splice(0);
    $('#tela').empty();
});

// quando o botao de id=1 é pressionado 
$('#1').on('click', function () {
    // no array resultado recebe numero 1
    resultado.push(1);
    // printa no display da calculdadora
    $('#tela').html(resultado);
});

// quando o botao de id=2 é pressionado 
$('#2').on('click', function () {
    // no array resultado recebe numero 2
    resultado.push(2);
    // printa no display da calculdadora
    $('#tela').html(resultado);
});

// quando o botao de id=3 é pressionado 
$('#3').on('click', function () {
    // no array resultado recebe numero 3
    resultado.push(3);
    // printa no display da calculdadora
    $('#tela').html(resultado);
});

// quando o botao de id=4 é pressionado 
$('#4').on('click', function () {
    // no array resultado recebe numero 4 
    resultado.push(4);
    // printa no display da calculdadora
    $('#tela').html(resultado);
});

// quando o botao de id=5 é pressionado 
$('#5').on('click', function () {
    // no array resultado recebe numero 5
    resultado.push(5);
    // printa no display da calculdadora
    $('#tela').html(resultado);
});

// quando o botao de id=6 é pressionado
$('#6').on('click', function () {
    // no array resultado recebe numero 6
    resultado.push(6);
    // printa no display da calculdadora
    $('#tela').html(resultado);
});

// quando o botao de id=7 é pressionado 
$('#7').on('click', function () {
    // no array resultado recebe numero 7
    resultado.push(7);
    // printa no display da calculdadora
    $('#tela').html(resultado);
});

// quando o botao de id=8 é pressionado
$('#8').on('click', function () {
    // no array resultado recebe numero 8
    resultado.push(8);
    // printa no display da calculdadora
    $('#tela').html(resultado);
});

// quando o botao de id=9 é pressionado
$('#9').on('click', function () {
    // no array resultado recebe numero 8
    resultado.push(9);
    //por meio do jquery  printa no display da calculdadora
    $('#tela').html(resultado);
});

// quando o botao de id=0 é pressionado
$('#0').on('click', function () {
    // no array resultado recebe numero 8
    resultado.push(0);
    //por meio do jquery  printa no display da calculdadora
    $('#tela').html(resultado);
});

// quando o botao de id=decimal é pressionado
$('#decimal').on('click', function () {
    // no array resultado recebe .
    resultado.push('.');
    //por meio do jquery  printa no display da calculdadora
    $('#tela').html(resultado);
})

// chama função
function calcular() {
    // forEach percorre o array com a função de parametros elemento e index
    resultado.forEach(function (elemento, index) { 
        // para diferenciar se um elemento é um numero ou um operador matematica se o elemento nao for um numero NAN, covertendo a string em numero e for diferente de decimal(.) 
        if (isNaN(parseInt(elemento)) && elemento != "." && index != resultado.length - 1) {

            // a variável d divide quando indentifica um operador com metodo splice no array resultado cortando as string antes no operador 
                // dois parametros:: a posição inicial, e oq vai ser cortada pelo indice do operador
            // d = guarda numero antes do operador 
            d = resultado.splice(0, index).join("");
            // metodo join para para combinar as string do primeiro numero 1 numero apos operador
            e = resultado.splice(1, resultado.length - 2).join("");

            // if para identificar operador e realizar a operacao
            if (elemento == "+") {
                f = parseFloat(d) + parseFloat(e);
            }

            if (elemento == "-") {
                f = parseFloat(d) - parseFloat(e);
            }

            if (elemento == "x") {
                f = parseFloat(d) * parseFloat(e);
            }

            if (elemento == "/") {
                f = parseFloat(d) / parseFloat(e);
            }

            resultado[0] = f;

            $('#tela').html(f);
        }

    });
}

// se o display estiver vazio e for pressionado o =
function vazia() {
    if (parseFloat(f) != 0 && resultado.length == 0) {
        resultado[0] = f;
    }
}

// atribuindo as fuçoes aos botoes
$('#adicao').on('click', function () {
    vazia();
    resultado.push('+');
    $('#tela').html(resultado);
    calcular();
});

$('#subtracao').on('click', function () {
    vazia();
    resultado.push('-');
    $('#tela').html(resultado);
    calcular();
});

$('#divide').on('click', function () {
    vazia();
    resultado.push('/');
    $('#tela').html(resultado);
    calcular();
});

$('#X').on('click', function () {
    vazia();
    resultado.push('x');
    $('#tela').html(resultado);
    calcular();
});


// Função para retornar o resultado da operação quando usuário clica no (=)
// Função para exibir o resultado da operação
$('#igual').on('click', function () {

    resultado.forEach(function (elemento, index) {
        if (isNaN(parseInt(elemento)) && elemento != ".") {

            d = resultado.splice(0, index).join("");
            e = resultado.splice(1).join("");

            if (elemento == "+") {
                f = parseFloat(d) + parseFloat(e);
            }

            if (elemento == "-") {
                f = parseFloat(d) - parseFloat(e);
            }

            if (elemento == "x") {
                f = parseFloat(d) * parseFloat(e);
            }

            if (elemento == "/") {
                f = parseFloat(d) / parseFloat(e);
            }

            $('#tela').html(f);

            resultado.splice(0);
        }

    });
});



// mesma lógica na primeira calculadora adicionando operações de raiz e potenciação
var result = [];

var a;
var b;
var c;

//eventos para que no momento do clique print na tela html

$('.limpar').on('click', function () {
    result.splice(0);
    $('#input').empty();
});

$('#um').on('click', function () {
    result.push(1);
    $('#input').html(result);
});

$('#dois').on('click', function () {
    result.push(2);
    $('#input').html(result);
});

$('#tres').on('click', function () {
    result.push(3);
    $('#input').html(result);
});

$('#quatro').on('click', function () {
    result.push(4);
    $('#input').html(result);
});

$('#cinco').on('click', function () {
    result.push(5);
    $('#input').html(result);
});

$('#seis').on('click', function () {
    result.push(6);
    $('#input').html(result);
});

$('#sete').on('click', function () {
    result.push(7);
    $('#input').html(result);
});

$('#oito').on('click', function () {
    result.push(8);
    $('#input').html(result);
});

$('#nove').on('click', function () {
    result.push(9);
    $('#input').html(result);
});

$('#zero').on('click', function () {
    result.push(0);
    console.log();
    $('#input').html(result);
});

$('#dec').on('click', function () {
    result.push('.');
    $('#input').html(result);
})

function operacao() {
    result.forEach(function (elemento, index) {

        if (isNaN(parseInt(elemento)) && elemento != "." && index != result.length - 1) {

            a = result.splice(0, index).join("");
            b = result.splice(1, result.length - 2).join("");

            if (elemento == "+") {
                c = parseFloat(a) + parseFloat(b);
            }

            if (elemento == "-") {
                c = parseFloat(a) - parseFloat(b);
            }

            if (elemento == "x") {
                c = parseFloat(a) * parseFloat(b);
            }

            if (elemento == "/") {
                c = parseFloat(a) / parseFloat(b);
            }

            if(elemento == "x^2"){
                c = parseFloat(a) ** parseFloat(0.5);
            }

            if(elemento == "x^3"){
                c = parseFloat(a) ** parseFloat(3);
            }

            if(elemento == "x^0.5"){
                c = parseFloat(a) ** parseFloat(0.5);
            }

            result[0] = c;

            $('#input').html(c);
        }   

    });
}


function empty() {
    if (parseFloat(c) != 0 && result.length == 0) {
        result[0] = c;
    }
}

$('#mais').on('click', function () {
    empty();
    result.push('+');
    $('#input').html(result);
    operacao();
});

$('#menos').on('click', function () {
    empty();
    result.push('-');
    $('#input').html(result);
    operacao();
});

$('#divisao').on('click', function () {
    empty();
    result.push('/');
    $('#input').html(result);
    operacao();
});

$('#multiplicacao').on('click', function () {
    empty();
    result.push('x');
    $('#input').html(result);
    operacao();
});

$('#quadrado').on('click', function () {
    empty();
    result.push('x^2');
    $('#input').html(result);
    operacao();
})

$('#cubo').on('click', function () {
    empty();
    result.push('x^3');
    $('#input').html(result);
    operacao();
})

$('#raiz').on('click', function () {
    empty();
    result.push('x^0.5');
    $('#input').html(result);
    operacao();
})

// Função para retornar o resultado da operação quando usuário clica no (=)

$('#resultado').on('click', function () {

    result.forEach(function (elemento, index) {
        if (isNaN(parseInt(elemento)) && elemento != ".") {

            a = result.splice(0, index).join("");
            b = result.splice(1).join("");

            if (elemento == "+") {
                c = parseFloat(a) + parseFloat(b);
            }

            if (elemento == "-") {
                c = parseFloat(a) - parseFloat(b);
            }

            if (elemento == "x") {
                c = parseFloat(a) * parseFloat(b);
            }

            if (elemento == "/") {
                c = parseFloat(a) / parseFloat(b);
            }

            if(elemento == "x^2"){
                c = parseFloat(a) ** parseFloat(2);
            }

            if(elemento == "x3"){
                c = parseFloat(a) ** parseFloat(3);
            }

            if(elemento == "x^0.5"){
                c = parseFloat(a) ** parseFloat(0.5);
            }

            $('#input').html(c);

            result.splice(0);
        }

    });
});

// evento onclick para trocar as calculadores simples e cientifica
$('#trocaCalc').click(function(){
    // a caculadora simples aparece
    $('#tela, #simples').show();
    // a cientifica esconde
    $('#input, #cientifica').hide();
    // esmaecimento para o botao
    $('#trocaCalc2').fadeTo(400, 0.4);
    $('#trocaCalc').fadeTo(400, 1);
    $('#cientificaBorder').css({
        border: 'none'
    })
    $('#simplesBorder').css({
        border: '2px solid #624378'
    })
})

$('#trocaCalc2').click(function(){
    // a cientifica aparece
    $('#input, #cientifica').show();
    // a caculadora simples desparece
    $('#tela, #simples').hide();
    $('#trocaCalc').fadeTo(400, 0.4);
    $('#trocaCalc2').fadeTo(400, 1);
    $('#cientificaBorder').css({
        border: '2px solid #624378',
        display: 'block'
    })
    $('#simplesBorder').css({
        border: 'none'
    })
})
