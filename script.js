const leftSidebar = document.getElementById('left-sidebar');
const rightSidebar = document.getElementById('right-sidebar');
const content = document.getElementById('content');

// Function to update content position
function updateContentPosition() {
    let leftWidth = 20;
    let rightWidth = 20;
    if (leftSidebar.classList.contains('max-expanded')) {
        leftWidth = window.innerWidth * 0.9;
    } else if (leftSidebar.classList.contains('expanded')) {
        leftWidth = 50;
    }
    if (rightSidebar.classList.contains('max-expanded')) {
        rightWidth = window.innerWidth * 0.9;
    } else if (rightSidebar.classList.contains('expanded')) {
        rightWidth = 50;
    }
    content.style.left = `${leftWidth}px`;
    content.style.right = `${rightWidth}px`;
}

// Add hover and click event listeners
[leftSidebar, rightSidebar].forEach(sidebar => {
    sidebar.addEventListener('mouseenter', () => {
        if (!sidebar.classList.contains('max-expanded')) {
            sidebar.classList.add('expanded');
            updateContentPosition();
        }
    });
    sidebar.addEventListener('mouseleave', () => {
        if (!sidebar.classList.contains('max-expanded')) {
            sidebar.classList.remove('expanded');
            updateContentPosition();
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
        updateContentPosition();
    });
});

// Update on resize
window.addEventListener('resize', updateContentPosition);

// Initial position
updateContentPosition();
