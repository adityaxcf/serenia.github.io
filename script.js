const buttons = document.querySelectorAll(".algo-btn");

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        const box = btn.nextElementSibling;
        box.classList.toggle("open");

        btn.textContent =
            box.classList.contains("open") ? "Hide Algorithm" : "Show Algorithm";
    });
});
