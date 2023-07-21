document.addEventListener("DOMContentLoaded", function () {

    document.getElementById("custom").addEventListener("click", () => {
        window.location.href = 'search.html';
    });

    const allItems = document.getElementById("items_container").innerHTML

    function searchRequest() {
        const itemsContainer = document.getElementById("items_container")
        const query = document.getElementById("query").value

        if (query.length >= 3) {

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
        } else {
            itemsContainer.innerHTML = allItems
        }
    }

    function deBounce(searchRequest, delay) {
        let debounceTimer;
        return function () {
            if (debounceTimer) {
                clearTimeout(debounceTimer);
            }
            debounceTimer = setTimeout(() => { searchRequest(); }, delay);
        }
    }

    document.getElementById("query").addEventListener("input", deBounce(searchRequest, 500));
    document.getElementById("search").addEventListener("click", searchRequest());

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


