// theme.js
function initTheme() {
    const savedTheme = localStorage.getItem('ejp-theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
    
    document.documentElement.setAttribute('data-theme', theme);
    updateThemeIcon(theme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('ejp-theme', newTheme);
    updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
    const icon = document.getElementById('theme-icon');
    if (!icon) return;
    icon.innerHTML = theme === 'dark' ? '<i class="ph ph-sun text-lg"></i>' : '<i class="ph ph-moon text-lg"></i>';
}

document.addEventListener('DOMContentLoaded', initTheme);
window.toggleTheme = toggleTheme;
