export const fadeIn = (element, duration = 500) => {
  element.style.opacity = 0;
  element.style.display = "block";

  let start = null;
  const animate = (timestamp) => {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    const opacity = Math.min(progress / duration, 1);
    element.style.opacity = opacity;

    if (progress < duration) {
      window.requestAnimationFrame(animate);
    }
  };

  window.requestAnimationFrame(animate);
};

export const fadeOut = (element, duration = 500) => {
  let start = null;
  const animate = (timestamp) => {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    const opacity = Math.max(1 - progress / duration, 0);
    element.style.opacity = opacity;

    if (progress < duration) {
      window.requestAnimationFrame(animate);
    } else {
      element.style.display = "none";
    }
  };

  window.requestAnimationFrame(animate);
};

export const scrollTo = (element, duration = 800) => {
  const targetPosition = element.getBoundingClientRect().top;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - 100; // Offset for header
  let startTime = null;

  const animation = (currentTime) => {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  };

  const easeInOutQuad = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };

  requestAnimationFrame(animation);
};
