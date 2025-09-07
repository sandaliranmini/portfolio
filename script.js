document.addEventListener('DOMContentLoaded', () => {
  const text = "Hello, I'm Ranmini";   // The animated text
  const el = document.getElementById('animated-text');

  if (!el) return;

  // create blinking cursor
  const cursor = document.createElement('span');
  cursor.textContent = "|";
  cursor.style.display = "inline-block";
  cursor.style.marginLeft = "5px";
  cursor.style.color = "#E4959E";
  cursor.style.animation = "blink 0.8s infinite";
  el.appendChild(cursor);

  let i = 0;
  let typing = true;
  const speed = 120;   // typing speed
  const eraseSpeed = 70; // erasing speed
  const pauseTime = 1500; // pause before erase/retype

  function typeLoop() {
    if (typing) {
      if (i < text.length) {
        el.insertBefore(document.createTextNode(text.charAt(i)), cursor);
        i++;
        setTimeout(typeLoop, speed);
      } else {
        typing = false;
        setTimeout(typeLoop, pauseTime);
      }
    } else {
      if (i > 0) {
        el.removeChild(el.childNodes[i - 1]);
        i--;
        setTimeout(typeLoop, eraseSpeed);
      } else {
        typing = true;
        setTimeout(typeLoop, pauseTime);
      }
    }
  }

  typeLoop();
});

document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelector('.slides');
  const projects = document.querySelectorAll('.project');
  const prevBtn = document.querySelector('.arrow.left');
  const nextBtn = document.querySelector('.arrow.right');

  let index = 0;

  function showSlide(n) {
    if (n < 0) {
      index = projects.length - 1;
    } else if (n >= projects.length) {
      index = 0;
    } else {
      index = n;
    }
    slides.style.transform = `translateX(-${index * 100}%)`;
  }

  prevBtn.addEventListener('click', () => showSlide(index - 1));
  nextBtn.addEventListener('click', () => showSlide(index + 1));
});
