document.getElementById('searchButton').addEventListener('click', () => {

    const itemsContainer = document.getElementById("items")
    itemsContainer.innerHTML = ""

    const itemData = {
        name: document.getElementById('name').value,
        lower: document.getElementById('lowerRange').value,
        higher: document.getElementById('upperRange').value,
        brand: document.getElementById('brand').value,
        category: document.getElementById('category').value,
    }

    const params = new URLSearchParams(itemData);
    const url = `/customsearch?${params}`;

    fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).then(response => response.json())
        .then(data => {
            data.list.map((product) => {
                itemsContainer.innerHTML += `
                <div class="item_container" onclick="goToProduct(${product.id})">
                    <div class="product_image" style="background: url('/assets/product1\(Nike\ Dunk\ Low\).webp');"></div>
                    <div class="info_container">
                        <p class="product_name">${product.brand} ${product.name}</p>
                        <p class="product_price">$${product.price}</p>
                        <div class="ratings">
                        <img src="/assets/star_solid.svg" alt="⭐">
                        <img src="/assets/star_solid.svg" alt="⭐">
                        <img src="/assets/star_solid.svg" alt="⭐">
                        <img src="/assets/star.svg" alt="⚝">
                        <img src="/assets/star.svg" alt="⚝">
                    </div>
                </div>
                <img src="/assets/add_cart.svg" alt="">
                </div>
                `
            })
        })
        .catch(error => {
            console.error(error);
        });
});

function goToProduct(id) {
    window.location.href = `/product/${id}`
}