document.addEventListener('DOMContentLoaded', () => {
  // print file info
  const pathname = window.location.pathname;
  console.log(`%cdebug ::`, `color:crimson;font-weight:bold;`, pathname);
  // experimental active class setter
  let selector = pathname.split(/\/|\-|\./g).filter(item => (item.trim() !== '' && item.trim() !== 'html')).map(item => `.n-${item}`).join(', ');
  if (selector === '' || pathname === '/blog-demo-dom-nodes-are-expensive/' || pathname === '/') {
    selector = '.n-home'    
  }
  document.querySelectorAll(selector).forEach(link => link.classList.add('active'));
});