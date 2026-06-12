/* ============================================================
   BEALEXANDER — Main JavaScript
   Navigation · Blog Engine · Animations · Utilities
   ============================================================ */

'use strict';

/* ── Storage key ── */
const BLOG_KEY = 'bealexander_posts';
const DRAFT_KEY = 'bealexander_draft';

/* ============================================================
   BLOG DATA ENGINE
   ============================================================ */
const BlogEngine = {

  /* Seed with starter posts */
  seedPosts() {
    const existing = this.getPosts();
    if (existing.length) return;
    const seed = [
      {
        id: 'post-001',
        title: 'How AI is Changing Digital Marketing in 2025 — and What Businesses Need to Do Now',
        slug: 'ai-changing-digital-marketing-2025',
        excerpt: 'Artificial intelligence is no longer a futuristic concept. In 2025, it is the engine running the most effective marketing campaigns on the planet. Here is what every business owner needs to understand.',
        content: `<h2>The AI Shift Is Already Here</h2><p>Three years ago, AI in marketing meant A/B testing automation and maybe a chatbot on your website. Today, AI is determining which audiences see your ads, what creative they see, when they see it, and at what price. If your agency is not integrating AI into your campaigns, you are competing with one hand tied behind your back.</p><h2>What AI Actually Does for Your Campaigns</h2><p>Let us be specific. Here is what modern AI enables in a marketing context:</p><ul><li><strong>Lookalike audience building</strong> — AI models analyse your existing buyers and identify the top 1% of people most likely to convert across Meta, Google, and TikTok.</li><li><strong>Dynamic creative optimisation</strong> — AI tests dozens of creative combinations simultaneously and automatically reallocates budget to winners.</li><li><strong>Predictive bidding</strong> — Instead of manual bid adjustments, AI predicts which auctions are worth winning and adjusts in real time.</li><li><strong>Content generation at scale</strong> — AI tools produce first drafts of ad copy, email sequences, and blog articles in minutes rather than days.</li></ul><h2>What Businesses Must Do Now</h2><p>The brands winning in 2025 are not the ones with the biggest budgets. They are the ones that have integrated AI into their workflow earliest. Here is a practical starting point:</p><blockquote><p>"The best time to integrate AI into your marketing was 2023. The second best time is today." — BeAlexander</p></blockquote><p>Start with your data. AI is only as powerful as the data it learns from. Ensure your Meta Pixel, Google Analytics, and CRM data are clean, connected, and feeding into your campaign systems. Without quality data, AI optimisation is guesswork dressed up in technology.</p><h2>The Bottom Line</h2><p>AI is not replacing marketers. It is replacing marketers who refuse to use AI. At BeAlexander, we have built AI into the core of every campaign we run — and the results speak for themselves.</p>`,
        category: 'AI Marketing',
        author: 'BeAlexander Team',
        date: '2025-06-01',
        readTime: '6 min read',
        status: 'published',
        color: '#2B0A6B'
      },
      {
        id: 'post-002',
        title: 'Meta Ads vs Google Ads: Which Platform Should Your Business Prioritise?',
        slug: 'meta-ads-vs-google-ads-which-to-prioritise',
        excerpt: 'The debate between Meta Ads and Google Ads is one of the most common questions we get from new clients. The honest answer is: it depends on your business. Here is how to decide.',
        content: `<h2>The Core Difference: Intent vs Discovery</h2><p>This is the fundamental distinction that should guide every media buying decision. Google Ads captures <strong>demand</strong> — people are actively searching for what you sell. Meta Ads creates <strong>demand</strong> — you are reaching people before they know they need your product.</p><p>This is not a small distinction. It changes your creative, your targeting, your funnel, and your expectations for cost per acquisition.</p><h2>When Google Ads Wins</h2><p>Google Search Ads are your best friend when:</p><ul><li>Your product or service is something people actively search for — plumbing, legal services, insurance, SaaS tools</li><li>Your sales cycle is short and decision-intent is high</li><li>You have a local business and want to capture near-me searches</li><li>You are in a B2B market where buyers research before purchasing</li></ul><h2>When Meta Ads Wins</h2><p>Meta (Facebook + Instagram) Ads dominate when:</p><ul><li>You are selling a visually compelling product — fashion, food, fitness, beauty</li><li>Your target audience has specific demographic or interest characteristics</li><li>You want to build brand awareness at scale before capturing demand</li><li>You are running e-commerce and retargeting warm audiences</li></ul><h2>The Real Answer: Both, in the Right Order</h2><p>For most businesses, the winning strategy is using Meta Ads to build awareness and create demand at the top of the funnel, and Google Ads to capture that demand when buyers reach the bottom of the funnel.</p><blockquote><p>"The question is never Meta OR Google. It is how to make them talk to each other." — BeAlexander</p></blockquote>`,
        category: 'Paid Advertising',
        author: 'BeAlexander Team',
        date: '2025-05-18',
        readTime: '8 min read',
        status: 'published',
        color: '#1A1A2E'
      },
      {
        id: 'post-003',
        title: 'The Complete Guide to Running Meta Ads for Nigerian E-Commerce Brands',
        slug: 'meta-ads-for-nigerian-ecommerce',
        excerpt: 'Running Meta Ads in Nigeria is fundamentally different from running them in the US or UK. Different buyer psychology, different payment behaviours, different trust signals. Here is the playbook.',
        content: `<h2>Why Nigerian Meta Ads Need a Different Playbook</h2><p>Most digital marketing content on Meta Ads is written for US or European markets. The CPMs are different. The payment behaviours are different. The trust signals buyers respond to are different. If you are applying a generic Western playbook to Nigerian e-commerce, you are leaving significant revenue on the table.</p><h2>Understanding the Nigerian Buyer Psychology</h2><p>Nigerian consumers are savvy. They have been burned by fake products and dishonest sellers. This means trust-building is not optional — it is the campaign. Before anyone clicks your buy button, they want to know:</p><ul><li>Is this brand real? (Social proof, testimonials, engagement count)</li><li>Will the product actually arrive? (Clear delivery information, guarantees)</li><li>Is the price fair? (Comparison to market rates)</li><li>Can I trust the payment? (Recognised payment gateways)</li></ul><h2>Campaign Structure That Works in Nigeria</h2><p>The most effective campaign structure for Nigerian e-commerce follows a three-stage approach:</p><h3>Stage 1: Broad Awareness (Cold Traffic)</h3><p>Use broad targeting with interest layering. Let Meta's algorithm do the work in the first two weeks. Nigerian internet users are mobile-first — ensure all creative is optimised for mobile vertical video.</p><h3>Stage 2: Engagement Retargeting</h3><p>Target everyone who engaged with your content, visited your product pages, or added to cart but did not purchase. This audience converts at 3-5x the rate of cold audiences in Nigerian markets.</p><h3>Stage 3: Purchase Retargeting</h3><p>Your hottest audience. Use urgency messaging and social proof. WhatsApp CTAs outperform standard purchase CTAs for Nigerian buyers.</p><blockquote><p>"In Nigeria, WhatsApp is not just a messaging app. It is a sales channel. Your Meta Ads should feed into WhatsApp conversations." — BeAlexander</p></blockquote>`,
        category: 'Paid Advertising',
        author: 'BeAlexander Team',
        date: '2025-05-05',
        readTime: '10 min read',
        status: 'published',
        color: '#D4A017'
      }
    ];
    localStorage.setItem(BLOG_KEY, JSON.stringify(seed));
  },

  getPosts() {
    try {
      return JSON.parse(localStorage.getItem(BLOG_KEY) || '[]');
    } catch { return []; }
  },

  savePost(post) {
    const posts = this.getPosts();
    const idx = posts.findIndex(p => p.id === post.id);
    if (idx > -1) {
      posts[idx] = post;
    } else {
      posts.unshift(post);
    }
    localStorage.setItem(BLOG_KEY, JSON.stringify(posts));
  },

  deletePost(id) {
    const posts = this.getPosts().filter(p => p.id !== id);
    localStorage.setItem(BLOG_KEY, JSON.stringify(posts));
  },

  getPost(id) {
    return this.getPosts().find(p => p.id === id || p.slug === id) || null;
  },

  generateId() {
    return 'post-' + Date.now();
  },

  generateSlug(title) {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  }
};

