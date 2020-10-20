const revealCommentNodes = (event) => {
  event.target.setAttribute('disabled', '');
  const contentElement = document.querySelector('main');
  contentElement.childNodes.forEach((childNode) => {
    if(childNode.nodeType === Node.COMMENT_NODE) {
      const paragraph = document.createElement('p');
      paragraph.classList.add('revealed-comment');
      paragraph.textContent = `<!-- ${childNode.nodeValue.trim()} -->`;
      childNode.replaceWith(paragraph);
      paragraph.classList.add('revealed-comment', `no-use-${paragraph.offsetTop}`, 'fly');
    }
  });
  event.target.nextElementSibling.removeAttribute('disabled', '');
};

const putBackCommentNodes = (event) => {
  event.target.setAttribute('disabled', '');
  const contentElement = document.querySelector('main');
  const revealedNodes = document.querySelectorAll('.revealed-comment');
  revealedNodes.forEach((revealedNode) => {
    const comment = document.createComment(revealedNode.textContent.slice(4, -3)); // erase manually added "<!--", "-->" from paragraph content
    revealedNode.replaceWith(comment)
  });
  event.target.previousElementSibling.removeAttribute('disabled', '');
};

document.addEventListener('DOMContentLoaded', () => {
  const buttonReveal = document.querySelector('#reveal-comments');
  const buttonPutBack = document.querySelector('#put-back-comments');
  buttonReveal.addEventListener('click', revealCommentNodes);
  buttonPutBack.addEventListener('click', putBackCommentNodes);
});