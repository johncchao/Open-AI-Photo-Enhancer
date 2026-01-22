// Image data configuration
const imageData = [
    {
        src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop',
        algorithm: 'AI Denoising',
        title: 'Landscape Enhancement',
        description: 'Remove image noise through deep learning algorithms while preserving details and improving overall clarity.'
    },
    {
        src: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=600&h=400&fit=crop',
        algorithm: 'Super Resolution',
        title: 'High-Resolution Reconstruction',
        description: 'Reconstruct low-resolution images to high-resolution using ESRGAN algorithm with rich and natural details.'
    },
    {
        src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&h=400&fit=crop',
        algorithm: 'Detail Sharpening',
        title: 'Edge Enhancement',
        description: 'Intelligently identify and sharpen image edges to make the picture clearer and more defined.'
    },
    {
        src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop',
        algorithm: 'Color Enhancement',
        title: 'Smart Color Grading',
        description: 'AI automatically analyzes scenes and optimizes color balance to make photos more vivid and vibrant.'
    },
    {
        src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&h=400&fit=crop',
        algorithm: 'Light Correction',
        title: 'Exposure Optimization',
        description: 'Intelligently adjust exposure and contrast to restore details in overexposed or underexposed areas.'
    },
    {
        src: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=600&h=400&fit=crop',
        algorithm: 'Style Transfer',
        title: 'Artistic Processing',
        description: 'Apply neural style transfer techniques to transform photos into specific artistic styles.'
    }
];

// Render image gallery
function renderGallery() {
    const gallery = document.getElementById('gallery');
    
    imageData.forEach((item, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.style.animationDelay = `${index * 0.1}s`;
        
        galleryItem.innerHTML = `
            <div class="image-container">
                <img src="${item.src}" alt="${item.title}" loading="lazy">
            </div>
            <div class="image-info">
                <span class="algorithm-tag">${item.algorithm}</span>
                <h3>${item.title}</h3>
                <p>${item.description}</p>
            </div>
        `;
        
        gallery.appendChild(galleryItem);
    });
}

// API documentation button click event
document.addEventListener('DOMContentLoaded', () => {
    renderGallery();
    
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
