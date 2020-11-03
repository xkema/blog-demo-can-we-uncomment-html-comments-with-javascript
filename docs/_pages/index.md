---
layout: default
title: Blog Demo - DOM Nodes are Expensive
permalink: /
---

This is a demo intro page for the blog post series [DOM Nodes are Expensive](https://xkema.github.io/2020/dom-nodes-are-expensive "DOM Nodes are Expensive").

## Demo Outlines

There are three demos for each post in the series.

- **Demo 1** is to reveal HTML comments in a webpage source code. Click `Reveal HTML Comments` button to replace inline comment nodes with styled paragraphs! (*Before that don't forget to check out source code or Elements panel to see real comments!*) The other button `Put Back HTML Comments` creates `Comment` nodes dynamically and puts revealed ones back to the DOM tree.
- **Demo 2** shows how different versions of ReactDOM update individual pieces of textual content. You'll have the same `Clock` component defined by React, with three different demarcation methods.
- **Demo 3** is to save memory snapshots from Firefox Developer Tools to show how different numbers of DOM nodes affect memory usage on a page. You'll have some HTML files with including different sizes of comment nodes. See demo home for the customizations and their details.

------

> For each demo, do not forget to open up your dev tools panel and inspect the changes.