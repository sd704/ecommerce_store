const cartButton = document.getElementById('cart')
if (cartButton) {
    cartButton.addEventListener('click', () => {

        const url_segments = window.location.href.split('/')

        const itemData = {
            item_id: url_segments[url_segments.length - 1],
            count: document.getElementById("cart_count").innerText
        }

        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(itemData)
        };

        fetch("/cart", requestOptions)
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    window.location.href = "/cart"
                }
            })
            .catch(error => {
                console.error(error);
            });
    });
}

const loginButton = document.getElementById('login')
if (loginButton) {
    loginButton.addEventListener('click', () => {
        window.location.href = '/login'
    })
}

const editButton = document.getElementById('edit_product')
if (editButton) {
    editButton.addEventListener('click', () => {
        const url_segments = window.location.href.split('/')
        const item_id = url_segments[url_segments.length - 1]
        window.location.href = `/editproduct/${item_id}`
    })
}