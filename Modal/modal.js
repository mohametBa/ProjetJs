const btn = document.querySelector(".btn-success");
const closeBtn = document.querySelector(".btn-warning");
const overlay = document.querySelector(".modal-overlay");

btn.addEventListener("click", function () {
    overlay.classList.add("open-modal");
    });


closeBtn.addEventListener("click", function () {
    overlay.classList.remove("open-modal");
});