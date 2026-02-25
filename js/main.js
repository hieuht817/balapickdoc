function login() {
    const password = document.getElementById('password').value;
    const errorMsg = document.getElementById('error-msg');
    
    // Simple client-side password protection
    // SHA-256 or similar would be better, but for basic internal docs, a static check is a starting point.
    // Recommended password for user to test: "bala2026"
    if (password === 'bala2026') {
        localStorage.setItem('isStaff', 'true');
        window.location.href = 'staff.html';
    } else {
        errorMsg.innerText = 'Mật khẩu sai. Vui lòng thử lại.';
        errorMsg.style.color = '#ff4444';
    }
}

function checkAccess() {
    if (localStorage.getItem('isStaff') !== 'true') {
        window.location.href = 'index.html#staff';
    }
}

function logout() {
    localStorage.removeItem('isStaff');
    window.location.href = 'index.html';
}

// Simple reveal animation on scroll
document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.glass-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s ease-out';
        observer.observe(card);
    });
});
