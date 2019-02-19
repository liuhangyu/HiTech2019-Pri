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
let pug = require("pug");
let jade = require("jade");
class PugDocumentContentManager {
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
            if (editor.document.languageId !== "jade" && editor.document.languageId !== "pug") {
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
        return `Active editor doesn't show a Pug Text document (.pug)- no properties to preview.`;
    }
    getWindowErrorMessage() {
        return `No Active editor - no properties to preview.`;
    }
    jadeSrcSnippetWithNodeModules(jadeContent) {
        // compile
        var options = {
            pretty: true
        };
        var fn = jade.compile(jadeContent, options);
        var html = fn();
        return html;
    }
    pugSrcSnippetWithNodeModules(pugContent) {
        // compile
        var options = {
            pretty: true
        };
        var fn = pug.compile(pugContent, options);
        var html = fn();
        return html;
    }
    pugSrcSnippet(editor) {
        if (!editor) {
            return Promise.resolve(htmlUtil_1.HtmlUtil.errorSnippet(this.getWindowErrorMessage()));
        }
        if (!!editor.document.fileName && editor.document.fileName.endsWith(".jade")) {
            return Promise.resolve(this.jadeSrcSnippetWithNodeModules(editor.document.getText()));
        }
        return Promise.resolve(this.pugSrcSnippetWithNodeModules(editor.document.getText()));
    }
    // 生成预览编辑页面
    generatePreviewSnippet(editor) {
        if (!editor || !editor.document) {
            return Promise.resolve(htmlUtil_1.HtmlUtil.errorSnippet(this.getWindowErrorMessage()));
        }
        // 获取当前编辑页面对应的文档
        let doc = editor.document;
        return this.pugSrcSnippet(editor).then(function (pugSrc) {
            return htmlUtil_1.HtmlUtil.fixNoneNetLinks(pugSrc, doc.fileName);
        });
    }
}
exports.PugDocumentContentManager = PugDocumentContentManager;
//# sourceMappingURL=pugDocumentContentManager.js.map