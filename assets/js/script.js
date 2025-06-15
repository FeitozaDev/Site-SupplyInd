// =======================
// 1. SLIDES DE DEPOIMENTOS + TYPING EFFECT
// =======================
window.onload = () => {
  // --- Depoimentos em Slides ---
  let slideAtual = 0;
  const slides = document.querySelectorAll('#depoimentosSlides .slide');

  function mostrarSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('ativo', i === index);
    });
  }

  window.mudarDepoimento = (direcao) => {
    slideAtual += direcao;
    if (slideAtual < 0) slideAtual = slides.length - 1;
    if (slideAtual >= slides.length) slideAtual = 0;
    mostrarSlide(slideAtual);
  };

  mostrarSlide(slideAtual);

  setInterval(() => {
    mudarDepoimento(1);
  }, 6000);

  // --- Efeito de digitação no título quando a seção entra na tela ---
  const texto = 'Confiança Gera<br>Resultados.';
  const element = document.getElementById('typewriter');
  let i = 0;
  let jaDigitou = false;

  function typeWriter() {
    element.innerHTML = texto.slice(0, i);
    i++;
    if (i <= texto.length) {
      setTimeout(typeWriter, 100);
    }
  }

  function checarTypewriterNaTela() {
    const section = document.querySelector('.depoimentos-clientes');
    if (!section) return;
    const rect = section.getBoundingClientRect();
    const estaVisivel = rect.top < window.innerHeight && rect.bottom > 0;
    if (estaVisivel && !jaDigitou) {
      jaDigitou = true;
      typeWriter();
      window.removeEventListener('scroll', checarTypewriterNaTela);
    }
  }

  window.addEventListener('scroll', checarTypewriterNaTela);
  checarTypewriterNaTela();
};

// =======================
// 2. PRODUTOS HORIZONTAL SCROLL
// =======================
document.addEventListener("DOMContentLoaded", () => {
  // --- Navegação horizontal em produtos destaque ---
  const list = document.querySelector('.produtos-destaque-horizontal-list');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');

  if (prevBtn && nextBtn && list) {
    prevBtn.addEventListener('click', () => {
      list.scrollBy({ left: -380, behavior: 'smooth' });
    });
    nextBtn.addEventListener('click', () => {
      list.scrollBy({ left: 380, behavior: 'smooth' });
    });
  }

  // =======================
  // 3. CONTADOR ANIMADO
  // =======================
  const counters = document.querySelectorAll('.stat-number');
  let started = false;

  function animateCounters() {
    if (started) return;
    counters.forEach(counter => {
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

  // =======================
  // 4. MENU DROPDOWN COM DELAY
  // =======================
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

  // =======================
  // 5. SPLASH SCREEN + ANIMAÇÕES DE ENTRADA E POPUPS
  // =======================
  const splash = document.getElementById('splash-supply');
  document.body.style.overflow = 'hidden';
  setTimeout(() => {
    if (splash) {
      splash.style.opacity = '0';
      setTimeout(() => {
        splash.style.display = 'none';
        document.body.style.overflow = '';

        // Fade-in animado ao entrar na tela
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

        // Popup de captação
        if (!sessionStorage.getItem('popupCaptacaoApareceu')) {
          setTimeout(() => {
            const popup = document.getElementById('popup-captacao');
            if (popup) {
              popup.classList.add('show');
              sessionStorage.setItem('popupCaptacaoApareceu', 'true');
            }
          }, 500);
        }

        // Botão do WhatsApp
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

  // =======================
  // 6. BANNER DE COOKIES
  // =======================
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

// =======================
// 7. FECHAR POPUP DE CAPTAÇÃO E SLIDE BLOG
// =======================
document.addEventListener('click', function (e) {
  const popup = document.getElementById('popup-captacao');
  if (popup && popup.classList.contains('show')) {
    if (e.target === popup || e.target.classList.contains('popup-close')) {
      popup.classList.remove('show');
    }
  }
});

// =======================
// 8. SLIDE DE BLOG
// =======================
document.addEventListener('DOMContentLoaded', () => {
  let blogSlideAtual = 0;
  const blogSlides = document.querySelectorAll('#blogSlides .blog-slide');
  const totalBlogSlides = blogSlides.length;

  function mostrarBlogSlide(index) {
    blogSlides.forEach((slide, i) => {
      slide.classList.toggle('ativo', i === index);
    });
  }

  window.slideBlog = function(direcao) {
    blogSlideAtual += direcao;
    if (blogSlideAtual < 0) blogSlideAtual = totalBlogSlides - 1;
    if (blogSlideAtual >= totalBlogSlides) blogSlideAtual = 0;
    mostrarBlogSlide(blogSlideAtual);
  };

  // Iniciar mostrando o primeiro slide
  mostrarBlogSlide(blogSlideAtual);

  // Slide automático
  setInterval(() => { window.slideBlog(1); }, 9000);
});