/* ============================================================
   NAVIGATION
   ============================================================ */
function initNav() {
  const nav = document.querySelector('.nav');
  if (!nav) return;

  /* Scroll effect */
  const onScroll = () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* Active link */
  const path = window.location.pathname;
  document.querySelectorAll('.nav__links a').forEach(link => {
    if (link.getAttribute('href') === path ||
        (path !== '/' && link.getAttribute('href') && path.startsWith(link.getAttribute('href')))) {
      link.classList.add('active');
    }
  });

  /* Mobile menu */
  const hamburger = document.querySelector('.nav__hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  const mobileClose = document.querySelector('.mobile-menu__close');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => mobileMenu.classList.add('open'));
    mobileClose?.addEventListener('click', () => mobileMenu.classList.remove('open'));
  }
}

/* ============================================================
   ANIMATIONS — Intersection Observer
   ============================================================ */
function initAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('[data-animate]').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(28px)';
    el.style.transition = `opacity 0.6s ease ${el.dataset.delay || '0s'}, transform 0.6s ease ${el.dataset.delay || '0s'}`;
    observer.observe(el);
  });

  /* Animate AI metrics bars */
  const barObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.ai-metric__fill').forEach(bar => {
          const width = bar.dataset.width || '0';
          setTimeout(() => { bar.style.width = width + '%'; }, 200);
        });
        barObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  document.querySelectorAll('.ai-visual').forEach(v => {
    v.querySelectorAll('.ai-metric__fill').forEach(bar => { bar.style.width = '0'; });
    barObserver.observe(v);
  });

  /* Counter animation */
  const counterObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('[data-count]').forEach(el => {
          const target = parseFloat(el.dataset.count);
          const suffix = el.dataset.suffix || '';
          const duration = 1800;
          const start = performance.now();
          const tick = (now) => {
            const p = Math.min((now - start) / duration, 1);
            const val = p * target;
            el.textContent = (Number.isInteger(target) ? Math.round(val) : val.toFixed(1)) + suffix;
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        });
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.stats-strip').forEach(s => counterObserver.observe(s));
}

