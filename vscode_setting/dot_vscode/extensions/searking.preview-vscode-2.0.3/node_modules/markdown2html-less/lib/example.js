"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const markdown2htmlLess_1 = require("./markdown2htmlLess");
const taskList = `#### GFM task list
- [x] GFM task list 1
- [x] GFM task list 2
- [ ] GFM task list 3
    - [ ] GFM task list 3-1
    - [ ] GFM task list 3-2
    - [ ] GFM task list 3-3
- [ ] GFM task list 4
    - [ ] GFM task list 4-1
    - [ ] GFM task list 4-2
    `;
const mermaid = `
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
((markdownContent) => {
    const markdown2htmlPro = new markdown2htmlLess_1.Markdown2HtmlLess();
    const html = markdown2htmlPro.markdown2html(markdownContent);
    console.log('html = ', html);
    return html;
})(taskList);
((markdownContent) => {
    const markdown2htmlPro = new markdown2htmlLess_1.Markdown2HtmlLess();
    const html = markdown2htmlPro.markdown2html(markdownContent);
    console.log('html = ', html);
    return html;
})(mermaid);
((markdownContent) => {
    const markdown2htmlPro = new markdown2htmlLess_1.Markdown2HtmlLess();
    const html = markdown2htmlPro.markdown2html(markdownContent);
    console.log('html = ', html);
    return html;
})(mixed);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsMkRBQXdEO0FBQ3hELE1BQU0sUUFBUSxHQUFXOzs7Ozs7Ozs7O0tBVXBCLENBQUM7QUFDTixNQUFNLE9BQU8sR0FBVzs7Ozs7Ozs7S0FRbkIsQ0FBQztBQUNOLE1BQU0sS0FBSyxHQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBbUJyQixDQUFDO0FBQ0YsQ0FBQyxDQUFDLGVBQXVCLEVBQUUsRUFBRTtJQUMzQixNQUFNLGdCQUFnQixHQUFHLElBQUkscUNBQWlCLEVBQUUsQ0FBQztJQUNqRCxNQUFNLElBQUksR0FBRyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLENBQUM7SUFFN0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDN0IsT0FBTyxJQUFJLENBQUM7QUFDZCxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNiLENBQUMsQ0FBQyxlQUF1QixFQUFFLEVBQUU7SUFDM0IsTUFBTSxnQkFBZ0IsR0FBRyxJQUFJLHFDQUFpQixFQUFFLENBQUM7SUFDakQsTUFBTSxJQUFJLEdBQUcsZ0JBQWdCLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBRTdELE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzdCLE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDWixDQUFDLENBQUMsZUFBdUIsRUFBRSxFQUFFO0lBQzNCLE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSxxQ0FBaUIsRUFBRSxDQUFDO0lBQ2pELE1BQU0sSUFBSSxHQUFHLGdCQUFnQixDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUU3RCxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM3QixPQUFPLElBQUksQ0FBQztBQUNkLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDIn0=