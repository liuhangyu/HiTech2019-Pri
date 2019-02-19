'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const MermaidRenderHTML_1 = require("./render/MermaidRenderHTML");
const log_1 = require("./utils/log");
function mermaid_pro_plugin(md, options) {
    const ro = {
        debug: options.debug,
        renderer: md,
        rootWebPath: options.rootWebPath,
    };
    const mr = new MermaidRenderHTML_1.MermaidRenderHTML(ro);
    mr.registerThisPlugin();
    options.returnHead = mr.getRenderHead(true);
    return;
}
exports.mermaid_pro_plugin = mermaid_pro_plugin;
function mermaid2html(markdownContent, options) {
    if (typeof markdownContent !== 'string') {
        throw Error('first argument must be a string');
    }
    const md = options.renderer || require('markdown-it')();
    const ro = {
        debug: options.debug,
        rootWebPath: options.rootWebPath,
    };
    const mr = new MermaidRenderHTML_1.MermaidRenderHTML(ro);
    const html = mr.getRenderHTML(markdownContent);
    if (!!options && options.debug) {
        html.body = debugHeader() + '\n' + html.body;
    }
    return html;
}
exports.mermaid2html = mermaid2html;
function log(msg, debug) {
    if (debug) {
        log_1.Log.print(msg);
    }
}
function debugHeader() {
    const info = require('../package.json') || {};
    const debugHeaderStr = '<!--' +
        ' this HTML was generated using markdown-it-mermaid-pro version ' +
        info.version +
        '.' +
        ' see an issue? file at ' +
        info.issuesUrl +
        '.' +
        ' please include the version in your issue. thanks for using markdown2html-pro!' +
        ' to learn more, visit ' +
        info.repositoryUrl +
        '.' +
        '  -->';
    return debugHeaderStr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFya2Rvd24taXQtbWVybWFpZC1sZXNzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL21hcmtkb3duLWl0LW1lcm1haWQtbGVzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7O0FBQ2Isa0VBSW9DO0FBQ3BDLHFDQUFrQztBQWVsQyxTQUFnQixrQkFBa0IsQ0FDaEMsRUFBTyxFQUNQLE9BQWtDO0lBRWxDLE1BQU0sRUFBRSxHQUE4QjtRQUNwQyxLQUFLLEVBQUUsT0FBTyxDQUFDLEtBQUs7UUFDcEIsUUFBUSxFQUFFLEVBQUU7UUFDWixXQUFXLEVBQUUsT0FBTyxDQUFDLFdBQVc7S0FDakMsQ0FBQztJQUNGLE1BQU0sRUFBRSxHQUFHLElBQUkscUNBQWlCLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDckMsRUFBRSxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDeEIsT0FBTyxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVDLE9BQU87QUFDVCxDQUFDO0FBYkQsZ0RBYUM7QUFDRCxTQUFnQixZQUFZLENBQzFCLGVBQXVCLEVBQ3ZCLE9BQTZCO0lBRTdCLElBQUksT0FBTyxlQUFlLEtBQUssUUFBUSxFQUFFO1FBQ3ZDLE1BQU0sS0FBSyxDQUFDLGlDQUFpQyxDQUFDLENBQUM7S0FDaEQ7SUFDRCxNQUFNLEVBQUUsR0FBRyxPQUFPLENBQUMsUUFBUSxJQUFJLE9BQU8sQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDO0lBQ3hELE1BQU0sRUFBRSxHQUE4QjtRQUNwQyxLQUFLLEVBQUUsT0FBTyxDQUFDLEtBQUs7UUFDcEIsV0FBVyxFQUFFLE9BQU8sQ0FBQyxXQUFXO0tBQ2pDLENBQUM7SUFFRixNQUFNLEVBQUUsR0FBRyxJQUFJLHFDQUFpQixDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3JDLE1BQU0sSUFBSSxHQUF3QixFQUFFLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBRXBFLElBQUksQ0FBQyxDQUFDLE9BQU8sSUFBSSxPQUFPLENBQUMsS0FBSyxFQUFFO1FBQzlCLElBQUksQ0FBQyxJQUFJLEdBQUcsV0FBVyxFQUFFLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7S0FDOUM7SUFDRCxPQUFPLElBQUksQ0FBQztBQUNkLENBQUM7QUFwQkQsb0NBb0JDO0FBQ0QsU0FBUyxHQUFHLENBQUMsR0FBVyxFQUFFLEtBQWM7SUFDdEMsSUFBSSxLQUFLLEVBQUU7UUFDVCxTQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQ2hCO0FBQ0gsQ0FBQztBQUNELFNBQVMsV0FBVztJQUNsQixNQUFNLElBQUksR0FBRyxPQUFPLENBQUMsaUJBQWlCLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDOUMsTUFBTSxjQUFjLEdBQ2xCLE1BQU07UUFDTixpRUFBaUU7UUFDakUsSUFBSSxDQUFDLE9BQU87UUFDWixHQUFHO1FBQ0gseUJBQXlCO1FBQ3pCLElBQUksQ0FBQyxTQUFTO1FBQ2QsR0FBRztRQUNILGdGQUFnRjtRQUNoRix3QkFBd0I7UUFDeEIsSUFBSSxDQUFDLGFBQWE7UUFDbEIsR0FBRztRQUNILE9BQU8sQ0FBQztJQUNWLE9BQU8sY0FBYyxDQUFDO0FBQ3hCLENBQUMifQ==