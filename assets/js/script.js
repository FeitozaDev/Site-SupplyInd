document.addEventListener("DOMContentLoaded", () => {


  // Simples navegação horizontal em desktop/mobile
  const list = document.querySelector('.produtos-destaque-horizontal-list');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');

  prevBtn.addEventListener('click', () => {
    list.scrollBy({ left: -380, behavior: 'smooth' });
  });
  nextBtn.addEventListener('click', () => {
    list.scrollBy({ left: 380, behavior: 'smooth' });
  });


  // 1. CONTADOR ANIMADO
  const counters = document.querySelectorAll('.stat-number');
let started = false;

function animateCounters() {
  if (started) return;

  document.querySelectorAll('.stat-number').forEach(counter => {
    const target = +counter.getAttribute('data-target');
    let count = 0;
    const increment = target / 100;

    const updateCount = () => {
      if (count < target) {
        count += increment;
        counter.innerText = Math.ceil(count);
        setTimeout(updateCount, 20);
      } else {
        counter.innerText = target.toLocaleString('pt-BR') + '+';
      }
    };

    updateCount();
  });

  started = true;
}

window.addEventListener('scroll', () => {
  const statsSection = document.getElementById('stats');
  if (!statsSection) return;

  const top = statsSection.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (top < windowHeight - 100) {
    animateCounters();
  }
});


  // 2. MENU COM DELAY
  const submenuDelay = 600;
  document.querySelectorAll('.has-dropdown').forEach(item => {
    let timeoutId;

    const showDropdown = () => {
      clearTimeout(timeoutId);
      item.classList.add('dropdown-open');
    };

    const hideDropdown = () => {
      timeoutId = setTimeout(() => {
        item.classList.remove('dropdown-open');
      }, submenuDelay);
    };

    item.addEventListener('mouseenter', showDropdown);
    item.addEventListener('mouseleave', hideDropdown);
    item.addEventListener('focusin', showDropdown);
    item.addEventListener('focusout', hideDropdown);

    const dropdown = item.querySelector('.dropdown');
    if (dropdown) {
      dropdown.addEventListener('mouseenter', showDropdown);
      dropdown.addEventListener('mouseleave', hideDropdown);
      dropdown.addEventListener('focusin', showDropdown);
      dropdown.addEventListener('focusout', hideDropdown);
    }
  });

  // 3. SPLASH SCREEN
  const splash = document.getElementById('splash-supply');
  document.body.style.overflow = 'hidden';

  setTimeout(() => {
    if (splash) {
      splash.style.opacity = '0';

      setTimeout(() => {
        splash.style.display = 'none';
        document.body.style.overflow = '';

        // 3.1 Scroll animado
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                entry.target.classList.add("visible");
              }, index * 500);
            }
          });
        }, { threshold: 0.3 });

        document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

     
     
        // 3.4 Popup de captação
        if (!sessionStorage.getItem('popupCaptacaoApareceu')) {
          setTimeout(() => {
            const popup = document.getElementById('popup-captacao');
            if (popup) {
              popup.classList.add('show');
              sessionStorage.setItem('popupCaptacaoApareceu', 'true');
            }
          }, 500);
        }

        // 3.5 Botão do WhatsApp
        const whatsBtn = document.getElementById('whatsConsultoriaBtn');
        if (whatsBtn) {
          whatsBtn.addEventListener('click', function (e) {
            e.preventDefault();

            const nome = document.getElementById('nomeCliente').value.trim();
            const email = document.getElementById('emailCliente').value.trim();

            if (!nome || !email) {
              alert('Por favor, preencha nome e email.');
              return;
            }

            const mensagem = `*Nome:* ${nome}\n*Email:* ${email}\n *Olá!* *Gostaria* *de* *Receber* *Uma* *Consultoria* *Gratuita*`;
            const numero = "5511992246276";
            const url = `https://api.whatsapp.com/send?phone=${numero}&text=${encodeURIComponent(mensagem)}`;
            window.open(url, '_blank');
          });
        }

      }, 600); // Tempo do fade-out
    }
  }, 1000); // Duração do splash

  // 4. BANNER DE COOKIES
  function setCookie(name, value, days) {
    let expires = "";
    if (days) {
      const date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + encodeURIComponent(value || "") + expires + "; path=/";
  }

  function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') c = c.substring(1);
      if (c.indexOf(nameEQ) === 0) return decodeURIComponent(c.substring(nameEQ.length));
    }
    return null;
  }

  function showCookieBanner() {
    if (!getCookie('cookiesConsent')) {
      document.getElementById('cookie-banner').style.display = 'block';
    }
  }

  function hideCookieBanner() {
    document.getElementById('cookie-banner').style.display = 'none';
  }

  function showCookiePanel() {
    document.getElementById('cookie-panel').style.display = 'flex';
  }

  function hideCookiePanel() {
    document.getElementById('cookie-panel').style.display = 'none';
  }

  function updateAcceptedLabels() {
    const analytics = document.querySelector('#cookie-form input[name="analytics"]');
    document.getElementById('accept-analytics').style.display = analytics.checked ? 'inline-block' : 'none';

    const perf = document.querySelector('#cookie-form input[name="performance"]');
    document.getElementById('accept-performance').style.display = perf.checked ? 'inline-block' : 'none';

    const mkt = document.querySelector('#cookie-form input[name="marketing"]');
    document.getElementById('accept-marketing').style.display = mkt.checked ? 'inline-block' : 'none';
  }

  function acceptAllCookies() {
    setCookie('cookiesConsent', JSON.stringify({
      essencial: true,
      analytics: true,
      performance: true,
      marketing: true
    }), 365);
    hideCookieBanner();
    hideCookiePanel();
  }

  function saveCookiePreferences() {
    const analytics = document.querySelector('#cookie-form input[name="analytics"]').checked;
    const performance = document.querySelector('#cookie-form input[name="performance"]').checked;
    const marketing = document.querySelector('#cookie-form input[name="marketing"]').checked;
    setCookie('cookiesConsent', JSON.stringify({
      essencial: true,
      analytics,
      performance,
      marketing
    }), 365);
    hideCookieBanner();
    hideCookiePanel();
  }

  function selectAllCookies() {
    document.querySelector('#cookie-form input[name="analytics"]').checked = true;
    document.querySelector('#cookie-form input[name="performance"]').checked = true;
    document.querySelector('#cookie-form input[name="marketing"]').checked = true;
    updateAcceptedLabels();
  }

  function deselectAllCookies() {
    document.querySelector('#cookie-form input[name="analytics"]').checked = false;
    document.querySelector('#cookie-form input[name="performance"]').checked = false;
    document.querySelector('#cookie-form input[name="marketing"]').checked = false;
    updateAcceptedLabels();
  }

  showCookieBanner();

  document.getElementById('accept-all-cookies').onclick = acceptAllCookies;
  document.getElementById('save-cookie-preferences').onclick = saveCookiePreferences;

  document.getElementById('customize-cookies').onclick = function () {
    hideCookieBanner();
    showCookiePanel();
    const consent = getCookie('cookiesConsent');
    if (consent) {
      try {
        const obj = JSON.parse(consent);
        document.querySelector('#cookie-form input[name="analytics"]').checked = !!obj.analytics;
        document.querySelector('#cookie-form input[name="performance"]').checked = !!obj.performance;
        document.querySelector('#cookie-form input[name="marketing"]').checked = !!obj.marketing;
      } catch (e) {}
    }
    updateAcceptedLabels();
  };

  document.getElementById('close-cookie-banner').onclick = hideCookieBanner;
  document.getElementById('close-cookie-panel').onclick = () => {
    hideCookiePanel();
    showCookieBanner();
  };

  document.querySelector('#cookie-form input[name="analytics"]').onchange = updateAcceptedLabels;
  document.querySelector('#cookie-form input[name="performance"]').onchange = updateAcceptedLabels;
  document.querySelector('#cookie-form input[name="marketing"]').onchange = updateAcceptedLabels;

  document.getElementById('select-all-cookies').onclick = e => { e.preventDefault(); selectAllCookies(); };
  document.getElementById('deselect-all-cookies').onclick = e => { e.preventDefault(); deselectAllCookies(); };

  updateAcceptedLabels();
});

// 5. FECHAR POPUP DE CAPTAÇÃO
document.addEventListener('click', function (e) {
  const popup = document.getElementById('popup-captacao');
  if (!popup || !popup.classList.contains('show')) return;
  if (e.target === popup || e.target.classList.contains('popup-close')) {
    popup.classList.remove('show');
  }
});
