// this one this text Animation
const roles = ["UI/UX Designer", "Web Developer"];
let index = 0;
let charIndex = 0;
let currentRole = '';
let isDeleting = false;
const textElement = document.getElementById("animated-text");

function typeEffect() {
    if (index >= roles.length) index = 0;
    currentRole = roles[index];

    if (isDeleting) {
        textElement.textContent = currentRole.substring(0, charIndex--);
        if (charIndex < 0) {
            isDeleting = false;
            index++;
        }
    } else {
        textElement.textContent = currentRole.substring(0, charIndex++);
        if (charIndex > currentRole.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1000); // pause before deleting
            return;
        }
    }
    setTimeout(typeEffect, isDeleting ? 60 : 120);
}

document.addEventListener("DOMContentLoaded", typeEffect);

// open popup resume click
  function showPopup(message) {
    const toast = document.getElementById('popup-toast');
    toast.textContent = message;
    toast.classList.add('show');

    setTimeout(() => {
      toast.classList.remove('show');
    }, 2000); // hides after 2 seconds
  }

