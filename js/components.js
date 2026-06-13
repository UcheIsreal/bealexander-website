/* ============================================================
   BEALEXANDER — Shared Components (Nav + Footer)
   ============================================================ */

(function () {
  const isRoot = !window.location.pathname.includes('/pages/');
  const base = isRoot ? '' : '../';

  /* ── NAV ── */
  function renderNav() {
    const el = document.getElementById('site-nav');
    if (!el) return;

    const currentPath = window.location.pathname;
    const links = [
      { href: base + 'index.html', label: 'Home' },
      { href: base + 'pages/about.html', label: 'About' },
      {
        label: 'Services',
        dropdown: [
          { href: base + 'pages/services.html',           label: 'All Services' },
          { href: base + 'pages/services.html#paid-ads',  label: 'Paid Advertising' },
          { href: base + 'pages/services.html#seo',       label: 'SEO' },
          { href: base + 'pages/services.html#email',     label: 'Email Marketing' },
          { href: base + 'pages/services.html#ai',        label: 'AI Marketing' },
          { href: base + 'pages/services.html#web',       label: 'Web Development' },
        ]
      },
      { href: base + 'pages/blog.html',    label: 'Blog' },
      { href: base + 'pages/contact.html', label: 'Contact' },
    ];

    const linksHtml = links.map(link => {
      if (link.dropdown) {
        return `
          <li class="has-dropdown">
            <a href="#">${link.label} &#9660;</a>
            <div class="nav__dropdown">
              ${link.dropdown.map(d => `<a href="${d.href}">${d.label}</a>`).join('')}
            </div>
          </li>`;
      }
      const active = currentPath.endsWith(link.href.split('/').pop()) ? ' class="active"' : '';
      return `<li><a href="${link.href}"${active}>${link.label}</a></li>`;
    }).join('');

    /* Inject nav + mobile menu as siblings inside #site-nav */
    el.innerHTML = `
      <nav class="nav" id="main-nav">
        <div class="nav__inner">

          <a href="${base}index.html" class="nav__logo">
            <div class="nav__logo-mark">B</div>
            <span class="nav__logo-text">Be<span>Alexander</span></span>
          </a>

          <ul class="nav__links">${linksHtml}</ul>

          <div class="nav__cta">
            <a href="${base}pages/blog.html"    class="btn btn--ghost"    style="padding:9px 18px;font-size:13px">Blog</a>
            <a href="${base}pages/contact.html" class="btn btn--primary"  style="padding:9px 20px;font-size:13px">Free Strategy Call</a>
          </div>

          <button class="nav__hamburger" id="hamburger-btn" aria-label="Open menu" type="button">
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>

      <!-- Mobile Menu — separate from nav, full-screen overlay -->
      <div class="mobile-menu" id="mobile-menu" aria-hidden="true">
        <div class="mobile-menu__header">
          <a href="${base}index.html" class="nav__logo">
            <div class="nav__logo-mark">B</div>
            <span class="nav__logo-text">Be<span>Alexander</span></span>
          </a>
          <button class="mobile-menu__close" id="mobile-close-btn" aria-label="Close menu" type="button">&#10005;</button>
        </div>
        <nav class="mobile-menu__links">
          <a href="${base}index.html">Home</a>
          <a href="${base}pages/about.html">About</a>
          <a href="${base}pages/services.html">Services</a>
          <a href="${base}pages/blog.html">Blog</a>
          <a href="${base}pages/contact.html">Contact</a>
        </nav>
        <div style="padding:24px 0">
          <a href="${base}pages/contact.html" class="btn btn--primary btn--lg" style="width:100%;justify-content:center;display:flex">
            Book Free Strategy Session &#8594;
          </a>
        </div>
      </div>
    `;

    /* ── Wire up mobile menu immediately after injection ── */
    const hamburger  = document.getElementById('hamburger-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const closeBtn   = document.getElementById('mobile-close-btn');

    function openMenu() {
      mobileMenu.classList.add('open');
      mobileMenu.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';   /* prevent page scroll behind overlay */
    }

    function closeMenu() {
      mobileMenu.classList.remove('open');
      mobileMenu.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }

    hamburger.addEventListener('click',  openMenu);
    closeBtn.addEventListener('click',   closeMenu);

    /* Close if user taps outside the menu panel */
    mobileMenu.addEventListener('click', function(e) {
      if (e.target === mobileMenu) closeMenu();
    });

    /* Close on nav link tap (so menu dismisses on navigation) */
    mobileMenu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', closeMenu);
    });
  }

  /* ── FOOTER ── */
  function renderFooter() {
    const el = document.getElementById('site-footer');
    if (!el) return;

    el.innerHTML = `
      <footer class="footer">
        <div class="footer__cta-strip">
          <p>Ready to Be the Alexander of Your Market?</p>
          <a href="${base}pages/contact.html">Book a Free Strategy Call &#8594;</a>
        </div>

        <div class="container">
          <div class="footer__grid">
            <div class="footer__brand">
              <div class="footer__brand-logo">
                <div class="footer__brand-mark">B</div>
                <span class="footer__brand-name">Be<span>Alexander</span></span>
              </div>
              <span class="badge badge--blue" style="margin-bottom:14px">&#129302; AI Marketing Agency</span>
              <p class="footer__statement">We do not just run campaigns. We conquer markets. BeAlexander is a global AI-powered digital marketing agency that takes your business as our own and does not stop until you lead your industry.</p>
              <p style="font-size:12px;color:rgba(255,255,255,0.35);margin-bottom:14px;font-style:italic">Be Alexander. Conquer Your Market.</p>
              <div class="footer__socials">
                <div class="footer__social" title="LinkedIn">in</div>
                <div class="footer__social" title="Instagram">ig</div>
                <div class="footer__social" title="Twitter/X">&#120143;</div>
                <div class="footer__social" title="Facebook">f</div>
                <div class="footer__social" title="WhatsApp">wa</div>
              </div>
            </div>

            <div>
              <p class="footer__col-title">Company</p>
              <ul class="footer__col-links">
                <li><a href="${base}pages/about.html">About Us</a></li>
                <li><a href="#">Case Studies</a></li>
                <li><a href="${base}pages/blog.html">Blog &amp; Insights</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="${base}pages/contact.html">Contact Us</a></li>
              </ul>
            </div>

            <div>
              <p class="footer__col-title">Services</p>
              <ul class="footer__col-links">
                <li><a href="${base}pages/services.html#paid-ads">Paid Advertising</a></li>
                <li><a href="${base}pages/services.html#seo">SEO Services</a></li>
                <li><a href="${base}pages/services.html#email">Email Marketing</a></li>
                <li><a href="${base}pages/services.html#ai">AI Marketing</a></li>
                <li><a href="${base}pages/services.html#web">Web Development</a></li>
              </ul>
            </div>

            <div>
              <p class="footer__col-title">Industries</p>
              <ul class="footer__col-links">
                <li><a href="#">E-commerce</a></li>
                <li><a href="#">Health &amp; Wellness</a></li>
                <li><a href="#">Finance &amp; Fintech</a></li>
                <li><a href="#">B2B &amp; SaaS</a></li>
                <li><a href="#">Real Estate</a></li>
              </ul>
            </div>

            <div>
              <p class="footer__col-title">We Operate In</p>
              <ul class="footer__col-links">
                <li><a href="#">&#127472;&#127468; Nigeria</a></li>
                <li><a href="#">&#127482;&#127480; United States</a></li>
                <li><a href="#">&#127468;&#127463; United Kingdom</a></li>
                <li><a href="#">&#127464;&#127462; Canada</a></li>
                <li><a href="#">&#127462;&#127482; Australia</a></li>
              </ul>
            </div>
          </div>

          <div class="footer__bottom">
            <span class="footer__bottom-left">&#169; 2025 BeAlexander. All Rights Reserved.</span>
            <div class="footer__bottom-center">
              <span>AI Marketing Agency</span>
              <span>&#183;</span>
              <span>Digital Marketing Agency</span>
              <span>&#183;</span>
              <span>bealexander.com</span>
            </div>
            <div class="footer__bottom-right">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    `;
  }

  /* Auto-render */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => { renderNav(); renderFooter(); });
  } else {
    renderNav();
    renderFooter();
  }
})();
