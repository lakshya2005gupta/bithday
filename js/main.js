// Custom heart cursor effect
document.addEventListener('DOMContentLoaded', function() {
    const cursor = document.querySelector('.custom-cursor');
    
    if (cursor) {
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });

        // Scale cursor on click
        document.addEventListener('mousedown', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(0.8)';
        });

        document.addEventListener('mouseup', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1)';
        });

        // Larger cursor on hover over buttons
        const interactiveElements = document.querySelectorAll('button, a, .memory-card');
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.style.transform = 'translate(-50%, -50%) scale(1.3)';
            });
            el.addEventListener('mouseleave', () => {
                cursor.style.transform = 'translate(-50%, -50%) scale(1)';
            });
        });
    }
});

// Create floating elements (hearts, sparkles, etc.)
function createFloatingElement() {
    const elements = ['💖', '✨', '🌸', '💫', '💕', '🎀', '🌟', '💝'];
    const element = document.createElement('div');
    element.className = 'floating-element';
    element.textContent = elements[Math.floor(Math.random() * elements.length)];
    element.style.cssText = `
        position: fixed;
        left: ${Math.random() * 100}vw;
        top: 100vh;
        font-size: ${Math.random() * 20 + 20}px;
        pointer-events: none;
        z-index: 1;
        animation: floatUp ${Math.random() * 5 + 8}s linear forwards;
        opacity: 0.7;
    `;
    document.body.appendChild(element);

    setTimeout(() => {
        element.remove();
    }, 13000);
}

// Create floating elements periodically
setInterval(createFloatingElement, 2000);

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all memory cards and sections
document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.memory-card, .memory-section, .final-message');
    elements.forEach(el => {
        observer.observe(el);
    });
});

// Add sparkle effect on hover
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.memory-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            createSparkle(this);
        });
    });
});

function createSparkle(element) {
    const sparkle = document.createElement('div');
    sparkle.innerHTML = '✨';
    sparkle.style.cssText = `
        position: absolute;
        top: ${Math.random() * 100}%;
        left: ${Math.random() * 100}%;
        font-size: 20px;
        pointer-events: none;
        animation: sparkleAnimation 1s ease-out forwards;
        z-index: 10;
    `;
    
    element.style.position = 'relative';
    element.appendChild(sparkle);
    
    setTimeout(() => {
        sparkle.remove();
    }, 1000);
}

// Add CSS animation for sparkle
const style = document.createElement('style');
style.textContent = `
    @keyframes sparkleAnimation {
        0% {
            opacity: 1;
            transform: scale(0) rotate(0deg);
        }
        50% {
            opacity: 1;
            transform: scale(1.5) rotate(180deg);
        }
        100% {
            opacity: 0;
            transform: scale(0) rotate(360deg);
        }
    }
`;
document.head.appendChild(style);