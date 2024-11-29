window.addEventListener('DOMContentLoaded', () => {
  const navBtn = document.querySelectorAll('.navBtn');
  const header = document.getElementById('headerDiv');
  const getStartedBtn = document.querySelector('.getStartedBtn');

  const changeColor = () => {
    if (window.scrollY > 330) {
      header.classList.add('scrolled');
      getStartedBtn.classList.add('scrolledStarted');
      navBtn.forEach((btn) => btn.classList.add('scrolled'));
    } else {
      header.classList.remove('scrolled');
      getStartedBtn.classList.remove('scrolledStarted');
      navBtn.forEach((btn) => btn.classList.remove('scrolled'));
    }
  };

  window.addEventListener('scroll', changeColor);
});
