document.addEventListener("DOMContentLoaded", function () {

    document.getElementById("custom").addEventListener("click", () => {
        window.location.href = 'search.html';
    });

    document.getElementById("search").addEventListener("click", () => {
        const itemsContainer = document.getElementById("items_container")
        const query = document.getElementById("query").value

        const itemData = {
            name: query,
            brand: query,
            category: query,
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
                itemsContainer.innerHTML = ""

                if (data.list.length < 1) {
                    itemsContainer.innerHTML = "Sorry, no products found."
                }

                data.list.map((product) => {
                    itemsContainer.innerHTML += `
                    <div class="item_container" onclick="window.location.href='/product/${product.id}'">
                    <div class="product_image" style="background: url('assets/shoes.avif');"></div>
                    <div class="info_container">
                        <p class="product_name">${product.brand} ${product.name}</p>
                        <p class="product_price">$${product.price}</p>
                        <div class="ratings"></div>
                    </div>
                    </div>
                    `
                })

            })
            .catch(error => {
                console.error(error);
            });
    });

    document.getElementById("cart").addEventListener("click", () => {
        window.location.href = 'cart.html';
    });

    document.getElementById("account").addEventListener("click", () => {
        window.location.href = 'profile.html';
    });

    const loginButton = document.getElementById("login");
    if (loginButton) {
        loginButton.addEventListener("click", () => {
            window.location.href = 'login.html';
        });
    }

    const logoutButton = document.getElementById("logout");
    if (logoutButton) {
        logoutButton.addEventListener("click", () => {
            window.location.href = '/logout';
        });
    }

});


