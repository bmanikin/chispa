const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const original = `<a href="https://www.instagram.com/chispaexperience/" target="_blank" rel="noopener" class="btn-primary" style="display: inline-flex; align-items: center; justify-content: center; width: 44px; height: 44px; border-radius: 50%; text-decoration: none; border: none; padding: 0;">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                        </a>
                        <a href="https://wa.me/525587989223?text=Hola%2C%20me%20gustar%C3%ADa%20recibir%20informaci%C3%B3n%20sobre%20los%20pr%C3%B3ximos%20talleres%20y%20actividades%20en%20Chispa." target="_blank" rel="noopener" class="btn-secondary" style="display: inline-flex; align-items: center; justify-content: center; width: 44px; height: 44px; border-radius: 50%; text-decoration: none; border: none; padding: 0;">`;

const replacement = `<a href="https://www.instagram.com/chispaexperience/" target="_blank" rel="noopener" class="btn-primary" style="display: inline-flex; align-items: center; justify-content: center; width: 44px; height: 44px; border-radius: 50%; text-decoration: none; border: none; padding: 0;">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                        </a>
                        <a href="https://www.tiktok.com/@chispa.experience" target="_blank" rel="noopener" class="btn-secondary" style="background: #111; display: inline-flex; align-items: center; justify-content: center; width: 44px; height: 44px; border-radius: 50%; text-decoration: none; border: none; padding: 0; color: white;">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
                        </a>
                        <a href="https://wa.me/525587989223?text=Hola%2C%20me%20gustar%C3%ADa%20recibir%20informaci%C3%B3n%20sobre%20los%20pr%C3%B3ximos%20talleres%20y%20actividades%20en%20Chispa." target="_blank" rel="noopener" class="btn-secondary" style="display: inline-flex; align-items: center; justify-content: center; width: 44px; height: 44px; border-radius: 50%; text-decoration: none; border: none; padding: 0;">`;

html = html.replace(original, replacement);
fs.writeFileSync('index.html', html, 'utf8');
