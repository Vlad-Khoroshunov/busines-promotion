// theme-toggle.js
(function () {
  const STORAGE_KEY = 'site-night-theme';
  const BODY_CLASS = 'night-theme';

  const themeButtons = Array.from(document.querySelectorAll('.night-btn'));
  const body = document.body;

  function setButtonsState(isOn) {
    themeButtons.forEach(btn => {
      btn.setAttribute('aria-pressed', String(!!isOn));
      // Если хотите менять иконку — раскомментируйте и укажите свои пути
      // const img = btn.querySelector('img');
      // if (img) img.src = isOn ? './image/night-on.svg' : './image/night-off.svg';
    });
  }

  function applyTheme(isOn, save = true) {
    if (isOn) body.classList.add(BODY_CLASS);
    else body.classList.remove(BODY_CLASS);

    setButtonsState(isOn);

    if (save) {
      try {
        localStorage.setItem(STORAGE_KEY, isOn ? '1' : '0');
      } catch (e) {
        // Игнорируем ошибки localStorage
      }
    }
  }

  function toggleTheme() {
    const isOn = body.classList.contains(BODY_CLASS);
    applyTheme(!isOn);
  }

  function init() {
    // Если кнопок нет — ничего не делаем
    if (!themeButtons.length) return;

    let saved = null;
    try {
      saved = localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      saved = null;
    }

    if (saved === '1') {
      applyTheme(true, false);
    } else if (saved === '0') {
      applyTheme(false, false);
    } else {
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      applyTheme(prefersDark, false);
    }

    themeButtons.forEach(btn => {
      btn.addEventListener('click', toggleTheme);
      btn.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toggleTheme();
        }
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
