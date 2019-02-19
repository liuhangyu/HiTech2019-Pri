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
const shellUtil_1 = require("./shellUtil");
const path = require("path");
class DocutilsUtil {
    static docutils(command, fileName) {
        return __awaiter(this, void 0, void 0, function* () {
            let commandName = path.basename(command);
            try {
                return shellUtil_1.ShellUtil.execPromisLike([
                    "\"" + command + "\"",
                    "\"" + fileName + "\""
                ].join(" "));
            }
            catch (error) {
                if (commandName != command) {
                    return shellUtil_1.ShellUtil.execPromisLike([
                        "\"" + commandName + "\"",
                        "\"" + fileName + "\""
                    ].join(" "));
                }
                throw error;
            }
        });
    }
    static buildhtml(fileName) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.docutils("buildhtml.py", fileName);
        });
    }
    static rst2html(fileName) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.docutils("rst2html.py", fileName);
        });
    }
    static rst2html5(fileName) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.docutils("rst2html5.py", fileName);
        });
    }
    static rst2latex(fileName) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.docutils("rst2latex.py", fileName);
        });
    }
    static rst2man(fileName) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.docutils("rst2man.py", fileName);
        });
    }
    static rst2odt(fileName) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.docutils("rst2odt.py", fileName);
        });
    }
    static rst2odt_prepstyles(fileName) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.docutils("rst2odt_prepstyles.py", fileName);
        });
    }
    static rst2pseudoxml(fileName) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.docutils("rst2pseudoxml.py", fileName);
        });
    }
    static rst2s5(fileName) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.docutils("rst2s5.py", fileName);
        });
    }
    static rst2xetex(fileName) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.docutils("rst2xetex.py", fileName);
        });
    }
    static rst2xml(fileName) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.docutils("rst2xml.py", fileName);
        });
    }
    static rstpep2html(fileName) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.docutils("rstpep2html.py", fileName);
        });
    }
}
exports.DocutilsUtil = DocutilsUtil;
//# sourceMappingURL=docutilsUtil.js.map