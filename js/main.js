// Efect Slide Down & Up in Banner
let show = false;
$(".btnDescription").click(() => {
    if (show)
        $(".descriptionProduct").slideUp("slow"); 
    else
        $(".descriptionProduct").slideDown("slow");
    show = !show;
})


// PRODUCTS
// Array sin uso
const productos = [
    { id: 1, nombre: "Leggerissimo Blue Suit", precio: 2100 },
    { id: 2, nombre: "Stretch Mohair Wool Suit", precio: 2620 },
    { id: 3, nombre: "Striped Wool Silk Linen Suit" , precio: 3550},
    { id: 4, nombre: "Natural Stretch Dark Gray Suit" , precio: 2100},
    { id: 5, nombre: "Light Gray Silk Wool Suit" , precio: 2620},
    { id: 6, nombre: "Natural Stretch Dark Suit" , precio: 3550}
];


// Orders
function limpiar() {
    document.getElementById('finalCompra').reset();
    console.log("Clean")
}
function limpiarTwo() {
    document.getElementById('finalCompraDos').reset();
    console.log("Clean")
}

let resultado;
const Total = function total() {
    let suitSelected = document.getElementById("suitName")
    let cost = document.getElementById("costo");

    // Suit 1
    $(".suitOne").click(() => {
        suitSelected.innerHTML = "Leggerissimo Blue Suit";
        cost.innerHTML = 2100;
        console.log("precio = $1");
    })

    // Suit 2
    $(".suitTwo").click(() => {
        suitSelected.innerHTML = "Stretch Mohair Wool Suit"
        cost.innerHTML = 2620;
        console.log("precio = $2");
    })

    // Suit 3
    $(".suitThree").click(() => {
        suitSelected.innerHTML = "Striped Wool Silk Linen Suit"
        cost.innerHTML = 3550;
        console.log("precio = $3");
    })

    // Suit 4
    $(".suitFour").click(() => {
        suitSelected.innerHTML = "Natural Stretch Dark Gray Suit"
        cost.innerHTML = 2100;
        console.log("precio = $4");
    })

    // Suit 5
    $(".suitFive").click(() => {
        suitSelected.innerHTML = "Light Gray Silk Wool Suit"
        cost.innerHTML = 2620;
        console.log("precio = $5");
    })

    // Suit 6
    $(".suitSix").click(() => {
        suitSelected.innerHTML = "Natural Stretch Dark Suit"
        cost.innerHTML = 3550;
        console.log("precio = $6");
    })

    let numero1 = parseInt(document.getElementById("cantidad").value);
    let numero2 = cost.innerHTML;

    if (!numero1) {
        console.log("Enter an amount");
        return;
    }

    resultado = numero1 * numero2;
    console.log(resultado);

    console.log("End of Purchase");

    let precioFinal = document.getElementById("resultado");
    precioFinal.innerHTML = resultado;
}

let finPedido = document.getElementById("resolver");
let finalizarPedido = document.getElementById("finalCompra");
finPedido.onclick = 
    Total,
    finPedido.click(() => {
        finalizarPedido.fadeout("fast");
    });
    

// End of Purchase
let end = document.getElementById("finalCompraDos");
$("#resolver").click(() => {
    end.style = "display: flex";
    console.log("End is available");  
})

// Modal Edit
let modal = document.getElementById("endModal");
let endButton = document.getElementById("finishBtn");
let nameUser = document.getElementById("name");
let emailUser = document.getElementById("email");
let directionUser = document.getElementById("direction");

$("#finishBtn").click(() => {
    localStorage.setItem("userName", nameUser.value);
    localStorage.setItem("userEmail", emailUser.value);
    localStorage.setItem("userDirection", directionUser.value);
    let userName = localStorage.getItem("userName");
    let userEmail = localStorage.getItem("userEmail");
    let userDirection = localStorage.getItem("userDirection");

    if (userName != "" && userEmail != "" && userDirection != "") {
        modal.innerHTML = "The order in " + userName + "'s name will be sent to " + userDirection + ". We will send you an email to " + userEmail + " with all the information." + '<br>' + "Total = $" + resultado;
    } else {
        modal.innerHTML = "Please sign your personal information";
    }
})