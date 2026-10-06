const fs = require('fs');
let css = fs.readFileSync('static/styles.css', 'utf8');

const targetRegex = /\.desktop-nav\s*\{[\s\S]*?\.header-links\s*\.nav-link\.active\s*\{[\s\S]*?\}/;

const replacement = `.desktop-nav {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
    width: 100%;
}

.logo {
    justify-self: flex-start;
    z-index: 10;
}

.logo-img {
    height: 70px;
    mix-blend-mode: multiply;
    transition: transform 0.3s ease;
}
.logo:hover .logo-img {
    transform: scale(1.05);
}

.header-links {
    justify-self: center;
    display: flex;
    gap: 0.5rem;
    align-items: center;
}

.header-links a {
    white-space: nowrap;
}

.header-links .nav-link {
    text-transform: uppercase;
    font-weight: 600;
    font-size: 0.8rem;
    color: var(--secondary-color);
    text-decoration: none;
    letter-spacing: 0.08em;
    padding: 0.7rem 1.4rem;
    border-radius: 30px;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
}

.header-links .nav-link:hover {
    color: var(--primary-color);
    background: rgba(86, 142, 166, 0.08);
}

.header-links .nav-link.active {
    color: var(--primary-color);
    background: rgba(86, 142, 166, 0.12);
    font-weight: 700;
}`;

css = css.replace(targetRegex, replacement);

fs.writeFileSync('static/styles.css', css, 'utf8');
