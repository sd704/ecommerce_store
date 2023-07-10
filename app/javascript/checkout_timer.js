function startCountdown() {
    var countdownElement = document.getElementById("countdown");
    var count = 5;

    var countdownInterval = setInterval(function () {
        count--;
        countdownElement.textContent = count;

        if (count <= 0) {
            clearInterval(countdownInterval);
            window.location.href = "home.html";
        }
    }, 1000);
}

document.addEventListener("DOMContentLoaded", function () {
    startCountdown();
});