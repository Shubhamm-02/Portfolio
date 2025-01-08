// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      document.getElementById(targetId).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Form validation
const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent default form submission

  const name = form.querySelector('input[placeholder="Your Name"]').value.trim();
  const email = form.querySelector('input[placeholder="Your Email"]').value.trim();
  const message = form.querySelector('textarea').value.trim();

  if (name === '' || email === '' || message === '') {
    alert('Please fill in all fields!');
  } else {
    alert('Thank you for reaching out! I will get back to you soon.');
    form.reset(); // Clear the form fields
  }
});

  