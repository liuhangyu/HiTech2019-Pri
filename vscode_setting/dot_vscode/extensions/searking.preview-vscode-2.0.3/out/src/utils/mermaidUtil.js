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
const vscode_1 = require("vscode");
class MermaidUtil {
    // @Override
    static sendPreviewCommand(command) {
        return __awaiter(this, void 0, void 0, function* () {
            if (command != this.COMMAND_BUTT) {
                try {
                    yield vscode_1.commands.executeCommand(command);
                }
                catch (reason) {
                    console.warn(reason);
                    vscode_1.window.showErrorMessage(reason);
                }
            }
        });
    }
    static isMermaidFile(editor) {
        if (!editor || !editor.document || !editor.document.fileName) {
            return false;
        }
        if (editor.document.fileName.toLowerCase().endsWith(".mermaid")) {
            return true;
        }
        return false;
    }
}
MermaidUtil.COMMAND_BUTT = "";
exports.MermaidUtil = MermaidUtil;
//# sourceMappingURL=mermaidUtil.js.map