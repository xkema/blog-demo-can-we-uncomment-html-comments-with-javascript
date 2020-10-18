---
layout: react-updates
title: "case 1: react-updates"
permalink: /react-updates/
---

The earliest ReactDOM version here, `v14`, was using extra `span` elements to wrap portions of the textual content. `v15` had an update and replaced extra spans with comment nodes, like `<!-- react-text: 9 -->`. The latest version, `v16`, is now use nothing but the plain-old text nodes to keep-up-with updates.