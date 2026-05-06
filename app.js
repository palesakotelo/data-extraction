// Add basic interaction, like preventing form submission
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function(event) {
        // Prevent the default form submission behavior (reloading the page)
        event.preventDefault();

        // Normally, you would handle login logic here (send data to a server)
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Simple feedback for demonstration
        if (username && password) {
            alert(`Login attempt for user: ${username}`);
            // In a real app, you'd perform authentication here
        } else {
            alert('Please fill in both username and password fields.');
        }
    });
});

function showScreen(screenId) {
    // Hide all screens
    document.querySelectorAll('.login-card, .dashboard-container').forEach(el => {
        el.style.display = 'none';
    });

    // Show target screen
    const target = document.getElementById(screenId);
    if (target) target.style.display = 'flex';

    // Refresh icons
    lucide.createIcons();

    // Set background color
    const isDashboardView = ['dashboard-screen', 'companies-screen', 'staff-screen', 'add-company-screen', 'subscriptions-screen', 'reports-screen'].includes(screenId);    document.body.style.backgroundColor = isDashboardView ? "#F0F5F9" : "#FFFFFF";

    // Update sidebar active state dynamically
    document.querySelectorAll('.sidebar-item').forEach(item => item.classList.remove('active'));
    const sidebarMap = {
        'dashboard-screen': 'nav-dashboard',
        'companies-screen': 'nav-companies',
        'staff-screen': 'nav-staff',
        'subscriptions-screen': 'nav-subscriptions',
        'reports-screen': 'nav-reports',
        'settings-screen': 'nav-settings',
        'help-screen': 'nav-help'
    };
    const activeId = sidebarMap[screenId];
    if(activeId) document.getElementById(activeId)?.classList.add('active');
}
