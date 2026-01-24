// Image data configuration
const imageData = [
    {
        inputSrc: 'res/input01_cropped.png',
        outputSrc: 'res/output01_cropped.png',
        algorithm: 'Neural Texture Synthesis',
        title: 'Portrait Texture Recovery',
        description: 'Extremely close up facial close-up restoration/generation'
    },
    {
        inputSrc: 'res/input02_cropped.png',
        outputSrc: 'res/output02_cropped.png',
        algorithm: 'Diffusion-based Denoiser',
        title: 'Low-Light Reconstruction',
        description: 'Restoration of Light and Shadow in a Dim Atmosphere'
    },
    {
        inputSrc: 'res/input03_cropped.png',
        outputSrc: 'res/output03_cropped.png',
        algorithm: 'Super Resolution',
        title: 'High-Resolution Reconstruction',
        description: 'Reconstruct low-resolution images to high-resolution using ESRGAN algorithm with rich and natural details.'
    }
];

// Render image gallery with press-to-compare
function renderGallery() {
    const gallery = document.getElementById('gallery');
    
    imageData.forEach((item, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.style.animationDelay = `${index * 0.1}s`;
        
        galleryItem.innerHTML = `
            <div class="image-container comparison-container">
                <img src="${item.outputSrc}" alt="${item.title} - After" class="image-after" loading="lazy">
                <div class="image-before-overlay">
                    <img src="${item.inputSrc}" alt="${item.title} - Before" class="image-before" loading="lazy">
                </div>
                <div class="press-hint">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M9 18l6-6-6-6"/>
                    </svg>
                    <span>Press to Compare</span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M15 18l-6-6 6-6"/>
                    </svg>
                </div>
                <div class="status-label label-after">After</div>
                <div class="status-label label-before">Before</div>
            </div>
            <div class="image-info">
                <span class="algorithm-tag">${item.algorithm}</span>
                <h3>${item.title}</h3>
                <p>${item.description}</p>
            </div>
        `;
        
        gallery.appendChild(galleryItem);
    });
    
    // Initialize press-to-compare
    initPressToCompare();
}

// Initialize press-to-compare functionality
function initPressToCompare() {
    const containers = document.querySelectorAll('.comparison-container');
    
    containers.forEach(container => {
        const beforeOverlay = container.querySelector('.image-before-overlay');
        const hint = container.querySelector('.press-hint');
        const labelBefore = container.querySelector('.label-before');
        const labelAfter = container.querySelector('.label-after');
        
        // Set initial state
        labelAfter.classList.add('visible');
        
        // Mouse events
        container.addEventListener('mousedown', (e) => {
            beforeOverlay.classList.add('visible');
            hint.classList.add('hidden');
            labelBefore.classList.add('visible');
            labelAfter.classList.remove('visible');
            e.preventDefault();
        });
        
        container.addEventListener('mouseup', () => {
            beforeOverlay.classList.remove('visible');
            hint.classList.remove('hidden');
            labelBefore.classList.remove('visible');
            labelAfter.classList.add('visible');
        });
        
        container.addEventListener('mouseleave', () => {
            beforeOverlay.classList.remove('visible');
            hint.classList.remove('hidden');
            labelBefore.classList.remove('visible');
            labelAfter.classList.add('visible');
        });
        
        // Touch events for mobile
        container.addEventListener('touchstart', (e) => {
            beforeOverlay.classList.add('visible');
            hint.classList.add('hidden');
            labelBefore.classList.add('visible');
            labelAfter.classList.remove('visible');
            e.preventDefault();
        });
        
        container.addEventListener('touchend', () => {
            beforeOverlay.classList.remove('visible');
            hint.classList.remove('hidden');
            labelBefore.classList.remove('visible');
            labelAfter.classList.add('visible');
        });
        
        container.addEventListener('touchcancel', () => {
            beforeOverlay.classList.remove('visible');
            hint.classList.remove('hidden');
            labelBefore.classList.remove('visible');
            labelAfter.classList.add('visible');
        });
    });
}

// API documentation button click event
document.addEventListener('DOMContentLoaded', () => {
    renderGallery();
    
    // Set current year in footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();
    
    const apiDocsBtn = document.getElementById('apiDocsBtn');
    apiDocsBtn.addEventListener('click', (e) => {
        e.preventDefault();
        // Replace with your actual API documentation link
        window.open('https://github.com/johncchao/Open-AI-Photo-Enhancer/wiki/API-Documentation', '_blank');
    });
});

// Image loading animation
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

// Observe elements after DOM is loaded
setTimeout(() => {
    document.querySelectorAll('.gallery-item').forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(item);
    });
}, 100);
