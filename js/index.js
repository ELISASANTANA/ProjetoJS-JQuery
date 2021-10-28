// chamei jquery pelo id sdministrativo par o evento mouseover
$("#administrativo").mouseover(function(){
    //qndo passar o mouse em cima da foto aparecea
   // caixa de texto
    $("[name=administrativo]").show(800)
}).mouseout(function(){
    // jquery hide esconde a caixa de texto em 500 ms
    $("[name=administrativo]").hide(500)
})
//segue fazendo igual para todos membros da equipe 
$("#arquitetura").mouseover(function(){
    $("[name=arquitetura]").show(800)
}).mouseout(function(){
    $("[name=arquitetura]").hide(500)
})

$("#marketing").mouseover(function(){
    $("[name=marketing]").show(800)
}).mouseout(function(){
    $("[name=marketing]").hide(500)
})
$("#comercial").mouseover(function(){
    $("[name=comercial]").show(800)
}).mouseout(function(){
    $("[name=comercial]").hide(500)
})