/* ============================================================
   BLOG PAGE RENDERER
   ============================================================ */
function renderBlogPage() {
  const grid = document.getElementById('blog-grid');
  if (!grid) return;

  BlogEngine.seedPosts();

  const filterBtns = document.querySelectorAll('.sidebar-cat');
  let activeFilter = 'all';

  function render(filter) {
    const posts = BlogEngine.getPosts().filter(p => p.status === 'published');
    const filtered = filter === 'all' ? posts : posts.filter(p => p.category === filter);

    if (!filtered.length) {
      grid.innerHTML = `<div style="text-align:center;padding:60px;color:var(--text-light)"><p style="font-size:40px;margin-bottom:12px">📝</p><p>No posts in this category yet.</p></div>`;
      return;
    }

    grid.innerHTML = filtered.map((post, i) => `
      <article class="blog-card" data-animate data-delay="${i * 0.08}s" onclick="openPost('${post.slug || post.id}')">
        <div class="blog-card__img" style="background: linear-gradient(135deg, ${post.color || '#2B0A6B'} 0%, #1A1A2E 100%)">
          <span class="blog-card__cat">${escHtml(post.category || 'Marketing')}</span>
        </div>
        <div class="blog-card__body">
          <div class="blog-card__meta">
            <span>✍ ${escHtml(post.author || 'BeAlexander')}</span>
            <span>· ${formatDate(post.date)}</span>
            <span>· ${escHtml(post.readTime || '5 min read')}</span>
          </div>
          <h2 class="blog-card__title">${escHtml(post.title)}</h2>
          <p class="blog-card__excerpt">${escHtml(post.excerpt || '')}</p>
          <span class="blog-card__read">Read Article →</span>
        </div>
      </article>
    `).join('');

    /* Re-observe for animations */
    if (window._animObserver) {
      grid.querySelectorAll('[data-animate]').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(28px)';
        window._animObserver.observe(el);
      });
    }
  }

  render('all');

  /* Update category counts */
  const posts = BlogEngine.getPosts().filter(p => p.status === 'published');
  filterBtns.forEach(btn => {
    const cat = btn.dataset.cat;
    const countEl = btn.querySelector('span');
    if (countEl) {
      const n = cat === 'all' ? posts.length : posts.filter(p => p.category === cat).length;
      countEl.textContent = n;
    }
    btn.addEventListener('click', () => {
      activeFilter = cat;
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      render(cat);
    });
  });
}

