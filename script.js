// // Form Submission (Simulating)
// const form = document.querySelector('form');

// form.addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevents page reload

//     const name = form.querySelector('input[type="text"]').value;
//     const email = form.querySelector('input[type="email"]').value;
//     const message = form.querySelector('textarea').value;

//     if (name && email && message) {
//         alert(`Thank you, ${name}! Your message has been sent.`);
//         form.reset(); // Clears form fields
//     } else {
//         alert('Please fill out all fields before submitting.');
//     }
// });

// Smooth Scrolling for Navbar Links
const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});
