document.addEventListener("DOMContentLoaded", function () {

    document.getElementById("search").addEventListener("click", () => {
        window.location.href = 'search.html';
    });

    document.getElementById("cart").addEventListener("click", () => {
        window.location.href = 'cart.html';
    });

    document.getElementById("account").addEventListener("click", () => {
        window.location.href = 'profile.html';
    });

    // document.getElementById("product_id").addEventListener("click", () => {
    //     window.location.href = 'product.html';
    // });
});