function openPost(slug) {
  window.location.href = `post.html?id=${slug}`;
}

/* ============================================================
   BLOG POST PAGE RENDERER
   ============================================================ */
function renderPostPage() {
  const container = document.getElementById('post-content');
  if (!container) return;

  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  if (!id) { window.location.href = 'blog.html'; return; }

  BlogEngine.seedPosts();
  const post = BlogEngine.getPost(id);
  if (!post) {
    container.innerHTML = `<div style="text-align:center;padding:80px"><h2>Post not found</h2><p><a href="blog.html" style="color:var(--purple)">← Back to Blog</a></p></div>`;
    return;
  }

  /* Hero */
  const hero = document.getElementById('post-hero');
  if (hero) {
    hero.style.background = `linear-gradient(135deg, ${post.color || '#2B0A6B'} 0%, #1A1A2E 100%)`;
    hero.querySelector('.article-title').textContent = post.title;
    hero.querySelector('.article-excerpt').textContent = post.excerpt || '';

    const metaEl = hero.querySelector('.article-meta');
    if (metaEl) {
      metaEl.innerHTML = `
        <span class="badge badge--gold">${escHtml(post.category || 'Marketing')}</span>
        <span style="font-size:13px;color:rgba(255,255,255,0.45)">${formatDate(post.date)}</span>
        <span style="font-size:13px;color:rgba(255,255,255,0.45)">· ${escHtml(post.readTime || '5 min')}</span>
      `;
    }

    document.title = post.title + ' — BeAlexander Blog';
  }

  /* Body */
  container.innerHTML = post.content || '<p>No content yet.</p>';
}

/* ============================================================
   ADMIN DASHBOARD
   ============================================================ */
function initAdmin() {
  if (!document.getElementById('admin-posts-table') &&
      !document.getElementById('post-editor-form')) return;

  BlogEngine.seedPosts();

  /* Tab navigation */
  document.querySelectorAll('.admin-nav a[data-view]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const view = link.dataset.view;
      document.querySelectorAll('.admin-view').forEach(v => v.style.display = 'none');
      document.getElementById(view)?.style.setProperty('display', 'block');
      document.querySelectorAll('.admin-nav a').forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    });
  });

  renderAdminStats();
  renderAdminTable();

  /* New post button */
  document.getElementById('btn-new-post')?.addEventListener('click', () => {
    document.querySelectorAll('.admin-view').forEach(v => v.style.display = 'none');
    document.getElementById('view-editor')?.style.setProperty('display', 'block');
    document.querySelectorAll('.admin-nav a').forEach(l => l.classList.remove('active'));
    document.querySelector('[data-view="view-editor"]')?.classList.add('active');
    clearEditor();
  });
}

function renderAdminStats() {
  const posts = BlogEngine.getPosts();
  const published = posts.filter(p => p.status === 'published').length;
  const drafts = posts.filter(p => p.status === 'draft').length;

  const setEl = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
  setEl('stat-total', posts.length);
  setEl('stat-published', published);
  setEl('stat-drafts', drafts);
}

