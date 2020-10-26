document.addEventListener('DOMContentLoaded', () => {
  console.group(`"header" and "footer" element "querySelector" timings`);
  // header performance
  console.time(`document.querySelector('header')`);
  document.querySelector('header');
  console.timeEnd(`document.querySelector('header')`);
  // footer performance
  console.time(`document.querySelector('footer')`);
  document.querySelector('footer');
  console.timeEnd(`document.querySelector('footer')`);
  console.groupEnd();
  // number of comment lines
  console.log(`%cdebug ::`, `color:black;font-weight:bold;`, 'number of "comments wrapper" children:', document.querySelector('.comment-nodes.fly').childNodes.length);
});