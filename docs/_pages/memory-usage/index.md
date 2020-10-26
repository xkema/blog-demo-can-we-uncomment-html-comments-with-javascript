---
layout: memory-usage
title: "demo 3: memory-usage"
permalink: /memory-usage/
---

## Customizations

Here are the page customization details:

|        Page        |                         Description                         | File Size |
| :----------------: | :---------------------------------------------------------: | :-------: |
|   `index-0.html`   |     **Default** load, without extraneous comment nodes.     |  `2.9K`   |
|  `index-10k.html`  |            **Initial** load with **10K** lines.             |  `218K`   |
| `index-10kc.html`  |             Initial load without empty spaces.              |  `208K`   |
|  `index-50k.html`  |             **Medium** load with **50K** lines.             |  `1.1M`   |
| `index-50kc.html`  |              Medium load without empty spaces.              |  `1.0M`   |
| `index-50kct.html` | A single comment node, but same file size with medium load. |  `1.0M`   |
| `index-100k.html`  |             **Heavy** load with **100K** lines.             |  `2.1M`   |
| `index-100kc.html` |              Heavy load without empty spaces.               |  `2.0M`   |