function renderAdminTable() {
  const tbody = document.getElementById('admin-posts-table');
  if (!tbody) return;

  const posts = BlogEngine.getPosts();

  if (!posts.length) {
    tbody.innerHTML = `<tr><td colspan="5" style="text-align:center;padding:40px;color:var(--text-light)">No posts yet. Click "New Post" to get started.</td></tr>`;
    return;
  }

  tbody.innerHTML = posts.map(post => `
    <tr>
      <td><strong style="color:var(--text-dark)">${escHtml(post.title)}</strong></td>
      <td><span class="badge badge--${post.category === 'AI Marketing' ? 'blue' : 'gold'}" style="font-size:11px">${escHtml(post.category || 'General')}</span></td>
      <td>${formatDate(post.date)}</td>
      <td>
        <span class="post-status post-status--${post.status}">
          <span class="post-status--dot"></span>
          ${post.status === 'published' ? 'Published' : 'Draft'}
        </span>
      </td>
      <td>
        <button class="table-action table-action--edit" onclick="editPost('${post.id}')">Edit</button>
        <button class="table-action table-action--delete" onclick="confirmDelete('${post.id}', '${escHtml(post.title).replace(/'/g, "\\'")}')">Delete</button>
      </td>
    </tr>
  `).join('');
}

function editPost(id) {
  const post = BlogEngine.getPost(id);
  if (!post) return;

  document.querySelectorAll('.admin-view').forEach(v => v.style.display = 'none');
  document.getElementById('view-editor')?.style.setProperty('display', 'block');
  document.querySelectorAll('.admin-nav a').forEach(l => l.classList.remove('active'));
  document.querySelector('[data-view="view-editor"]')?.classList.add('active');

  document.getElementById('editor-post-id').value = post.id;
  document.getElementById('editor-title').value = post.title;
  document.getElementById('editor-excerpt').value = post.excerpt || '';
  document.getElementById('editor-category').value = post.category || 'AI Marketing';
  document.getElementById('editor-status').value = post.status || 'draft';
  document.getElementById('editor-read-time').value = post.readTime || '5 min read';
  document.getElementById('editor-content').value = post.content || '';

  updateWordCount();
  document.getElementById('editor-headline')?.setAttribute('data-edit', 'true');
}

function clearEditor() {
  document.getElementById('editor-post-id').value = '';
  document.getElementById('editor-title').value = '';
  document.getElementById('editor-excerpt').value = '';
  document.getElementById('editor-category').value = 'AI Marketing';
  document.getElementById('editor-status').value = 'draft';
  document.getElementById('editor-read-time').value = '';
  document.getElementById('editor-content').value = '';
  updateWordCount();
}

function saveEditorPost(status) {
  const id = document.getElementById('editor-post-id').value || BlogEngine.generateId();
  const title = document.getElementById('editor-title').value.trim();
  const content = document.getElementById('editor-content').value.trim();

  if (!title) { showToast('Please enter a post title', 'error'); return; }
  if (!content) { showToast('Please add some content', 'error'); return; }

  const colors = { 'AI Marketing': '#0070F3', 'Paid Advertising': '#2B0A6B', 'SEO': '#D4A017', 'Content Marketing': '#1A1A2E', 'Email Marketing': '#7C3AED', 'Social Media': '#2B0A6B' };

  const category = document.getElementById('editor-category').value;

  const post = {
    id,
    title,
    slug: BlogEngine.generateSlug(title),
    excerpt: document.getElementById('editor-excerpt').value.trim() || title.substring(0, 120) + '...',
    content,
    category,
    author: 'BeAlexander Team',
    date: new Date().toISOString().split('T')[0],
    readTime: document.getElementById('editor-read-time').value || estimateReadTime(content),
    status: status || document.getElementById('editor-status').value,
    color: colors[category] || '#2B0A6B'
  };

  BlogEngine.savePost(post);
  renderAdminTable();
  renderAdminStats();

  showToast(status === 'published' ? '🚀 Post published!' : '💾 Draft saved!', 'success');

  if (status === 'published') {
    setTimeout(() => {
      document.querySelectorAll('.admin-view').forEach(v => v.style.display = 'none');
      document.getElementById('view-posts')?.style.setProperty('display', 'block');
      document.querySelectorAll('.admin-nav a').forEach(l => l.classList.remove('active'));
      document.querySelector('[data-view="view-posts"]')?.classList.add('active');
    }, 1200);
  }
}

