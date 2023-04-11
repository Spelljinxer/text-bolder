function toggleDarkMode() {
    const body = document.querySelector('body');
    body.classList.toggle('dark-mode');
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    const toggleSwitch = document.querySelector('.toggle-switch input[type="checkbox"]');
    toggleSwitch.addEventListener('change', toggleDarkMode);
  });