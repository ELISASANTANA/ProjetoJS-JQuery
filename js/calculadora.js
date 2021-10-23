// alert("oi")

$('#soma').click(function(){
    let v1 = $('#valor1').prop('value');
    let v2 = $('#valor2').val();
    // convertendo os numeros para o tipo float 
    // parseInt:: numeros inteiros, parseFloat,
    let soma = parseFloat(v1) + parseFloat(v2);
 
    $('#resposta').append('<p id="answer"> A soma é: ' + soma + '</p>').fadeIn(2000);
 })

// para limpar os campos 
$('#limpar').click(function(){ 
    $('input').val('');
 
    $('#resposta').hide();
    $('#answer').remove();
 })