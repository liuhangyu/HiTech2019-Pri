'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const path = require("path");
const MermaidBase_1 = require("./MermaidBase");
class MermaidRenderHTML extends MermaidBase_1.MermaidBase {
    constructor(options) {
        const defaultOptions = {
            debug: false,
            renderer: require('markdown-it')(),
            rootWebPath: path.join(__dirname, '..', '..', '..', '..'),
        };
        options = options || {};
        lodash_1.defaults(options, defaultOptions);
        super({
            debug: options.debug,
            renderer: options.renderer,
        });
        this.rootWebPath = options.rootWebPath || '';
        this.head = '';
        return this;
    }
    getRenderHead(forceMode) {
        let head = this.head;
        if (forceMode && !head) {
            head = this.generateHeader();
        }
        return head;
    }
    getRenderHTML(mdContent) {
        this.registerThisPlugin();
        const bodyStr = this.getRenderer().render(mdContent);
        const headStr = this.getRenderHead(false);
        return {
            body: bodyStr,
            head: headStr,
        };
    }
    handleMermaid(mermaidContent) {
        if (!this.head) {
            this.head = this.generateHeader();
        }
        const body = `<hr>
    <div class="mermaid">
        ${mermaidContent}
    </div>`;
        return body;
    }
    registerThisPlugin() {
        const renderer = this.getRenderer();
        this.loadModules(renderer);
    }
    generateHeader() {
        const sourcePath = path.join(this.rootWebPath, 'node_modules/mermaid/dist/mermaid.min.js');
        const head = `<script src="${sourcePath}">
    <script type="text/javascript">
        mermaid.initialize({startOnLoad: true, theme: 'forest'});
    </script>`;
        return head;
    }
}
exports.MermaidRenderHTML = MermaidRenderHTML;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWVybWFpZFJlbmRlckhUTUwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcmVuZGVyL01lcm1haWRSZW5kZXJIVE1MLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7QUFDYixtQ0FBa0M7QUFDbEMsNkJBQTZCO0FBQzdCLCtDQUFpRTtBQVdqRSxNQUFhLGlCQUFrQixTQUFRLHlCQUFXO0lBR2hELFlBQW1CLE9BQW1DO1FBQ3BELE1BQU0sY0FBYyxHQUE4QjtZQUNoRCxLQUFLLEVBQUUsS0FBSztZQUNaLFFBQVEsRUFBRSxPQUFPLENBQUMsYUFBYSxDQUFDLEVBQUU7WUFDbEMsV0FBVyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQztTQUMxRCxDQUFDO1FBQ0YsT0FBTyxHQUFHLE9BQU8sSUFBSSxFQUFFLENBQUM7UUFDeEIsaUJBQVEsQ0FBQyxPQUFPLEVBQUUsY0FBYyxDQUFDLENBQUM7UUFFbEMsS0FBSyxDQUFDO1lBQ0osS0FBSyxFQUFFLE9BQU8sQ0FBQyxLQUFLO1lBQ3BCLFFBQVEsRUFBRSxPQUFPLENBQUMsUUFBUTtTQUMzQixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxXQUFXLElBQUksRUFBRSxDQUFDO1FBQzdDLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ2YsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBQ00sYUFBYSxDQUFDLFNBQWtCO1FBQ3JDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDckIsSUFBSSxTQUFTLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDdEIsSUFBSSxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUM5QjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUNNLGFBQWEsQ0FBQyxTQUFpQjtRQUNwQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUUxQixNQUFNLE9BQU8sR0FBVyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzdELE1BQU0sT0FBTyxHQUFXLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbEQsT0FBTztZQUNMLElBQUksRUFBRSxPQUFPO1lBQ2IsSUFBSSxFQUFFLE9BQU87U0FDZCxDQUFDO0lBQ0osQ0FBQztJQUVNLGFBQWEsQ0FBQyxjQUFzQjtRQUN6QyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNkLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1NBQ25DO1FBQ0QsTUFBTSxJQUFJLEdBQUc7O1VBRVAsY0FBYztXQUNiLENBQUM7UUFDUixPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFTSxrQkFBa0I7UUFDdkIsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVPLGNBQWM7UUFDcEIsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FDMUIsSUFBSSxDQUFDLFdBQVcsRUFDaEIsMENBQTBDLENBQzNDLENBQUM7UUFDRixNQUFNLElBQUksR0FBRyxnQkFBZ0IsVUFBVTs7O2NBRzdCLENBQUM7UUFDWCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7Q0FDRjtBQWpFRCw4Q0FpRUMifQ==