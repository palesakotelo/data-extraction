lucide.createIcons();

function navigate(page) {
    window.location.href = page;
}

const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".tab-content");

tabs.forEach(tab => {
    tab.addEventListener("click", () => {

        tabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");

        contents.forEach(c => c.classList.remove("active"));

        const selected = tab.getAttribute("data-tab");
        document.getElementById(selected).classList.add("active");
    });
});