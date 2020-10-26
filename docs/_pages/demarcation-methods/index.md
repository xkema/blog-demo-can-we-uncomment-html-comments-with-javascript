---
layout: demarcation-methods
title: "demo 2: demarcation-methods"
permalink: /demarcation-methods/
---

The earliest ReactDOM version here, `v14`, was using extra `span` elements to wrap portions of the textual content. `v15` had an update and replaced extra spans with comment nodes, like `<!-- react-text: 9 -->`. The latest version, `v16`, is now using nothing but the plain-old text nodes to keep-up-with updates.

**Note**: `v17` haven't updated demarcation method. It is same with previous version. It seems it is mature enough for now.