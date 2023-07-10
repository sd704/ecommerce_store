async function fetchData() {
    try {
        const response = await fetch('https://fakestoreapi.com/products?limit=30');

        if (!response.ok) {
            throw new Error('Request failed with status ' + response.status);
        }

        const data = await response.json();

        data.forEach(
            (item) => {
                const star = Math.round(item.rating.rate)
                const empty_star = 5 - star
                let starHtml = ``
                for (let i = 1; i <= star; i++) {
                    starHtml += `<img src="/assets/star_solid.svg" alt="⭐">`
                }
                for (let i = 1; i <= empty_star; i++) {
                    starHtml += `<img src="/assets/star.svg" alt="⚝">`
                }

                const list = document.getElementById("items_container")
                list.innerHTML += `<div class="item_container" onclick="goToProduct()">
                <div class="product_image" style="background: url(${item.image});"></div>
                <div class="info_container">
                    <p class="product_name">${item.title}</p>
                    <p class="product_price">$${item.price}</p>
                    <div class="ratings">`
                    + starHtml +
                    `</div>
                </div>
                
                </div>`
            }
        )

    } catch (error) {
        console.error('Error:', error.message);
    }
}

fetchData();

function goToProduct() {
    window.location.href = 'product.html'
}

// function goToCart() {
//     window.location.href = 'cart.html'
// }