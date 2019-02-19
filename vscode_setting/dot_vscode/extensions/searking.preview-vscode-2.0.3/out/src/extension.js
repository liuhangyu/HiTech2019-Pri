'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require("vscode");
const previewDocumentContentProvider_1 = require("./previewDocumentContentProvider");
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {
    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, Preview Extension Startup');
    // 文本内容提供者
    const PROVIDER = previewDocumentContentProvider_1.PreviewDocumentContentProvider.getInstance();
    // 向vscode注册当前文件发生变化时的回调函数
    vscode.workspace.onDidChangeTextDocument((e) => {
        if (!!e && !!vscode.window.activeTextEditor && e.document === vscode.window.activeTextEditor.document) {
            // 由于文档变动必然在插件启动之后，而插件启动时就已经创建了provider
            // 因此不存在该变量未定义的问题
            PROVIDER.update();
        }
    });
    vscode.window.onDidChangeTextEditorSelection((e) => {
        if (!!e && !!e.textEditor && (e.textEditor === vscode.window.activeTextEditor)) {
            PROVIDER.update();
        }
    });
    // register content provider for scheme `references`
    // register document link provider for scheme `references`
    const providerDisposable = vscode.Disposable.from(registerPreviewDocumentContentProvider());
    function registerPreviewDocumentContentProvider() {
        // 向vscode为文本内容数据库注册一个URI的协议scheme，以后均可通过该协议与文本内容数据库进行交互
        // html-preview 通过这个scheme访问的内容，都是通过该provider获得的
        return vscode.workspace.registerTextDocumentContentProvider(previewDocumentContentProvider_1.PreviewDocumentContentProvider.previewScheme, PROVIDER);
    }
    // 调用vscode系统命令预览当前HTML页面
    function sendPreviewCommand(displayColumn, editor) {
        // 给vscode发送预览该临时HTML文件的命令
        PROVIDER.sendPreviewCommand(displayColumn, editor).catch(function (error) {
            console.error("we got an error: " + error);
        });
        return;
    }
    // 调用vscode系统命令返回当前之前的页面
    function sendBackviewCommand() {
        // 给vscode发送返回预览之前页面的位置
        return vscode.commands.executeCommand("workbench.action.navigateBack").then((success) => {
        }, (reason) => {
            console.warn(reason);
            vscode.window.showErrorMessage(reason);
        });
    }
    // 调用vscode系统命令关闭当前预览的页面
    function sendCloseviewCommand() {
        // 给vscode发送返回预览之前页面的位置
        return vscode.commands.executeCommand("workbench.action.closeActiveEditor").then((success) => {
        }, (reason) => {
            console.warn(reason);
            vscode.window.showErrorMessage(reason);
        });
    }
    function getSpiltColumn() {
        let displayColumn;
        // 在拆分窗口右侧显示预览界面，若当前待预览HTML文件在最右侧，则覆盖显示
        switch (vscode.window.activeTextEditor.viewColumn) {
            case vscode.ViewColumn.One:
                displayColumn = vscode.ViewColumn.Two;
                break;
            case vscode.ViewColumn.Two:
            case vscode.ViewColumn.Three:
                displayColumn = vscode.ViewColumn.Three;
                break;
            default:
                displayColumn = vscode.window.activeTextEditor.viewColumn;
                break;
        }
        return displayColumn;
    }
    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    // 命令回调函数，该命令在package.json中与快捷方式、菜单选项等关联
    // 覆盖显示预览界面
    let previewDisposable = vscode.commands.registerCommand('extension.preview', () => {
        // The code you place here will be executed every time your command is executed
        // Display a message box to the user
        // vscode.window.showInformationMessage('Hello preview!');
        let e = vscode.window.activeTextEditor;
        if (!e) {
            return sendBackviewCommand();
        }
        return sendPreviewCommand(e.viewColumn, e);
    });
    // 侧边栏打开预览界面
    let previewToSideDisposable = vscode.commands.registerCommand('extension.previewToSide', () => {
        // The code you place here will be executed every time your command is executed
        // Display a message box to the user
        // vscode.window.showInformationMessage('Hello previewToSide!');
        let e = vscode.window.activeTextEditor;
        if (!e) {
            return sendCloseviewCommand();
        }
        let displayColumn = getSpiltColumn();
        return sendPreviewCommand(displayColumn, e);
    });
    context.subscriptions.push(previewDisposable, previewToSideDisposable, providerDisposable);
}
exports.activate = activate;
// this method is called when your extension is deactivated
function deactivate() {
    console.log("Preview Extension Shutdown");
}
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map