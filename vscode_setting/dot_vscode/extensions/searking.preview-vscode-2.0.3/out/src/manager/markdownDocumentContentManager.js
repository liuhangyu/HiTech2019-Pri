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
let Markdown2HtmlLess = require("markdown2html-less").Markdown2HtmlLess;
const markdown2htmlLess = new Markdown2HtmlLess();
class MarkdownDocumentContentManager {
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
            if (!editor || !editor.document) {
                return htmlUtil_1.HtmlUtil.errorSnippet(this.getWindowErrorMessage());
            }
            if (this._editor.document.languageId !== "markdown") {
                return htmlUtil_1.HtmlUtil.errorSnippet(this.getErrorMessage());
            }
            let previewSnippet = yield this.generatePreviewSnippet(editor);
            if (!previewSnippet || previewSnippet.length <= 0) {
                return htmlUtil_1.HtmlUtil.errorSnippet(this.getErrorMessage());
            }
            console.info("previewSnippet = " + previewSnippet);
            return previewSnippet;
        });
    }
    // @Override
    sendPreviewCommand(previewUri, displayColumn) {
        // return MarkDownUtil.sendPreviewCommand(previewUri, displayColumn);
        return htmlUtil_1.HtmlUtil.sendPreviewCommand(previewUri, displayColumn);
    }
    getErrorMessage() {
        return `Active editor doesn't show a MarkDown document - no properties to preview.`;
    }
    getWindowErrorMessage() {
        return `No Active editor - no properties to preview.`;
    }
    // 生成预览编辑页面
    generatePreviewSnippet(editor) {
        return (() => __awaiter(this, void 0, void 0, function* () {
            if (!editor || !editor.document) {
                return htmlUtil_1.HtmlUtil.errorSnippet(this.getWindowErrorMessage());
            }
            // 获取当前编辑页面对应的文档
            let doc = editor.document;
            // let html = editormd.markdownToHTML(doc.getText());
            let html = yield this.getHTML(doc.getText());
            return htmlUtil_1.HtmlUtil.fixNoneNetLinks(html, doc.fileName);
        }))();
    }
    getHTML(md) {
        const html = markdown2htmlLess.markdown2html(md);
        html.head = html.head || '';
        html.body = html.body || '';
        return Promise.resolve(`${html.head}
${html.body}`);
    }
}
exports.MarkdownDocumentContentManager = MarkdownDocumentContentManager;
//# sourceMappingURL=markdownDocumentContentManager.js.map