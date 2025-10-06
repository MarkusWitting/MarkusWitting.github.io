const sidebar = document.getElementById('sidebar');
const about = document.getElementById('about');
const sidebarToggle = document.getElementById('sidebar-toggle');

// Only clicking the button toggles the sidebar
sidebarToggle.addEventListener('click', (e) => {
    sidebar.classList.toggle('expanded');
    e.stopPropagation();
});

// Clicking the about section closes the sidebar if open
about.addEventListener('click', () => {
    if (sidebar.classList.contains('expanded')) {
        sidebar.classList.remove('expanded');
    }
});
