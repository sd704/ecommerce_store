
const imageLinks = [
    "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/89572137-c50b-4cdf-806f-e1703aff4054/air-jordan-i-high-g-golf-shoes-qKzTBg.png",
    "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e3e67ca8-2632-4ba6-9e59-1dd30ff80005/air-jordan-i-high-g-golf-shoes-qKzTBg.png",
    "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/df72c3a9-1616-4b16-b75a-729aa12a4414/air-jordan-i-high-g-golf-shoes-qKzTBg.png",
    "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/0524dcb9-5383-4c6e-b121-b07d421bd7bf/air-jordan-i-high-g-golf-shoes-qKzTBg.png",
    "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/0f8da62b-5028-4771-b337-b495eb2d3a61/air-jordan-i-high-g-golf-shoes-qKzTBg.png"
]

let imageNo = 0
document.getElementById('image_container').style.backgroundImage = `url(${imageLinks[imageNo]})`;

function previousImage() {
    if (imageNo > 0) {
        document.getElementById('image_container').style.backgroundImage = `url(${imageLinks[--imageNo]})`;
    }
}

function nextImage() {
    if (imageNo < 4) {
        document.getElementById('image_container').style.backgroundImage = `url(${imageLinks[++imageNo]})`;
    }
}

let count = document.getElementById('cart_count')

function increaseCount() {
    count.innerText = parseInt(count.innerText) + 1
}

function decreaseCount() {
    if (parseInt(count.innerText) > 1) {
        count.innerText = parseInt(count.innerText) - 1
    }
}