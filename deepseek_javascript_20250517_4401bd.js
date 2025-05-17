// Toggle chatbot visibility
document.addEventListener('DOMContentLoaded', () => {
    const chatbotContainer = document.getElementById('chatbotContainer');
    const launchBtn = document.getElementById('launchChatbot');
    const heroBtn = document.getElementById('heroChatBtn');
    const closeBtn = document.getElementById('closeChatbot');
    
    if (launchBtn) {
        launchBtn.addEventListener('click', () => {
            chatbotContainer.style.display = 'block';
        });
    }
    
    if (heroBtn) {
        heroBtn.addEventListener('click', () => {
            chatbotContainer.style.display = 'block';
        });
    }
    
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            chatbotContainer.style.display = 'none';
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});