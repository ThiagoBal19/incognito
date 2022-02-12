// Swipe up and down effect on the banner
let show = false;
$(".btnDescription").click(() => {
    if (show)
        $(".descriptionProduct").slideUp("slow"); 
    else
        $(".descriptionProduct").slideDown("slow");
    show = !show;
})

// Scroll function to the top of the brand logo
function goTop() {
    scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// Array of Products
let sectionProducts = document.getElementById("products");
let info;

const arrayProducts = [
    {
        id: 0,
        image: "assets/suitBlue.jpg",
        title: "Leggerissimo Blue Suit",
        cost: 2100,
        brand: "REDA",
    },
    {
        id: 1,
        image: "assets/suitGreen.jpg",
        title: "Stretch Mohair Wool Suit",
        cost: 2620,
        brand: "ZIGNONE",
    },
    {
        id: 2,
        image: "assets/suitRed.jpg",
        title: "Striped Wool Silk Linen Suit",
        cost: 3550,
        brand: "VITALE BARBERIS CANONICO",
    },
    {
        id: 3,
        image: "assets/suitDarkGray.jpg",
        title: "Natural Stretch Dark Gray Suit",
        cost: 2450,
        brand: "DRAGO",
    },
    {
        id: 4,
        image: "assets/suitLightGray.jpg",
        title: "Light Gray Silk Wool Suit",
        cost: 2820,
        brand: "VITALE BARBERIS CANONICO",
    },
    {
        id: 5,
        image: "assets/suitDark.jpg",
        title: "Natural Stretch Dark Suit",
        cost: 3360,
        brand: "DRAGO",
    }
]

// Array on HTML
info = "<article>";
    for(const arrayProduct of arrayProducts) {
        info += "<div  class='descriptionProduct'>" +
                    "<div>" + 
                        "<img class='imageProduct' src='" + arrayProduct.image + "'>" +
                        "<h2>" + arrayProduct.title + "</h2>" +
                        "<h3>" + "$" + arrayProduct.cost +"</h3>" +
                        "<h4>" + arrayProduct.brand +"</h4>" +
                        "<a id='" + arrayProduct.id + "' class='buyBtn' type='button' onClick='fillForm()' href='#endPurchase'>" + "BUY" + "</a>" +
                    "</div>" +
                "</div>";
    }
info += "</article>";

sectionProducts.innerHTML = info;

// Show array on HTML
let suitSelected = document.getElementById("suitName")
let suitCost = document.getElementById("cost");

function fillForm() {
    $("#0").click(() => {
        suitSelected.innerHTML = arrayProducts[0].title;
        suitCost.innerHTML = arrayProducts[0].cost;
    })
    $("#1").click(() => {
        suitSelected.innerHTML = arrayProducts[1].title;
        suitCost.innerHTML = arrayProducts[1].cost;
    })
    $("#2").click(() => {
        suitSelected.innerHTML = arrayProducts[2].title;
        suitCost.innerHTML = arrayProducts[2].cost;
    })
    $("#3").click(() => {
        suitSelected.innerHTML = arrayProducts[3].title;
        suitCost.innerHTML = arrayProducts[3].cost;
    })
    $("#4").click(() => {
        suitSelected.innerHTML = arrayProducts[4].title;
        suitCost.innerHTML = arrayProducts[4].cost;
    })
    $("#5").click(() => {
        suitSelected.innerHTML = arrayProducts[5].title;
        suitCost.innerHTML = arrayProducts[5].cost;
    })

}

// This method is only used to fix an error that appears when we click on the buy anchor.
setTimeout(fillForm, 0)

let totalResult = 0;
function calculate() {
    let quantity = document.getElementById("quantity").value;
    let suitTotal = document.getElementById("result")

    try {
        totalResult = quantity * suitCost.innerHTML;
        suitTotal.innerHTML = "$" + totalResult;
    } catch (e) {}
}

let end = document.getElementById("endPurchaseTwo");

// Function Clean inputs
function clean() {
    document.getElementById('endPurchase').reset();
    $("#suitName").empty();
    $("#cost").empty();
    $("#result").empty();
    end.style = "display: none";
}
function cleanTwo() {
    document.getElementById('endPurchaseTwo').reset();
}

// End of Purchase
function showEnd() {
    if(totalResult != "") {
        end.style = "display: flex";
    } else {
        alert("Choose your quantity")
    }
}

// Modal Edit
let modalTitle = document.getElementById("endModalTitle");
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
        modalTitle.innerHTML = "PURCHASE MADE";
        modal.innerHTML = "The order in " + userName + "'s name will be sent to " + userDirection + ". We will send you an email to " + userEmail + " with all the information." + '<br>' + "TOTAL = $" + totalResult;
    } else {
        modalTitle.innerHTML = "ERROR";
        modal.innerHTML = "Please sign your personal information";
    }
})