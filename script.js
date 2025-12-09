document.querySelectorAll(".algo-btn").forEach(button => {
    button.addEventListener("click", () => {
        const box = button.nextElementSibling;
        box.classList.toggle("open");

        button.textContent = 
            box.classList.contains("open") ? "Hide Algorithm" : "Show Algorithm";
    });
});
