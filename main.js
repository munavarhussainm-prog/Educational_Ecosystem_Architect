// Simple smooth scroll for navigation
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Fullscreen image viewer logic
const viewer = document.getElementById('imageViewer');
const viewerImage = document.getElementById('viewerImage');
const closeViewer = document.querySelector('.close-viewer');

document.querySelectorAll('.gallery-image').forEach(img => {
  img.addEventListener('click', () => {
    viewerImage.src = img.src;
    viewer.classList.add('active');
    viewer.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  });
});

closeViewer.addEventListener('click', () => {
  viewer.classList.remove('active');
  viewer.setAttribute('aria-hidden', 'true');
  viewerImage.src = '';
  document.body.style.overflow = '';
});

// Close on background click
viewer.addEventListener('click', (e) => {
  if (e.target === viewer) {
    closeViewer.click();
  }
});
