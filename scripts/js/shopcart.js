zero = []

$(document).ready(function() {
    
    var shopcart = JSON.parse(localStorage.getItem() || zero);
    for (i=0; i < shopcart.lenght; i++) {
        content = " ";
        content += "";
    }
    
    $("cart").append(content);
});

$("#buyOrange").click(function(){
    var phone = "Smartcrab Sunlight Crab";
    var valor = 1700;
    localStorage.setItem("cart", JSON.stringify(shopcart));
    alert("Smartcrab adicionado à sacola!");
});

$("#buyPurple").click(function(){
    var phone = "Smartcrab Midnight Crab";
    var valor = 1600;
    localStorage.setItem("cart", JSON.stringify(shopcart));
    alert("Smartcrab adicionado à sacola!");
});

$("#buyBlack").click(function(){
    var phone = "Smartcrab Black Crab";
    var valor = 1500;
    localStorage.setItem("cart", JSON.stringify(shopcart));
    alert("Smartcrab adicionado à sacola!");
});

$("btnRemove").click(function(pos){
    var shopcart = JSON.parse(localStorage.getItem('cart') || zero);
    shopcart.splice(pos, 1);
    localStorage.setItem("cart", JSON.stringify(shopcart));
    location.reload();
});