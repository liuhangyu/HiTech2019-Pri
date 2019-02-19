"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const htmlUtil_1 = require("./../utils/htmlUtil");
const docutilsUtil_1 = require("./../utils/docutilsUtil");
let rst2mdown = require("rst2mdown");
let Markdown2HtmlLess = require("markdown2html-less").Markdown2HtmlLess;
const markdown2htmlLess = new Markdown2HtmlLess();
class ReStructuredTextDocumentContentManager {
    constructor(editor) {
        this._editor = editor;
        return this;
    }
    // @Override
    editor() {
        return this._editor;
    }
    // 生成当前编辑页面的可预览代码片段
    // @Override
    createContentSnippet() {
        return __awaiter(this, void 0, void 0, function* () {
            let editor = this._editor;
            if (!editor) {
                return htmlUtil_1.HtmlUtil.errorSnippet(this.getWindowErrorMessage());
            }
            if (editor.document.languageId !== "rst") {
                return htmlUtil_1.HtmlUtil.errorSnippet(this.getErrorMessage());
            }
            return this.generatePreviewSnippet(editor);
        });
    }
    // @Override
    sendPreviewCommand(previewUri, displayColumn) {
        return htmlUtil_1.HtmlUtil.sendPreviewCommand(previewUri, displayColumn);
    }
    getErrorMessage() {
        return `Active editor doesn't show a ReStructured Text document (.rst|.rest|.hrst)- no properties to preview.`;
    }
    getWindowErrorMessage() {
        return `No Active editor - no properties to preview.`;
    }
    rstSrcSnippetWithNodeModules(rstContent) {
        const html = markdown2htmlLess.markdown2html(rst2mdown(rstContent));
        html.head = html.head || '';
        html.body = html.body || '';
        return `${html.head}
${html.body}`;
    }
    rstSrcSnippetWithDocutils(editor) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!editor || !editor.document) {
                return Promise.resolve(htmlUtil_1.HtmlUtil.errorSnippet(this.getWindowErrorMessage()));
            }
            // 获取当前编辑页面对应的文档
            let doc = editor.document;
            try {
                return docutilsUtil_1.DocutilsUtil.rst2html5(doc.fileName);
            }
            catch (error) {
                return docutilsUtil_1.DocutilsUtil.rst2html(doc.fileName);
            }
        });
    }
    rstSrcSnippet(editor) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!editor) {
                return Promise.resolve(htmlUtil_1.HtmlUtil.errorSnippet(this.getWindowErrorMessage()));
            }
            let thiz = this;
            try {
                return this.rstSrcSnippetWithDocutils(editor);
            }
            catch (error) {
                console.error("try rst2html5 and rst2html of docutils failed, please check python and docutils environment: " + error);
                console.error(", we use a simple preview instead ^-)");
                // window.showInformationMessage("try rst2html5 and rst2html of docutils failed, please check python and docutils environment, we use a simple preview instead ^-)");
                if (!editor.document) {
                    return Promise.resolve(htmlUtil_1.HtmlUtil.errorSnippet(this.getWindowErrorMessage()));
                }
                return thiz.rstSrcSnippetWithNodeModules(editor.document.getText());
            }
        });
    }
    // 生成预览编辑页面
    generatePreviewSnippet(editor) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!editor || !editor.document) {
                return Promise.resolve(htmlUtil_1.HtmlUtil.errorSnippet(this.getWindowErrorMessage()));
            }
            // 获取当前编辑页面对应的文档
            let doc = editor.document;
            const rstSrc = yield this.rstSrcSnippet(editor);
            return htmlUtil_1.HtmlUtil.fixNoneNetLinks(rstSrc, doc.fileName);
        });
    }
}
exports.ReStructuredTextDocumentContentManager = ReStructuredTextDocumentContentManager;
//# sourceMappingURL=reStructuredTextDocumentContentManager.js.map