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

// Orders
function limpiar() {
    document.getElementById('finalCompra').reset();
}
function limpiarTwo() {
    document.getElementById('finalCompraDos').reset();
}

let resultado;
const Total = function total() {
    let suitSelected = document.getElementById("suitName")
    let cost = document.getElementById("costo");

    // Suit 1
    $(".suitOne").click(() => {
        suitSelected.innerHTML = "Leggerissimo Blue Suit";
        cost.innerHTML = 2100;
    })

    // Suit 2
    $(".suitTwo").click(() => {
        suitSelected.innerHTML = "Stretch Mohair Wool Suit"
        cost.innerHTML = 2620;
    })

    // Suit 3
    $(".suitThree").click(() => {
        suitSelected.innerHTML = "Striped Wool Silk Linen Suit"
        cost.innerHTML = 3550;
    })

    // Suit 4
    $(".suitFour").click(() => {
        suitSelected.innerHTML = "Natural Stretch Dark Gray Suit"
        cost.innerHTML = 2450;
    })

    // Suit 5
    $(".suitFive").click(() => {
        suitSelected.innerHTML = "Light Gray Silk Wool Suit"
        cost.innerHTML = 2820;
    })

    // Suit 6
    $(".suitSix").click(() => {
        suitSelected.innerHTML = "Natural Stretch Dark Suit"
        cost.innerHTML = 3360;
    })

    let numero1 = parseInt(document.getElementById("cantidad").value);
    let numero2 = cost.innerHTML;

    if (!numero1) {
        return;
    }

    resultado = numero1 * numero2;

    let precioFinal = document.getElementById("resultado");
    precioFinal.innerHTML = "$" + resultado;
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