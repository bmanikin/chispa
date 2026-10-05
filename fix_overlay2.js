const fs = require('fs');
let css = fs.readFileSync('static/styles.css', 'utf8');

const oldOverlay = `    .mobile-menu-overlay {
        display: flex;
        flex-direction: column;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background: #fff;
        z-index: 9999;
        left: 100%; visibility: hidden;
        transition: left 0.3s ease-in-out;
    }
    
    .mobile-menu-overlay.active {
        left: 0; visibility: visible;
    }`;

const newOverlay = `    .mobile-menu-overlay {
        display: flex;
        flex-direction: column;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background: #fff;
        z-index: 9999;
        opacity: 0;
        pointer-events: none;
        transform: translateY(-10px);
        transition: opacity 0.3s ease, transform 0.3s ease;
    }
    
    .mobile-menu-overlay.active {
        opacity: 1;
        pointer-events: auto;
        transform: translateY(0);
    }
    
    /* Ensure body doesn't scroll horizontally */
    body {
        overflow-x: hidden;
    }`;

css = css.replace(oldOverlay, newOverlay);
fs.writeFileSync('static/styles.css', css, 'utf8');
