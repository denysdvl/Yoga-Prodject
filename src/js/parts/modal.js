function modal() {
    let btnMore = document.querySelector(".more"),
        modal = document.querySelector(".overlay"),
        btnClose = document.querySelector(".popup-close"),
        descBtn = document.querySelectorAll(".description-btn");

    function openModal(element) {
        element.addEventListener('click', () => {
            modal.style.display = "block";
            btnMore.classList.add("more-splash");
            document.body.style.overflow = "hidden";
        });
    }

    openModal(btnMore);
    descBtn.forEach((element) => {
        openModal(element);
    });

    btnClose.addEventListener('click', function () {
        modal.style.display = "none";
        btnMore.classList.remove("more-splash");
        document.body.style.overflow = "";
    });
}
module.exports = modal;