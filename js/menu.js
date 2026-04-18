// 1. Находим кнопку-бургер в документе
const burgerBtn = document.querySelector('.burger-btn');

// 2. Находим кнопку-крестик внутри мобильного меню
const closeBtn = document.querySelector('.close-btn');

// 3. Находим само мобильное меню
const mobileMenu = document.querySelector('.mobile-menu');


// 4. Когда пользователь нажимает на бургер
burgerBtn.addEventListener('click', () => {

  // Добавляем класс .open — меню выезжает справа
  mobileMenu.classList.add('open');

  // Скрываем кнопку-бургер, чтобы не было двух кнопок одновременно
  burgerBtn.style.display = 'none';
});


// 5. Когда пользователь нажимает на крестик
closeBtn.addEventListener('click', () => {

  // Убираем класс .open — меню уезжает обратно вправо
  mobileMenu.classList.remove('open');

  // Возвращаем кнопку-бургер обратно
  burgerBtn.style.display = 'block';
});