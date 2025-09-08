const input = document.getElementById('markdown-input');
const preview = document.getElementById('preview');

// Initialize preview
updatePreview();

// Listen for input changes
input.addEventListener('input', updatePreview);

function updatePreview() {
    const markdownText = input.value;
    const html = marked(markdownText);
    preview.innerHTML = html;
}

// Theme switcher
function setTheme(theme) {
    document.body.className = theme;
}

// Set default theme
setTheme('light');