function clicar(){

var p1 = window.document.getElementById('selecaoprato1')
var p2 = window.document.getElementById('selecaoprato2')
var pp1 = Number(p1.value)
var pp2 = Number(p2.value)


if (pp1 >=1 && pp1<=5){

     if (pp2 >=6 && pp2<=10) {

        window.alert(`Escolheu como prato principal o nº ${pp1} e como sobremesa o nº ${pp2}. Aguarde o seu pedido está sendo feito.`)
     }

    else {
        window.alert(`ERRO. Favor confirmar o número dos pratos.`)
    }
} else {
    window.alert(`ERRO. Favor confirmar o número do prato principal.`);
}

}

