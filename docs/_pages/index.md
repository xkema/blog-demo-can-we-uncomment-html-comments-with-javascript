---
title: Blog Demo - Can We Uncomment HTML Comments with Javascript
permalink: /
---

<!-- [1] @todo rename "Javascript" with "JavaScript" at the header -->

This is a demo page for the blog post [Can We Uncomment HTML Comments with JavaScript?](https://xkema.github.io/2020/can-we-uncomment-html-comments-with-javascript "Can We Uncomment HTML Comments with JavaScript?")

<!-- [2] @todo Check this blog page link after deployment -->

There are two different cases under the probe. **Case 1** shows how different versions of ReactDOM update individual pieces of textual content. **Case 2** is a memory snapshot from Firefox Developer Tools to show how different numbers of DOM Nodes affect memory usage on a page.

<!-- [3] inline navigation for home page -->
<nav>
  <a href="./react-updates/">case 1: react-updates</a>
  <a href="./performance-optimization/">case 2: performance-optimization</a>
</nav>

<!-- [4] Case 0 is this page, "Reveal HTML Comments" button will make comments visible -->

<div>
  <!-- Hi! I'm an HTML comment. -->
</div>

## Case Outlines

**Case 0** is the short answer. Click `Reveal HTML Comments` button to replace inline comment nodes with styled paragraphs! (Before that don't forget to check out source code to see real comments!)

<button id="reveal-comments" title="Reveal HTML Comments">Reveal HTML Comments</button>

- - -

At **Case 1** you'll have the same `Clock` component defined by React, with three different demarcation methods.

At **Case 2** you'll have some HTML files with including different sizes of comment nodes. See Case 2 index for the customizations.

For both demos, open up your dev tools panel and inspect the changes.

<!-- [5] Add open devtools note to sub pages also -->