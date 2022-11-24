let flag = 0;
function checkBox() {
    const firstPrice = document.getElementById("basicPrice");
    const secondPrice = document.getElementById("proPrice");
    const thirdPrice = document.getElementById("masterPrice");
    if (flag == 0) {
        firstPrice.textContent = "$19.99";
        secondPrice.textContent = "$24.99";
        thirdPrice.textContent = "39.99";
        flag = 1;
    } else {
        firstPrice.textContent = "$199.99";
        secondPrice.textContent = "$249.99";
        thirdPrice.textContent = "399.99";
        flag = 0;

    }
}