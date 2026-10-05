const fs = require('fs');
let html = fs.readFileSync('checkout.html', 'utf8');

const replacement = `<style>
            .marquee-hero { padding: 0 !important; margin-bottom: 3rem !important; border-radius: 16px; background: #000; display: flex; align-items: center; min-height: 250px; }
            .marquee-hero::before, .marquee-hero::after { display: none !important; }
            .marquee-hero .marquee-img { height: 250px; border-radius: 0; filter: brightness(0.6); }
            .marquee-hero .marquee-track { padding-left: 0; gap: 0; }
        </style>
        
        <!-- Hero Marquee Gallery -->
        <div class="marquee-container marquee-hero">
            <div style="position: absolute; top:0; left:0; width:100%; height:100%; background: rgba(0,25,45,0.4); z-index: 10;"></div>
            
            <div class="text-center" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); z-index: 20; width: 100%; padding: 0 1rem;">
                <h1 class="section-title" style="margin-bottom: 0.4rem; text-transform: uppercase; color: white;">CHISPA PRIVATE ACCESS</h1>
                <p style="font-size: 1.25rem; color: rgba(255,255,255,0.95); font-family: var(--font-body); margin: 0; font-weight: 500;">Elige tu experiencia</p>
            </div>

            <div class="marquee-track">`;

html = html.replace(/<div class="text-center"[\s\S]*?<div class="marquee-track">/, replacement);
fs.writeFileSync('checkout.html', html, 'utf8');
