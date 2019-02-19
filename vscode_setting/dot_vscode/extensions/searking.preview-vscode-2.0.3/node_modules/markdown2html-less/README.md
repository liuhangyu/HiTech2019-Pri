# markdown2html-less
## GitHub Status
[![Build Status](https://travis-ci.org/searKing/markdown2html-less.svg?branch=master)](https://travis-ci.org/searKing/markdown2html-less.svg?branch=master)
[![Coverage Status](https://coveralls.io/repos/github/searKing/markdown2html-less/badge.svg?branch=master)](https://coveralls.io/github/searKing/markdown2html-less?branch=master)
[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)

## NPM Status
[![Build Status](https://travis-ci.org/npm/markdown2html-less.svg?branch=master)](https://travis-ci.org/npm/markdown2html-less)
[![Code Climate](https://codeclimate.com/github/npm/markdown2html-less/badges/gpa.svg)](https://codeclimate.com/github/npm/markdown2html-less)
[![Dependency Status](https://david-dm.org/npm/markdown2html-less.svg)](https://david-dm.org/npm/markdown2html-less)
[![Issue Stats](http://issuestats.com/github/npm/markdown2html-less/badge/pr)](http://issuestats.com/github/npm/markdown2html-less)
[![Issue Stats](http://issuestats.com/github/npm/markdown2html-less/badge/issue)](http://issuestats.com/github/npm/markdown2html-less)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)

A parser of Markdown and a render to html, written in typescript, that aims for [preview-code](https://github.com/searKing/preview-vscode) , which is published as an extension on Visual Studio Code to preview Markdown, ReStructured Text, HTML, Jade, Pug or Mermaid files, Image's URI or CSS while editing them in VSCode.

It is built on top of [`markdown-it`],
a [CommonMark] markdown parser. You can use markdown2html-less:

`markdown2html-less` is the thing that parses package READMEs on
http://www.npmjs.com. If you see a markdown parsing bug there,
[file an issue here]!

[file an issue here]: https://github.com/searKing/markdown2html-less/issues
[GitHub-style markdown]: https://help.github.com/articles/basic-writing-and-formatting-syntax/
[CommonMark]: http://spec.commonmark.org/
[`markdown-it`]: https://github.com/markdown-it/markdown-it
[programmatically in NodeJS]: #Using this module in other modules

# README

An extension to preview Markdown, ReStructured Text, HTML, Jade, Pug or Mermaid files, Image's URI or CSS while editing them in VSCode

# Installation

```sh
npm install markdown2html-less --save
```

# Using this module in other modules

Here is a quick example of how this module can be used in other modules. The [TypeScript Module Resolution Logic](https://www.typescriptlang.org/docs/handbook/module-resolution.html) makes it quite easy. The file `src/index.ts` is a [barrel](https://basarat.gitbooks.io/typescript/content/docs/tips/barrel.html) that re-exports selected exports from other files. The _package.json_ file contains `main` attribute that points to the generated `lib/index.js` file and `typings` attribute that points to the generated `lib/index.d.ts` file.

> If you are planning to have code in multiple files (which is quite natural for a NodeJS module) that users can import, make sure you update `src/index.ts` file appropriately.

Now assuming you have published this amazing module to _npm_ with the name `markdown2html-less`, and installed it in the module in which you need it -

- To use the `Markdown2HtmlLess` class in a TypeScript file -

```ts
import { Markdown2HtmlLess } from "markdown2html-less";
const markdownContent = "";
const markdown2HtmlLess = new Markdown2HtmlLess();
markdown2HtmlLess.markdown2html(markdownContent);
```

- To use the `Markdown2HtmlLess` class in a JavaScript file -

```js
const Markdown2HtmlLess = require('markdown2html-less').Markdown2HtmlLess;
const markdownContent = "";

const markdown2HtmlLess = new Markdown2HtmlLess();
markdown2HtmlLess.markdown2html(markdownContent);
```

## Setting travis and coveralls badges
1. Sign in to [travis](https://travis-ci.org/) and activate the build for your project.
2. Sign in to [coveralls](https://coveralls.io/) and activate the build for your project.
3. Replace searKing/markdown2html-less with your repo details like: "ospatil/generator-node-typescript".


## Tests

```sh
npm install
npm test
```

## Thanks to

+ [marky-markdown](https://github.com/npm/marky-markdown).
