// Add interaction: Click to alert which cartoon you clicked
document.querySelectorAll('.images img').forEach(img => {
  img.addEventListener('click', () => {
    alert(`You clicked on ${img.alt}`);
  });
});
