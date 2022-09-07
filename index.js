if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}


function ready() {
    var orderNowButtons = document.getElementsByClassName("food-btn")
    for (var i = 0; i < orderNowButtons.length; i++) {
        var button = orderNowButtons[i]
        button.addEventListener("click", orderNowClicked)
    }
}

function orderNowClicked() {
    alert("Thank you for your order!")
}