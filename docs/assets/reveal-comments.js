const revealCommentNodes = (event) => {
  event.target.setAttribute('disabled', '');
  const contentElement = document.querySelector('main');
  contentElement.childNodes.forEach((childNode) => {
    if(childNode.nodeType === Node.COMMENT_NODE) {
      const replacement = document.createElement('p');
      replacement.classList.add('revealed-comment');
      replacement.textContent = `<!-- ${childNode.nodeValue} -->`;
      childNode.replaceWith(replacement);
      replacement.classList.add('revealed-comment', `no-use-${replacement.offsetTop}`, 'fly');
    }
  });
};

document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('#reveal-comments');
  button.addEventListener('click', revealCommentNodes);
});