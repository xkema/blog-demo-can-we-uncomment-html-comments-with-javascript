# blog-demo-dom-nodes-are-expensive

[Demo Page](https://xkema.github.io/blog-demo-dom-nodes-are-expensive/ "Blog Demo - Can We Uncomment HTML Comments with Javascript")

[Related Blog Post](https://xkema.github.io/2020/can-we-uncomment-html-comments-with-javascript "Can We Uncomment HTML Comments with JavaScript?")

## developer notes

- Build a development environment for Jekyll
- Use `npm start`

Local Bundler configuration updated with `BUNDLE_GEMFILE: "docs/Gemfile"` to run bundler commands from project root.

All the `*.md` files under the `docs/_pages/memory-usage/customizations/` directory are excluded from Jekyll builds for performance reasons. You should manually build these files with `npm run build` command and then copy all `_site/memory-usage/index-*.html` files into the `docs/memory-usage/` directory manually for the updates. Or use `npm run copy`.

You should re-build these files each time you update a file related to these files, like layout files, inclusions, ...