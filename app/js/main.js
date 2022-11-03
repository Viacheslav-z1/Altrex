$(function () {
  const anchors = document.querySelectorAll('a[href*="#"]')
  
  for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()

      const blockID = anchor.getAttribute('href').substr(1)

      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    })
  }

  const menuBtn = document.querySelector('.header__btn'),
    menuList = document.querySelector('.menu__list'),
    body = document.querySelector('.body'),
    menuItem = document.querySelectorAll('.menu__item');

  menuBtn.addEventListener('click', function (e) {
    e.preventDefault;
    if (menuList.classList.contains('open')) {
      menuList.classList.remove('open');
      menuBtn.classList.remove('active');
      body.classList.remove('lock');
    } else {
      menuList.classList.add('open');
      menuBtn.classList.add('active');
      body.classList.add('lock');
    }
  });
  menuItem.forEach(item => {
    item.addEventListener('click', function () {
      menuList.classList.remove('open');
      menuBtn.classList.remove('active');
      body.classList.remove('lock');
    })
  });
})