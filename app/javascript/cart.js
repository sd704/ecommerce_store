function increaseCount(id, price, stock, cid) {
    let count = document.getElementById(id)
    let grandPrice = document.getElementById("grandTotal")
    if (parseInt(count.innerText) < stock) {
        count.innerText = parseInt(count.innerText) + 1
        updateCart(cid, count.innerText)
        grandPrice.innerText = "$ " + (parseFloat(grandPrice.innerText.substring(2)) + parseFloat(price))
    }
}

function decreaseCount(id, price, cid) {
    let count = document.getElementById(id)
    let grandPrice = document.getElementById("grandTotal")
    if (parseInt(count.innerText) > 0) {
        count.innerText = parseInt(count.innerText) - 1
        updateCart(cid, count.innerText)
        grandPrice.innerText = "$ " + (parseFloat(grandPrice.innerText.substring(2)) - parseFloat(price))
    }
}

function updateCart(id, count) {
    const itemData = {
        id: id,
        count: count
    }

    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(itemData)
    };

    fetch("/updatecart", requestOptions)
        .then(response => response.json())
        .then(data => {
            if (data.success) { }
        })
        .catch(error => {
            console.error(error);
        });
}

document.getElementById("paymentButton").addEventListener("click", () => {

    const pay_data = {
        sum: document.getElementById("grandTotal").innerText.substring(2)
    }

    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(pay_data)
    };

    fetch("/payment", requestOptions)
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                window.location.href = 'checkout.html';
            }
        })
        .catch(error => {
            console.error(error);
        });
})