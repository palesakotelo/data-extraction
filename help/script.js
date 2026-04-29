document.addEventListener('DOMContentLoaded', () => {
    // 1. Accordion Logic
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const currentItem = header.parentElement;
            const isActive = currentItem.classList.contains('active');

            // Close all items
            document.querySelectorAll('.accordion-item').forEach(item => {
                item.classList.remove('active');
            });

            // Toggle clicked item
            if (!isActive) {
                currentItem.classList.add('active');
            }
        });
    });

    // 2. Sidebar Navigation Hover Sound/Effect Emulation
    const navItems = document.querySelectorAll('.sidebar-nav li a');
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            navItems.forEach(link => link.style.background = "");
            this.style.background = "rgba(255,255,255,0.1)";
        });
    });

    // 3. Search Bar Dynamic Interaction
    const searchInput = document.querySelector('.search-wrapper input');
    searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && searchInput.value.trim() !== "") {
            alert('Searching for: ' + searchInput.value);
            searchInput.value = "";
        }
    });

    // 4. Chat Button Interaction
    const sendBtn = document.querySelector('.btn-send');
    sendBtn.addEventListener('click', () => {
        const chatContent = document.querySelector('.chat-content p');
        chatContent.style.color = "#101828";
        chatContent.innerText = "I'm looking into that for you right now...";
        
        setTimeout(() => {
            chatContent.innerText = "Could you please specify which billing period you are referring to?";
        }, 1500);
    });
});