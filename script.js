const leftSidebar = document.getElementById('left-sidebar');
const rightSidebar = document.getElementById('right-sidebar');
const content = document.getElementById('content');

// Function to update content margin
function updateContentMargin() {
    const leftWidth = leftSidebar.classList.contains('expanded') ? 50 : 20;
    const rightWidth = rightSidebar.classList.contains('expanded') ? 50 : 20;
    content.style.marginLeft = `${leftWidth}px`;
    content.style.marginRight = `${rightWidth}px`;
}

// Add hover event listeners
[leftSidebar, rightSidebar].forEach(sidebar => {
    sidebar.addEventListener('mouseenter', () => {
        sidebar.classList.add('expanded');
        updateContentMargin();
    });
    sidebar.addEventListener('mouseleave', () => {
        sidebar.classList.remove('expanded');
        updateContentMargin();
    });
});
