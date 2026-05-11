import fr from './fr.js';
import en from './en.js';

const translations = { fr, en };

function applyTranslations(lang) {
    const t = translations[lang] || translations['fr'];
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = t[key];
            } else {
                el.textContent = t[key];
            }
        }
    });
    document.documentElement.setAttribute('lang', lang);
    localStorage.setItem('ejp-lang', lang);
}

function initI18n() {
    const saved = localStorage.getItem('ejp-lang') || navigator.language.slice(0, 2) || 'fr';
    const supported = ['fr', 'en'];
    const lang = supported.includes(saved) ? saved : 'fr';
    applyTranslations(lang);
    
    // Setup language switcher listeners if they exist
    const switcher = document.getElementById('lang-switcher');
    if (switcher) {
        switcher.value = lang;
        switcher.addEventListener('change', (e) => applyTranslations(e.target.value));
    }
}

document.addEventListener('DOMContentLoaded', initI18n);
window.applyTranslations = applyTranslations;
