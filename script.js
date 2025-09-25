const leftSidebar = document.getElementById('left-sidebar');
const rightSidebar = document.getElementById('right-sidebar');
const content = document.getElementById('content');

// Function to update content position (no longer shifts content)
function updateContentPosition() {
    // No-op: content stays centered, sidebars expand over it
}

// Add hover and click event listeners
[leftSidebar, rightSidebar].forEach(sidebar => {
    sidebar.addEventListener('mouseenter', () => {
        if (!sidebar.classList.contains('max-expanded')) {
            sidebar.classList.add('expanded');
        }
    });
    sidebar.addEventListener('mouseleave', () => {
        if (!sidebar.classList.contains('max-expanded')) {
            sidebar.classList.remove('expanded');
        }
    });
    sidebar.addEventListener('click', () => {
        const isMax = sidebar.classList.contains('max-expanded');
        // Remove max-expanded from both sidebars
        leftSidebar.classList.remove('max-expanded');
        rightSidebar.classList.remove('max-expanded');
        // Remove expanded from both sidebars
        leftSidebar.classList.remove('expanded');
        rightSidebar.classList.remove('expanded');
        if (!isMax) {
            sidebar.classList.add('max-expanded');
        }
    });
});

// Clicking the main content collapses any expanded sidebar
content.addEventListener('click', () => {
    if (leftSidebar.classList.contains('max-expanded') || rightSidebar.classList.contains('max-expanded')) {
        leftSidebar.classList.remove('max-expanded');
        rightSidebar.classList.remove('max-expanded');
        leftSidebar.classList.remove('expanded');
        rightSidebar.classList.remove('expanded');
    }
});

// No need to update content position on resize
