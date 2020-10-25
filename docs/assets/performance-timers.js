document.addEventListener('DOMContentLoaded', () => {
  // number of comment lines
  console.log(`%cdebug ::`, `color:black;font-weight:bold;`, 'number of "comments wrapper" children:', document.querySelector('.comment-nodes.fly').childNodes.length);
  // header performance
  console.time('querySelector - header');
  document.querySelector('header');
  console.timeEnd('querySelector - header');
  // footer performance
  console.time('querySelector - footer');
  document.querySelector('footer');
  console.timeEnd('querySelector - footer');
});