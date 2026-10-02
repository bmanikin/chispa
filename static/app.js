const API_BASE = '/api';

async function apiCall(endpoint, method = 'GET', body = null) {
    const options = {
        method,
        headers: {
            'Content-Type': 'application/json'
        }
    };
    if (body) {
        options.body = JSON.stringify(body);
    }
    const res = await fetch(`${API_BASE}${endpoint}`, options);
    if (!res.ok) {
        const err = await res.json();
        throw new Error(err.detail || 'Error en la solicitud');
    }
    return res.json();
}

// Modal Functions
window.selectedPlanCode = '';
window.selectedPlanCost = 0;

function openPlanModal(button, planName, price, planCode) {
    const modal = document.getElementById('planModal');
    const title = document.getElementById('modalPlanName');
    const priceEl = document.getElementById('modalPlanPrice');
    const summaryContainer = document.querySelector('#modalPlanSummary .plan-features');
    const waBtn = document.getElementById('whatsappModalBtn');
    
    window.selectedPlanCode = planCode || planName;
    window.selectedPlanCost = price || 0;
    
    if (modal && title) {
        title.innerText = planName;
        if (priceEl && price !== undefined) {
            priceEl.innerText = `$${price.toLocaleString('es-MX')} MXN`;
        }
        
        if (waBtn && price !== undefined) {
            const msg = encodeURIComponent(`¡Hola! Quisiera más información y reservar el plan ${planName} ($${price.toLocaleString('es-MX')} MXN) en Chispa.`);
            waBtn.href = `https://wa.me/525587989223?text=${msg}`;
        }
        
        const planForm = document.getElementById('planForm');
        const paymentSuccess = document.getElementById('paymentSuccess');
        if(planForm) planForm.style.display = 'block';
        if(paymentSuccess) paymentSuccess.style.display = 'none';
        
        // Copiar las características del plan seleccionado
        if (summaryContainer && button) {
            const card = button.closest('.plan-card');
            if (card) {
                const features = card.querySelector('.plan-features');
                if (features) {
                    summaryContainer.innerHTML = features.innerHTML;
                }
            }
        }
        
        modal.style.display = 'flex';
    }
}

function closePlanModal() {
    const modal = document.getElementById('planModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

function processPayment(event) {
    event.preventDefault();
    const btn = document.getElementById('payButton');
    if (!btn) return;
    
    const originalText = btn.innerHTML;
    
    btn.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: middle; animation: spin 1s linear infinite;"><line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line></svg> Procesando...';
    btn.disabled = true;
    
    setTimeout(() => {
        btn.innerHTML = originalText;
        btn.disabled = false;
        document.getElementById('planForm').style.display = 'none';
        document.getElementById('paymentSuccess').style.display = 'block';
    }, 2000);
}

window.onclick = function(event) {
    const modal = document.getElementById('planModal');
    if (event.target === modal) {
        closePlanModal();
    }
}

// ==========================================================================
// WORKSHOP CAROUSEL CONTROLLER
// ==========================================================================
function initWorkshopsCarousel() {
    const container = document.getElementById('workshopsCarousel');
    const track = document.getElementById('carouselTrack');
    if (!container || !track) return;

    const slides = Array.from(track.querySelectorAll('.workshop-slide'));
    const prevBtn = document.getElementById('prevSlideBtn');
    const nextBtn = document.getElementById('nextSlideBtn');
    const pagination = document.getElementById('carouselPagination');
    if (!slides.length) return;

    let currentIndex = 0;
    let autoplayTimer = null;

    // Generate pagination dots
    pagination.innerHTML = '';
    slides.forEach((_, i) => {
        const dot = document.createElement('button');
        dot.className = `carousel-dot ${i === 0 ? 'active' : ''}`;
        dot.setAttribute('aria-label', `Ver taller ${i + 1}`);
        dot.addEventListener('click', () => {
            goToSlide(i);
            resetAutoplay();
        });
        pagination.appendChild(dot);
    });

    const dots = Array.from(pagination.querySelectorAll('.carousel-dot'));

    function updateSlideClasses() {
        slides.forEach((s, idx) => {
            if (idx === currentIndex) {
                s.classList.add('active');
            } else {
                s.classList.remove('active');
            }
        });
        dots.forEach((d, idx) => {
            if (idx === currentIndex) {
                d.classList.add('active');
            } else {
                d.classList.remove('active');
            }
        });
    }

    function goToSlide(index) {
        if (index < 0) {
            currentIndex = slides.length - 1;
        } else if (index >= slides.length) {
            currentIndex = 0;
        } else {
            currentIndex = index;
        }
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
        updateSlideClasses();
    }

    function nextSlide() {
        goToSlide(currentIndex + 1);
    }

    function prevSlide() {
        goToSlide(currentIndex - 1);
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            prevSlide();
            resetAutoplay();
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            nextSlide();
            resetAutoplay();
        });
    }

    function startAutoplay() {
        if (autoplayTimer) clearInterval(autoplayTimer);
        autoplayTimer = setInterval(nextSlide, 5500);
    }

    function resetAutoplay() {
        startAutoplay();
    }

    container.addEventListener('mouseenter', () => {
        if (autoplayTimer) clearInterval(autoplayTimer);
    });

    container.addEventListener('mouseleave', () => {
        startAutoplay();
    });

    // Touch / Swipe
    let touchStartX = 0;
    let touchEndX = 0;

    container.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    container.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        const diff = touchStartX - touchEndX;
        if (Math.abs(diff) > 40) {
            if (diff > 0) nextSlide();
            else prevSlide();
            resetAutoplay();
        }
    }, { passive: true });

    startAutoplay();
}

