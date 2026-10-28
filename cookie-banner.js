// The cookie banner of the blog: the same choice, cookie and texts as shared/consent (English only). Shown until the
// visitor answers; settings are changed on incusgrid.com/cookie-settings, which shares the cookie.
(function () {
  if (/(?:^|;\s*)incus_consent=1\.[01]\.[01](?:;|$)/.test(document.cookie)) return;
  var shared = /(^|\.)incusgrid\.com$/.test(location.hostname) ? '; domain=incusgrid.com' : '';
  function answer(yes) {
    document.cookie = 'incus_consent=1.' + (yes ? '1.1' : '0.0') + '; path=/; max-age=31536000; samesite=lax' + shared + (location.protocol === 'https:' ? '; secure' : '');
    banner.remove();
    if (yes) window.startAnalytics(true);
  }
  var banner = document.createElement('div');
  banner.className = 'cookie-banner';
  banner.setAttribute('role', 'dialog');
  banner.setAttribute('aria-labelledby', 'cookie-title');
  banner.innerHTML = '<h2 id="cookie-title">Cookies</h2>' +
    '<p>We use cookies for analytics and ad measurement, only with your consent. <a href="https://incusgrid.com/privacy-policy">Privacy policy</a></p>' +
    '<div class="cookie-buttons"><button type="button" class="outline">Reject</button><button type="button">Accept</button></div>' +
    '<a class="cookie-settings" href="https://incusgrid.com/cookie-settings">Cookie settings</a>';
  var buttons = banner.querySelectorAll('button');
  buttons[0].addEventListener('click', function () { answer(false); });
  buttons[1].addEventListener('click', function () { answer(true); });
  document.body.appendChild(banner);
})();
