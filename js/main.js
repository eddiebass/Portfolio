document.querySelector(".fa-toggle-on").addEventListener("click", () => {
    const body = document.querySelector("body");
    if (body.classList.contains("white")) {
        body.classList.replace("white", "dark");
    } else {
        body.classList.replace("dark", "white");
    }
});