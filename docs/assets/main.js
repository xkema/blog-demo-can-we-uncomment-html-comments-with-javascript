// add active class to nav elements
const addActiveNavClasses = (pathname) => {
  let selector = pathname.split(/\/|\-|\./g).filter(item => (item.trim() !== '' && item.trim() !== 'html')).map(item => `.n-${item}`).join(', ');
  if (selector === '' || pathname === '/blog-demo-dom-nodes-are-expensive/' || pathname === '/') {
    selector = '.n-home'    
  }
  document.querySelectorAll(selector).forEach(link => link.classList.add('active'));
};

// init
document.addEventListener('DOMContentLoaded', () => {
  // experimental active class setter
  const pathname = window.location.pathname;
  addActiveNavClasses(pathname);
  // get comment nodes
  const commentNodes = document.querySelector('.comment-nodes');
  const commentNodesLog = commentNodes !== null ? commentNodes.childNodes.length : 'not-a-comment-nodes-demo'; 
  // print logs
  console.group('logs');
    console.log(`%clog ::`, `color:black;font-weight:bold;`, pathname);
    console.log(`%clog ::`, `color:black;font-weight:bold;`, '# of comment nodes', commentNodesLog);
  console.groupEnd();
});