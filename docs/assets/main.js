document.addEventListener('DOMContentLoaded', () => {
  // print file info
  console.log(`%cdebug ::`, `color:crimson;font-weight:bold;`, window.location.pathname);

  // experimental active class setter
  let selector = window.location.pathname.split(/\/|\-/g).filter(item => item.trim() !== '').map(item => `.n-${item}`).join(', ');
  if(selector === '') {
    selector = '.n-home'
  }
  document.querySelectorAll(selector).forEach(link => link.classList.add('active'));
});