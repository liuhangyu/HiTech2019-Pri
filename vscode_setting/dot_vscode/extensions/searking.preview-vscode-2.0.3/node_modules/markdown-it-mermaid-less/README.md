# markdown-it-mermaid-less
## GitHub Status
[![Build Status](https://travis-ci.org/searKing/markdown-it-mermaid-less.svg?branch=master)](https://travis-ci.org/searKing/markdown-it-mermaid-less.svg?branch=master)
[![Coverage Status](https://coveralls.io/repos/github/searKing/markdown-it-mermaid-less/badge.svg?branch=master)](https://coveralls.io/github/searKing/markdown-it-mermaid-less?branch=master)
[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)

## NPM Status
[![Build Status](https://travis-ci.org/npm/markdown-it-mermaid-less.svg?branch=master)](https://travis-ci.org/npm/markdown-it-mermaid-less)
[![Code Climate](https://codeclimate.com/github/npm/markdown-it-mermaid-less/badges/gpa.svg)](https://codeclimate.com/github/npm/markdown-it-mermaid-less)
[![Dependency Status](https://david-dm.org/npm/markdown-it-mermaid-less.svg)](https://david-dm.org/npm/markdown-it-mermaid-less)
[![Issue Stats](http://issuestats.com/github/npm/markdown-it-mermaid-less/badge/pr)](http://issuestats.com/github/npm/markdown-it-mermaid-less)
[![Issue Stats](http://issuestats.com/github/npm/markdown-it-mermaid-less/badge/issue)](http://issuestats.com/github/npm/markdown-it-mermaid-less)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)

A parser of Markdown and a render to html, written in typescript, that aims for [preview-code](https://github.com/searKing/preview-vscode) , which is published as an extension on Visual Studio Code to preview Markdown, ReStructured Text, HTML, Jade, Pug or Mermaid files, Image's URI or CSS while editing them in VSCode.

It is built on top of [`markdown-it`],
a [CommonMark] markdown parser. You can use markdown-it-mermaid-less:

`markdown-it-mermaid-less` is the thing that parses package READMEs on
http://www.npmjs.com. If you see a markdown parsing bug there,
[file an issue here]!

[file an issue here]: https://github.com/searKing/markdown-it-mermaid-less/issues
[GitHub-style markdown]: https://help.github.com/articles/basic-writing-and-formatting-syntax/
[CommonMark]: http://spec.commonmark.org/
[`markdown-it`]: https://github.com/markdown-it/markdown-it
[programmatically in NodeJS]: #Using this module in other modules

# README

mermaid load plugin for [markdown-it](https://github.com/markdown-it/markdown-it) markdown parser.

# Installation

```sh
npm install markdown-it-mermaid-less --save
```

# Using this module in other modules

Here is a quick example of how this module can be used in other modules. The [TypeScript Module Resolution Logic](https://www.typescriptlang.org/docs/handbook/module-resolution.html) makes it quite easy. The file `src/index.ts` is a [barrel](https://basarat.gitbooks.io/typescript/content/docs/tips/barrel.html) that re-exports selected exports from other files. The _package.json_ file contains `main` attribute that points to the generated `lib/index.js` file and `typings` attribute that points to the generated `lib/index.d.ts` file.

> If you are planning to have code in multiple files (which is quite natural for a NodeJS module) that users can import, make sure you update `src/index.ts` file appropriately.

Now assuming you have published this amazing module to _npm_ with the name `markdown-it-mermaid-less`, and installed it in the module in which you need it -

- To use the `mermaid2html` function in a TypeScript file -

```ts
import markdownItMermaidPro = require('markdown-it-mermaid-less');
const taskList: string = `
\`\`\`mermaid
graph TD;
A-->B;
A-->C;
B-->D;
C-->D;
\`\`\`
`;

(async (md: string) => {
  const defaultRootWebPath = path.join(__dirname, '..');
  // console.log('defaultRootWebPath= ', defaultRootWebPath);
  const options: index.IMermaid2htmlProOptions = {
    rootWebPath: defaultRootWebPath,
  };

  const html: string = await markdownItMermaidPro.mermaid2html(md, options);
  console.log("rendered html is\n:", html);

  return;
})(taskList);
```

- To use the `mermaid2html` function in a JavaScript file -

```js
const markdownItMermaidPro = require("markdown-it-mermaid-less")
const mermaid2html = markdownItMermaidPro.mermaid2html;
const taskList = `
\`\`\`mermaid
graph TD;
A-->B;
A-->C;
B-->D;
C-->D;
\`\`\`
`;
(async(md)=>{
  const options = {
    rootWebPath: defaultRootWebPath,
  };
  const html = await mermaid2html(md, options);
  console.log("rendered html is\n:", html);
})(taskList)
```

- To use the `mermaid2html` function in a TypeScript file as a markdown-it plugin-

```ts
import markdownItMermaidPro = require('markdown-it-mermaid-less');
const taskList: string = `
\`\`\`mermaid
graph TD;
A-->B;
A-->C;
B-->D;
C-->D;
\`\`\`
`;
(async (markdownContent: string) => {
  let html: string = '';

  if (typeof markdownContent !== 'string') {
    throw Error('first argument must be a string');
  }
  const defaultRootWebPath = path.join(__dirname, '..');

  const cms: string[] = await markdownItMermaidPro.mermaid_pro_plugin_init_everytime(
    markdownContent,
    defaultRootWebPath
  );
  const md = require('markdown-it')();
  const ro = {
    contentMaps: cms,
  };
  md.use(markdownItMermaidPro, ro);

  html = md.render(markdownContent);
  console.log('html = ', html);
  return html;
})(taskList);
```

- To use the `mermaid2html` function in a JavaScript file as a markdown-it plugin-

```js
const markdownItMermaidPro = require("markdown-it-mermaid-less")
const taskList = `
\`\`\`mermaid
graph TD;
A-->B;
A-->C;
B-->D;
C-->D;
\`\`\`
`;
(async (markdownContent: string) => {
  let html: string = '';

  if (typeof markdownContent !== 'string') {
    throw Error('first argument must be a string');
  }
  const defaultRootWebPath = path.join(__dirname, '..');

  const cms: string[] = await markdownItMermaidPro.mermaid_pro_plugin_init_everytime(
    markdownContent,
    defaultRootWebPath
  );
  const md = require('markdown-it')();
  const ro = {
    contentMaps: cms,
  };
  md.use(markdownItMermaidPro, ro);

  html = md.render(markdownContent);
  console.log('html = ', html);
  return html;
})(taskList);
```


## Setting travis and coveralls badges
1. Sign in to [travis](https://travis-ci.org/) and activate the build for your project.
2. Sign in to [coveralls](https://coveralls.io/) and activate the build for your project.
3. Replace searKing/markdown-it-mermaid-less with your repo details like: "ospatil/generator-node-typescript".


## Programmatic Usage

markdown-it-mermaid-less exports a single function. For basic use, that function
takes a single argument: a string to convert.

```js
const mermaid2html = require("markdown-it-mermaid-less")
const html : Promise<sring> = mermaid2html("# hello, I'm markdown")
```

## Tests

```sh
npm install
npm test
```

## Thanks to

+ [marky-markdown](https://github.com/npm/marky-markdown).
