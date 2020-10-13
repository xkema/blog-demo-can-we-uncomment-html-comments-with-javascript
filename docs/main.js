document.addEventListener('DOMContentLoaded', () => {
  // header performance
  console.time('querySelector - header');
  document.querySelector('header');
  console.timeEnd('querySelector - header');
  // footer performance
  console.time('querySelector - footer');
  document.querySelector('footer');
  console.timeEnd('querySelector - footer');
});