function confirmDelete(id, title) {
  if (confirm(`Delete "${title}"?\n\nThis cannot be undone.`)) {
    BlogEngine.deletePost(id);
    renderAdminTable();
    renderAdminStats();
    showToast('Post deleted', 'error');
  }
}

function updateWordCount() {
  const content = document.getElementById('editor-content')?.value || '';
  const words = content.trim() ? content.trim().split(/\s+/).length : 0;
  const el = document.getElementById('word-count');
  if (el) el.textContent = `${words} words · ~${estimateReadTime(content)}`;
}

function estimateReadTime(text) {
  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  const mins = Math.max(1, Math.round(words / 200));
  return `${mins} min read`;
}

/* Editor toolbar actions */
function insertFormat(tag) {
  const ta = document.getElementById('editor-content');
  if (!ta) return;
  const start = ta.selectionStart;
  const end = ta.selectionEnd;
  const sel = ta.value.substring(start, end);

  let insert;
  if (tag === 'h2') insert = `\n<h2>${sel || 'Heading'}</h2>\n`;
  else if (tag === 'h3') insert = `\n<h3>${sel || 'Sub-heading'}</h3>\n`;
  else if (tag === 'b') insert = `<strong>${sel || 'bold text'}</strong>`;
  else if (tag === 'i') insert = `<em>${sel || 'italic text'}</em>`;
  else if (tag === 'ul') insert = `\n<ul>\n<li>${sel || 'Item one'}</li>\n<li>Item two</li>\n</ul>\n`;
  else if (tag === 'ol') insert = `\n<ol>\n<li>${sel || 'First item'}</li>\n<li>Second item</li>\n</ol>\n`;
  else if (tag === 'quote') insert = `\n<blockquote><p>${sel || 'Your quote here'}</p></blockquote>\n`;
  else if (tag === 'link') {
    const url = prompt('Enter URL:');
    if (!url) return;
    insert = `<a href="${url}" target="_blank">${sel || url}</a>`;
  }

  ta.value = ta.value.substring(0, start) + insert + ta.value.substring(end);
  ta.focus();
  updateWordCount();
}

/* ============================================================
   CONTACT FORM
   ============================================================ */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    btn.textContent = 'Sending...';
    btn.disabled = true;

    setTimeout(() => {
      showToast('✅ Message received! We will respond within 24 hours.', 'success');
      form.reset();
      btn.textContent = 'Book My Free Strategy Session →';
      btn.disabled = false;
    }, 1500);
  });
}

/* ============================================================
   TOAST NOTIFICATION
   ============================================================ */
let toastTimer;
function showToast(message, type = 'success') {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.className = `toast toast--${type}`;
  toast.textContent = message;

  clearTimeout(toastTimer);
  setTimeout(() => toast.classList.add('show'), 10);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 3800);
}

/* ============================================================
   UTILITIES
   ============================================================ */
function escHtml(str) {
  return String(str || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function formatDate(dateStr) {
  if (!dateStr) return '';
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
}

/* ============================================================
   SMOOTH SCROLL FOR ANCHOR LINKS
   ============================================================ */
document.addEventListener('click', (e) => {
  const a = e.target.closest('a[href^="#"]');
  if (!a) return;
  const target = document.querySelector(a.getAttribute('href'));
  if (target) {
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
});

/* ============================================================
   INIT
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initAnimations();
  renderBlogPage();
  renderPostPage();
  initAdmin();
  initContactForm();
});
