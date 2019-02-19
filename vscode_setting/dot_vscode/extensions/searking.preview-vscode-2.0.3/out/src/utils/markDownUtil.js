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
const textUtil_1 = require("./textUtil");
class MarkDownUtil {
    // @Override
    static sendPreviewCommand(displayColumn) {
        return __awaiter(this, void 0, void 0, function* () {
            let command = MarkDownUtil.getPreviewCommandTag(displayColumn);
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
    static getPreviewCommandTag(displayColumn) {
        if (displayColumn == vscode_1.window.activeTextEditor.viewColumn) {
            return MarkDownUtil.getCommandTogglePreview();
        }
        return MarkDownUtil.getCommandOpenPreviewSideBySide();
    }
    static getCommandTogglePreview() {
        if (textUtil_1.TextUtil.versionCompare(vscode_1.version, "1.3.0") < 0) {
            return MarkDownUtil.COMMAND_TOGGLE_PREVIEW;
        }
        return MarkDownUtil.COMMAND_TOGGLE_PREVIEW_1_3_0;
    }
    static getCommandOpenPreviewSideBySide() {
        if (textUtil_1.TextUtil.versionCompare(vscode_1.version, "1.3.0") < 0) {
            return MarkDownUtil.COMMAND_OPEN_PREVIEW_SIDE_BY_SIDE;
        }
        return MarkDownUtil.COMMAND_OPEN_PREVIEW_SIDE_BY_SIDE_1_3_0;
    }
}
MarkDownUtil.COMMAND_TOGGLE_PREVIEW = "workbench.action.markdown.togglePreview";
MarkDownUtil.COMMAND_OPEN_PREVIEW_SIDE_BY_SIDE = "workbench.action.markdown.openPreviewSideBySide";
MarkDownUtil.COMMAND_TOGGLE_PREVIEW_1_3_0 = "markdown.showPreview";
MarkDownUtil.COMMAND_OPEN_PREVIEW_SIDE_BY_SIDE_1_3_0 = "markdown.showPreviewToSide";
MarkDownUtil.COMMAND_BUTT = "";
exports.MarkDownUtil = MarkDownUtil;
//# sourceMappingURL=markDownUtil.js.map