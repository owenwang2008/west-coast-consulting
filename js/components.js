/* ============================================================
   Shared HTML Components (Navbar + Footer)
   ============================================================ */

const NAVBAR_HTML = `
<nav class="navbar">
  <div class="container">
    <div class="navbar-inner">
      <a href="index.html" class="navbar-logo">
        <div class="logo-icon">🍁</div>
        <div>
          <span lang="zh">西岸留学咨询</span>
          <span lang="en">West Coast Consulting</span>
          <span class="logo-text-en">West Coast Consulting Inc.</span>
        </div>
      </a>
      <div class="navbar-menu">
        <a href="index.html"><span lang="zh">首页</span><span lang="en">Home</span></a>
        <a href="about.html"><span lang="zh">关于我们</span><span lang="en">About</span></a>
        <a href="programs.html"><span lang="zh">游学项目</span><span lang="en">Programs</span></a>
        <a href="homestay.html"><span lang="zh">寄宿家庭</span><span lang="en">Homestay</span></a>
        <a href="activities.html"><span lang="zh">活动旅行</span><span lang="en">Activities</span></a>
        <a href="faq.html"><span lang="zh">常见问题</span><span lang="en">FAQ</span></a>
        <a href="contact.html"><span lang="zh">联系我们</span><span lang="en">Contact</span></a>
      </div>
      <div class="navbar-actions">
        <div class="lang-toggle">
          <button class="lang-btn active" data-lang="zh">中文</button>
          <button class="lang-btn" data-lang="en">EN</button>
        </div>
        <a href="contact.html" class="btn btn-primary btn-sm navbar-cta">
          <span lang="zh">立即咨询</span>
          <span lang="en">Enquire</span>
        </a>
      </div>
      <button class="hamburger" aria-label="菜单">
        <span></span><span></span><span></span>
      </button>
    </div>
  </div>
</nav>
`;

const FOOTER_HTML = `
<footer class="footer">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <div class="logo-area">
          <div class="logo-icon">🍁</div>
          <div>
            <div class="logo-name"><span lang="zh">西岸留学咨询有限公司</span><span lang="en">West Coast Consulting Inc.</span></div>
          </div>
        </div>
        <p lang="zh">专注为中国中小学生提供走进真正加拿大课堂的游学体验，让每一位孩子在温哥华留下终生难忘的成长印记。</p>
        <p lang="en">Providing authentic Canadian classroom experiences for Chinese K-12 students in beautiful Vancouver, BC.</p>
        <div class="social-links">
          <a href="#" class="social-link" title="微信">💬</a>
          <a href="#" class="social-link" title="微博">🌐</a>
          <a href="#" class="social-link" title="小红书">📱</a>
          <a href="#" class="social-link" title="抖音">🎵</a>
        </div>
      </div>
      <div class="footer-col">
        <h5><span lang="zh">游学项目</span><span lang="en">Programs</span></h5>
        <ul>
          <li><a href="program-short.html"><span lang="zh">枫叶启航营（短期）</span><span lang="en">Maple Explorer (Short)</span></a></li>
          <li><a href="program-medium.html"><span lang="zh">枫叶深浸营（中期）</span><span lang="en">Maple Immersion (Medium)</span></a></li>
          <li><a href="program-long.html"><span lang="zh">枫叶学者营（长期）</span><span lang="en">Maple Scholar (Long)</span></a></li>
          <li><a href="homestay.html"><span lang="zh">寄宿家庭</span><span lang="en">Homestay</span></a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h5><span lang="zh">了解更多</span><span lang="en">Learn More</span></h5>
        <ul>
          <li><a href="about.html"><span lang="zh">关于我们</span><span lang="en">About Us</span></a></li>
          <li><a href="activities.html"><span lang="zh">活动与旅行</span><span lang="en">Activities</span></a></li>
          <li><a href="gallery.html"><span lang="zh">精彩图集</span><span lang="en">Gallery</span></a></li>
          <li><a href="faq.html"><span lang="zh">常见问题</span><span lang="en">FAQ</span></a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h5><span lang="zh">联系我们</span><span lang="en">Contact</span></h5>
        <ul>
          <li><a href="tel:+16041234567">📞 +1 (604) 123-4567</a></li>
          <li><a href="mailto:info@westcoastconsulting.ca">✉️ info@westcoastconsulting.ca</a></li>
          <li><a href="#">💬 <span lang="zh">微信: WCC_Vancouver</span><span lang="en">WeChat: WCC_Vancouver</span></a></li>
          <li><a href="#">📍 Vancouver, BC, Canada</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span lang="zh">© 2024 西岸留学咨询有限公司 | West Coast Consulting Inc. 版权所有</span>
      <span lang="en">© 2024 West Coast Consulting Inc. All Rights Reserved.</span>
      <span><span lang="zh">加拿大 BC 省注册公司 | </span><a href="contact.html" style="color:rgba(255,255,255,0.5)"><span lang="zh">隐私政策</span><span lang="en">Privacy Policy</span></a></span>
    </div>
  </div>
</footer>
`;

// Inject into page
document.addEventListener('DOMContentLoaded', () => {
  // Inject navbar
  const navPlaceholder = document.getElementById('navbar-placeholder');
  if (navPlaceholder) navPlaceholder.outerHTML = NAVBAR_HTML;

  // Inject footer
  const footerPlaceholder = document.getElementById('footer-placeholder');
  if (footerPlaceholder) footerPlaceholder.outerHTML = FOOTER_HTML;
});
