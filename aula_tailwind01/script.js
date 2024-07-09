const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");
const sidebar = document.getElementById("sidebar");
const mainContent = document.getElementById("main-content");

function toggleSidebar() {
    sidebar.classList.toggle("translate-x-full");
}

function closeSidebar() {
    if (!sidebar.classList.contains("translate-x-full")) {
        sidebar.classList.add("translate-x-full");

    }
}

menuBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleSidebar();
});

closeBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleSidebar();
});

document.addEventListener("click", (e) => {
    if (
        !sidebar.contains(e.target) &&
        !menuBtn.contains(e.target) &&
        !closeBtn.contains(e.target)
    ) {
        closeSidebar();
    }
});