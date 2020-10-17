document.addEventListener('DOMContentLoaded', () => {
  // print file info
  console.log(`%cdebug ::`, `color:black;font-weight:bold;`, window.location.pathname);
  // header performance
  console.time('querySelector - header');
  document.querySelector('header');
  console.timeEnd('querySelector - header');
  // footer performance
  console.time('querySelector - footer');
  document.querySelector('footer');
  console.timeEnd('querySelector - footer');
});