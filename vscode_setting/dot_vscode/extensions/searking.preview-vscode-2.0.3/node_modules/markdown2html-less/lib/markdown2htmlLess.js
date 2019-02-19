"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const render_1 = require("./render/render");
require("./utils/json");
const log_1 = require("./utils/log");
class Markdown2HtmlLess {
    constructor(options = {}) {
        this.defaultOptions = {
            abbr: true,
            anchor: true,
            attrs: true,
            debug: false,
            deflist: true,
            emoji: true,
            expandTabs: true,
            footnote: true,
            highlightjs: true,
            ins: true,
            lazyHeaders: true,
            mark: true,
            mermaid: true,
            sub: true,
            sup: true,
            taskLists: true,
        };
        if (typeof options !== 'object') {
            throw Error('second argument must be an object');
        }
        options = options || {};
        lodash_1.defaults(options, this.defaultOptions);
        this.options = options;
        return this;
    }
    markdown2html(markdown) {
        if (typeof markdown !== 'string') {
            throw Error('first argument must be a string');
        }
        this.log(this.banner());
        const markdownRenderOptions = {
            abbr: this.options.abbr,
            anchor: this.options.anchor,
            attrs: this.options.attrs,
            debug: this.options.debug,
            deflist: this.options.deflist,
            emoji: this.options.emoji,
            expandTabs: this.options.expandTabs,
            footnote: this.options.footnote,
            highlightjs: this.options.highlightjs,
            ins: this.options.ins,
            lazyHeaders: this.options.lazyHeaders,
            mark: this.options.mark,
            mermaid: this.options.mermaid,
            sub: this.options.sub,
            sup: this.options.sup,
            taskLists: this.options.taskLists,
        };
        const render = new render_1.MarkdownRender(markdownRenderOptions);
        const html = render.renderToHtml(markdown);
        if (this.options.debug) {
            html.body = this.debugHeader() + '\n' + html.body;
        }
        return html;
    }
    log(msg) {
        if (this.options.debug) {
            log_1.Log.print(msg);
        }
    }
    banner() {
        let banner = '\n\n' + 'markdown2html-pro';
        banner += 'Parse markdown into HTML and add syntax highlighting';
        return banner;
    }
    debugHeader() {
        const info = require('../package.json') || {};
        const debugHeader = '<!--' +
            ' this HTML was generated using markdown2html-pro version ' +
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
        return debugHeader;
    }
}
exports.Markdown2HtmlLess = Markdown2HtmlLess;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFya2Rvd24yaHRtbExlc3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvbWFya2Rvd24yaHRtbExlc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtQ0FBa0M7QUFDbEMsNENBS3lCO0FBRXpCLHdCQUFzQjtBQUN0QixxQ0FBa0M7QUFLbEMsTUFBYSxpQkFBaUI7SUFzQjVCLFlBQVksVUFBMkIsRUFBRTtRQW5CakMsbUJBQWMsR0FBb0I7WUFDeEMsSUFBSSxFQUFFLElBQUk7WUFDVixNQUFNLEVBQUUsSUFBSTtZQUNaLEtBQUssRUFBRSxJQUFJO1lBQ1gsS0FBSyxFQUFFLEtBQUs7WUFDWixPQUFPLEVBQUUsSUFBSTtZQUNiLEtBQUssRUFBRSxJQUFJO1lBQ1gsVUFBVSxFQUFFLElBQUk7WUFDaEIsUUFBUSxFQUFFLElBQUk7WUFDZCxXQUFXLEVBQUUsSUFBSTtZQUNqQixHQUFHLEVBQUUsSUFBSTtZQUNULFdBQVcsRUFBRSxJQUFJO1lBQ2pCLElBQUksRUFBRSxJQUFJO1lBQ1YsT0FBTyxFQUFFLElBQUk7WUFDYixHQUFHLEVBQUUsSUFBSTtZQUNULEdBQUcsRUFBRSxJQUFJO1lBQ1QsU0FBUyxFQUFFLElBQUk7U0FDaEIsQ0FBQztRQUdBLElBQUksT0FBTyxPQUFPLEtBQUssUUFBUSxFQUFFO1lBQy9CLE1BQU0sS0FBSyxDQUFDLG1DQUFtQyxDQUFDLENBQUM7U0FDbEQ7UUFDRCxPQUFPLEdBQUcsT0FBTyxJQUFJLEVBQUUsQ0FBQztRQUN4QixpQkFBUSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRU0sYUFBYSxDQUFDLFFBQWdCO1FBQ25DLElBQUksT0FBTyxRQUFRLEtBQUssUUFBUSxFQUFFO1lBQ2hDLE1BQU0sS0FBSyxDQUFDLGlDQUFpQyxDQUFDLENBQUM7U0FDaEQ7UUFFRCxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO1FBQ3hCLE1BQU0scUJBQXFCLEdBQTJCO1lBQ3BELElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUk7WUFDdkIsTUFBTSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTTtZQUMzQixLQUFLLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLO1lBQ3pCLEtBQUssRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUs7WUFDekIsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTztZQUM3QixLQUFLLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLO1lBQ3pCLFVBQVUsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVU7WUFDbkMsUUFBUSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUTtZQUMvQixXQUFXLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXO1lBQ3JDLEdBQUcsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUc7WUFDckIsV0FBVyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVztZQUNyQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJO1lBQ3ZCLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU87WUFDN0IsR0FBRyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRztZQUNyQixHQUFHLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHO1lBQ3JCLFNBQVMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVM7U0FDbEMsQ0FBQztRQUNGLE1BQU0sTUFBTSxHQUFvQixJQUFJLHVCQUFjLENBQUMscUJBQXFCLENBQUMsQ0FBQztRQUMxRSxNQUFNLElBQUksR0FBd0IsTUFBTSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUVoRSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFO1lBQ3RCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxHQUFHLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1NBQ25EO1FBRUQsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBQ08sR0FBRyxDQUFDLEdBQVc7UUFDckIsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRTtZQUN0QixTQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ2hCO0lBQ0gsQ0FBQztJQUNPLE1BQU07UUFDWixJQUFJLE1BQU0sR0FBVyxNQUFNLEdBQUcsbUJBQW1CLENBQUM7UUFDbEQsTUFBTSxJQUFJLHNEQUFzRCxDQUFDO1FBQ2pFLE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFDTyxXQUFXO1FBQ2pCLE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUM5QyxNQUFNLFdBQVcsR0FDZixNQUFNO1lBQ04sMkRBQTJEO1lBQzNELElBQUksQ0FBQyxPQUFPO1lBQ1osR0FBRztZQUNILHlCQUF5QjtZQUN6QixJQUFJLENBQUMsU0FBUztZQUNkLEdBQUc7WUFDSCxnRkFBZ0Y7WUFDaEYsd0JBQXdCO1lBQ3hCLElBQUksQ0FBQyxhQUFhO1lBQ2xCLEdBQUc7WUFDSCxPQUFPLENBQUM7UUFFVixPQUFPLFdBQVcsQ0FBQztJQUNyQixDQUFDO0NBQ0Y7QUE3RkQsOENBNkZDIn0=