// ==========================================================================
// MARQUEE GALLERY CONTROLLER (CALM, SMOOTH & DRAGGABLE)
// ==========================================================================
function initMarqueeGallery() {
    const container = document.getElementById('marqueeContainer');
    const track = document.getElementById('marqueeTrack');
    if (!container || !track) return;

    // Remove CSS animation so JS has silky 60fps control
    track.style.animation = 'none';

    let currentX = 0;
    let targetX = 0;
    let isHovered = false;
    let isManuallyPaused = false;
    let isDragging = false;
    let startX = 0;
    let dragStartX = 0;

    function getHalfWidth() {
        return track.scrollWidth / 2;
    }

    // Speed: 0.40 px per frame at 60fps = ~24 px/sec (calm, relaxing glide, 10x slower than previous 214px/s)
    const driftSpeed = 0.40;

    function animate() {
        if (!isHovered && !isManuallyPaused && !isDragging) {
            targetX -= driftSpeed;
        }

        // Smooth easing towards targetX for buttery button presses and drag releases
        currentX += (targetX - currentX) * 0.12;

        const halfWidth = getHalfWidth();
        if (halfWidth > 50) {
            while (currentX <= -halfWidth) {
                currentX += halfWidth;
                targetX += halfWidth;
            }
            while (currentX > 0) {
                currentX -= halfWidth;
                targetX -= halfWidth;
            }
        }

        track.style.transform = `translate3d(${currentX}px, 0, 0)`;
        requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);

    // Pause on hover
    container.addEventListener('mouseenter', () => { isHovered = true; });
    container.addEventListener('mouseleave', () => { isHovered = false; });

    // Mouse drag support
    container.addEventListener('mousedown', (e) => {
        isDragging = true;
        startX = e.clientX;
        dragStartX = targetX;
        container.style.cursor = 'grabbing';
    });

    window.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        const deltaX = e.clientX - startX;
        targetX = dragStartX + deltaX;
        currentX = targetX;
    });

    window.addEventListener('mouseup', () => {
        if (isDragging) {
            isDragging = false;
            container.style.cursor = 'grab';
        }
    });

    // Touch support for mobile / tablets
    container.addEventListener('touchstart', (e) => {
        isDragging = true;
        startX = e.touches[0].clientX;
        dragStartX = targetX;
    }, { passive: true });

    container.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        const deltaX = e.touches[0].clientX - startX;
        targetX = dragStartX + deltaX;
        currentX = targetX;
    }, { passive: true });

    container.addEventListener('touchend', () => {
        isDragging = false;
    });

    // Nav Buttons
    const prevBtn = document.getElementById('marqueePrevBtn');
    const nextBtn = document.getElementById('marqueeNextBtn');
    const pauseBtn = document.getElementById('marqueePauseBtn');

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            targetX += 340; // Shift by 1 card width
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            targetX -= 340; // Shift by 1 card width
        });
    }

    if (pauseBtn) {
        const iconPause = pauseBtn.querySelector('.icon-pause');
        const iconPlay = pauseBtn.querySelector('.icon-play');

        pauseBtn.addEventListener('click', () => {
            isManuallyPaused = !isManuallyPaused;
            if (iconPause && iconPlay) {
                iconPause.style.display = isManuallyPaused ? 'none' : 'block';
                iconPlay.style.display = isManuallyPaused ? 'block' : 'none';
            }
            pauseBtn.setAttribute('title', isManuallyPaused ? 'Reanudar carrusel' : 'Pausar carrusel');
            pauseBtn.setAttribute('aria-label', isManuallyPaused ? 'Reanudar carrusel' : 'Pausar carrusel');
        });
    }
}

function initAllCarousels() {
    initWorkshopsCarousel();
    initMarqueeGallery();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAllCarousels);
} else {
    initAllCarousels();
}

