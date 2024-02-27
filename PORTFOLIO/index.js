const introText = document.querySelector('.intro-text');
  const typingDuration = 40; // Duration for typing animation 1
  const typing2Duration = 60; // Duration for typing animation 2
  const totalDuration = typingDuration + typing2Duration; // Total duration including both animations

  // Function to switch between animations
  function switchAnimation() {
    introText.classList.toggle('typing');
    introText.classList.toggle('typing2');
  }

  // Initial setup
  introText.style.animation = `typing ${typingDuration}s steps(20), blink 1s infinite`;
  setTimeout(switchAnimation, typingDuration * 1000);

  // Switch animations periodically
  setInterval(() => {
    switchAnimation();
    setTimeout(switchAnimation, typingDuration * 1000);
  }, totalDuration * 1000);