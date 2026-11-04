const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#site-nav');
if (menuButton && navigation) {
  menuButton.addEventListener('click', () => {
    const open = navigation.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  });
  navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    navigation.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open menu');
  }));
}
const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();
const form = document.querySelector('#quote-form');
if (form) form.addEventListener('submit', event => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  const data = new FormData(form);
  const message = [
    'Hi Michael, I would like a free quote from PERKS Tree Services.',
    'Name: ' + data.get('name').trim(),
    'Location: ' + (data.get('suburb').trim() || 'Not provided'),
    'Service: ' + data.get('service'),
    'Job details: ' + data.get('message').trim()
  ].join('\n');
  window.location.href = 'sms:+61459925055?body=' + encodeURIComponent(message);
});
