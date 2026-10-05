const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const original =         // Testimonials Slider Navigation
        function scrollTestimonials(direction) {
            const track = document.getElementById('testimonialsTrack');
            if (track) {
                track.scrollBy({ left: direction * 360, behavior: 'smooth' });
            }
        };

const replacement =         // Testimonials Slider Navigation & Auto-scroll
        let testimonialsHovered = false;
        function scrollTestimonials(direction) {
            const track = document.getElementById('testimonialsTrack');
            if (track) {
                if (direction === 1 && track.scrollLeft + track.clientWidth >= track.scrollWidth - 10) {
                    track.scrollTo({ left: 0, behavior: 'smooth' });
                } else {
                    track.scrollBy({ left: direction * 360, behavior: 'smooth' });
                }
            }
        }
        
        document.addEventListener("DOMContentLoaded", function() {
            const track = document.getElementById('testimonialsTrack');
            if (track) {
                setInterval(() => {
                    if (!testimonialsHovered) {
                        scrollTestimonials(1);
                    }
                }, 4000);
                
                track.addEventListener('mouseenter', () => testimonialsHovered = true);
                track.addEventListener('mouseleave', () => testimonialsHovered = false);
                track.addEventListener('touchstart', () => testimonialsHovered = true);
                track.addEventListener('touchend', () => { setTimeout(() => testimonialsHovered = false, 2000); });
            }
        });;

html = html.replace(original, replacement);
fs.writeFileSync('index.html', html, 'utf8');
