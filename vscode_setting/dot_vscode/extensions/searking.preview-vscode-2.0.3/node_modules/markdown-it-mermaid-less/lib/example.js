"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const markdown_it_mermaid_less_1 = require("./markdown-it-mermaid-less");
const taskList = `
\`\`\`mermaid
graph TD;
A-->B;
A-->C;
B-->D;
C-->D;
\`\`\`
`;
const mixed = `
#### GFM task list
- [x] GFM task list 1
- [x] GFM task list 2
- [ ] GFM task list 3
    - [ ] GFM task list 3-1
    - [ ] GFM task list 3-2
    - [ ] GFM task list 3-3
- [ ] GFM task list 4
    - [ ] GFM task list 4-1
    - [ ] GFM task list 4-2

\`\`\`mermaid
graph LR;  
　　A-->B;    
　　A-->C;  
　　B-->D;  
　　C-->D;  
\`\`\`
`;
((md) => {
    const defaultRootWebPath = path.join(__dirname, '..');
    const options = {
        rootWebPath: defaultRootWebPath,
    };
    const html = markdown_it_mermaid_less_1.mermaid2html(md, options);
    console.log('html = ', html);
    return;
})(taskList);
((md) => {
    const defaultRootWebPath = path.join(__dirname, '..');
    const options = {
        rootWebPath: defaultRootWebPath,
    };
    const html = markdown_it_mermaid_less_1.mermaid2html(md, options);
    console.log('html = ', html);
    return;
})(mixed);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNkJBQTZCO0FBRTdCLHlFQUlvQztBQUVwQyxNQUFNLFFBQVEsR0FBVzs7Ozs7Ozs7Q0FReEIsQ0FBQztBQUNGLE1BQU0sS0FBSyxHQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBbUJyQixDQUFDO0FBRUYsQ0FBQyxDQUFDLEVBQVUsRUFBRSxFQUFFO0lBQ2QsTUFBTSxrQkFBa0IsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUV0RCxNQUFNLE9BQU8sR0FBeUI7UUFDcEMsV0FBVyxFQUFFLGtCQUFrQjtLQUNoQyxDQUFDO0lBRUYsTUFBTSxJQUFJLEdBQXdCLHVDQUFZLENBQUMsRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzVELE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzdCLE9BQU87QUFDVCxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNiLENBQUMsQ0FBQyxFQUFVLEVBQUUsRUFBRTtJQUNkLE1BQU0sa0JBQWtCLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFFdEQsTUFBTSxPQUFPLEdBQXlCO1FBQ3BDLFdBQVcsRUFBRSxrQkFBa0I7S0FDaEMsQ0FBQztJQUVGLE1BQU0sSUFBSSxHQUF3Qix1Q0FBWSxDQUFDLEVBQUUsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUM1RCxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM3QixPQUFPO0FBQ1QsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMifQ==