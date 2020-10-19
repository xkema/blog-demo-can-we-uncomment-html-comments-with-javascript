# blog-demo-can-we-uncomment-html-comments-with-javascript

[Demo page](https://xkema.github.io/blog-demo-can-we-uncomment-html-comments-with-javascript/ "Blog Demo - Can We Uncomment HTML Comments with Javascript")

[Related blog post](https://xkema.github.io/2020/can-we-uncomment-html-comments-with-javascript "Can We Uncomment HTML Comments with JavaScript?")

## developer notes

- Build a development environment for Jekyll
- Use `npm start`

Local Bundler configuration updated with `BUNDLE_GEMFILE: "docs/Gemfile"` to run bundler commands from project root.

All the `*.md` files but `index-0.md` under the `docs/_pages/performance-optimization/customizations/` directory are excluded from Jekyll builds for performance reasons. You should manually build these files with `npm run build` command and then copy them into the `docs/performance-optimization/customizations/` directory manually for the updates.