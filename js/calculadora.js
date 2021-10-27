// CALCULADORA SIMPLES
// array que guardar os botoes clicados
var resultado = [];

var d;
var e;
var f;

//eventos para que no momento do clique print na tela html

$('.limpar').on('click', function () {
    resultado.splice(0);
    $('#tela').empty();
});

$('#1').on('click', function () {
    resultado.push(1);
    $('#tela').html(resultado);
});

$('#2').on('click', function () {
    resultado.push(2);
    $('#tela').html(resultado);
});

$('#3').on('click', function () {
    resultado.push(3);
    $('#tela').html(resultado);
});

$('#4').on('click', function () {
    resultado.push(4);
    $('#tela').html(resultado);
});

$('#5').on('click', function () {
    resultado.push(5);
    $('#tela').html(resultado);
});

$('#6').on('click', function () {
    resultado.push(6);
    $('#tela').html(resultado);
});

$('#7').on('click', function () {
    resultado.push(7);
    $('#tela').html(resultado);
});

$('#8').on('click', function () {
    resultado.push(8);
    $('#tela').html(resultado);
});

$('#9').on('click', function () {
    resultado.push(9);
    $('#tela').html(resultado);
});

$('#0').on('click', function () {
    resultado.push(0);
    console.log();
    $('#tela').html(resultado);
});

$('#decimal').on('click', function () {
    resultado.push('.');
    $('#tela').html(resultado);
})


function calcular() {
    resultado.forEach(function (elemento, index) {

        if (isNaN(parseInt(elemento)) && elemento != "." && index != resultado.length - 1) {

            d = resultado.splice(0, index).join("");
            e = resultado.splice(1, resultado.length - 2).join("");

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

function vazia() {
    if (parseFloat(f) != 0 && resultado.length == 0) {
        resultado[0] = f;
    }
}

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

            if(elemento == "x^3"){
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

$('#trocaCalc').click(function(){
    $('#tela, #simples').show();
    $('#input, #cientifica').hide();
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
    $('#input, #cientifica').show();
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

