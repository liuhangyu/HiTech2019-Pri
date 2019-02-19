'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
class MermaidBase {
    constructor(options) {
        const defaultOptions = {
            debug: false,
            renderer: require('markdown-it')(),
        };
        options = options || {};
        lodash_1.defaults(options, defaultOptions);
        this.renderer = options.renderer;
        return this;
    }
    getRenderer() {
        return this.renderer;
    }
    loadModules(render) {
        this.container_what(render, 'mermaid');
    }
    handleMermaid(mermaidContent) {
        return mermaidContent;
    }
    container_what(md, tag) {
        const re = new RegExp('^' + tag + '(.*)$', 'i');
        return md.use(require('markdown-it-container'), tag, {
            marker: '`',
            render: (tokens, idx, options, env, self) => {
                if (tokens[idx].nesting === 1) {
                    const mermaidContent = this.getContentFromTokens(tokens, idx);
                    const mermaidHtml = this.handleMermaid(mermaidContent);
                    return `${mermaidHtml}` + '<!--';
                }
                else {
                    return '-->';
                }
            },
            validate: (params) => {
                return params.trim().match(re);
            },
        });
    }
    getContentFromTokens(tokens, startIdx) {
        let mermaidContent = '';
        for (let index = startIdx; index < tokens.length; index++) {
            const token = tokens[index];
            if (token.type === 'inline') {
                mermaidContent = token.content;
                break;
            }
        }
        return mermaidContent;
    }
}
exports.MermaidBase = MermaidBase;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWVybWFpZEJhc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcmVuZGVyL01lcm1haWRCYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7QUFDYixtQ0FBa0M7QUFRbEMsTUFBYSxXQUFXO0lBR3RCLFlBQW1CLE9BQTZCO1FBQzlDLE1BQU0sY0FBYyxHQUF3QjtZQUMxQyxLQUFLLEVBQUUsS0FBSztZQUNaLFFBQVEsRUFBRSxPQUFPLENBQUMsYUFBYSxDQUFDLEVBQUU7U0FDbkMsQ0FBQztRQUNGLE9BQU8sR0FBRyxPQUFPLElBQUksRUFBRSxDQUFDO1FBQ3hCLGlCQUFRLENBQUMsT0FBTyxFQUFFLGNBQWMsQ0FBQyxDQUFDO1FBRWxDLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQztRQUNqQyxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFTSxXQUFXO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN2QixDQUFDO0lBQ00sV0FBVyxDQUFDLE1BQVc7UUFDNUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUNNLGFBQWEsQ0FBQyxjQUFzQjtRQUN6QyxPQUFPLGNBQWMsQ0FBQztJQUN4QixDQUFDO0lBR08sY0FBYyxDQUFDLEVBQU8sRUFBRSxHQUFXO1FBRXpDLE1BQU0sRUFBRSxHQUFHLElBQUksTUFBTSxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBR2hELE9BQU8sRUFBRSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsdUJBQXVCLENBQUMsRUFBRSxHQUFHLEVBQUU7WUFDbkQsTUFBTSxFQUFFLEdBQUc7WUFDWCxNQUFNLEVBQUUsQ0FBQyxNQUFXLEVBQUUsR0FBVyxFQUFFLE9BQVksRUFBRSxHQUFRLEVBQUUsSUFBUyxFQUFFLEVBQUU7Z0JBS3RFLElBQUksTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sS0FBSyxDQUFDLEVBQUU7b0JBQzdCLE1BQU0sY0FBYyxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUM7b0JBRzlELE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLENBQUM7b0JBRXZELE9BQU8sR0FBRyxXQUFXLEVBQUUsR0FBRyxNQUFNLENBQUM7aUJBQ2xDO3FCQUFNO29CQUVMLE9BQU8sS0FBSyxDQUFDO2lCQUNkO1lBQ0gsQ0FBQztZQUNELFFBQVEsRUFBRSxDQUFDLE1BQVcsRUFBRSxFQUFFO2dCQUN4QixPQUFPLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDakMsQ0FBQztTQUNGLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTyxvQkFBb0IsQ0FBQyxNQUFXLEVBQUUsUUFBZ0I7UUFDeEQsSUFBSSxjQUFjLEdBQUcsRUFBRSxDQUFDO1FBRXhCLEtBQUssSUFBSSxLQUFLLEdBQUcsUUFBUSxFQUFFLEtBQUssR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxFQUFFO1lBQ3pELE1BQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM1QixJQUFJLEtBQUssQ0FBQyxJQUFJLEtBQUssUUFBUSxFQUFFO2dCQUMzQixjQUFjLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQztnQkFDL0IsTUFBTTthQUNQO1NBQ0Y7UUFFRCxPQUFPLGNBQWMsQ0FBQztJQUN4QixDQUFDO0NBQ0Y7QUFyRUQsa0NBcUVDIn0=