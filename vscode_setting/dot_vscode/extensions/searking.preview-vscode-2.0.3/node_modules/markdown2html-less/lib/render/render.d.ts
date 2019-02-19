export interface IMarkdownRender {
    renderToHtml(mdContent: string): IMermaid2htmlReturn;
}
export interface IMarkdownRenderOptions {
    debug?: boolean;
    linkify?: boolean;
    emoji?: boolean;
    expandTabs?: boolean;
    lazyHeaders?: boolean;
    taskLists?: boolean;
    abbr?: boolean;
    anchor?: boolean;
    attrs?: boolean;
    deflist?: boolean;
    footnote?: boolean;
    highlightjs?: boolean;
    ins?: boolean;
    mark?: boolean;
    sub?: boolean;
    sup?: boolean;
    mermaid?: boolean;
}
export interface IMermaidLessPluginOptions {
    debug?: boolean;
    returnHead?: string;
    rootWebPath?: string;
}
export interface IMermaid2htmlReturn {
    body?: string;
    head?: string;
}
export declare class MarkdownRender implements IMarkdownRender {
    private modules;
    private options;
    private mermaidOptions;
    constructor(options?: IMarkdownRenderOptions);
    renderToHtml(mdContent: string): IMermaid2htmlReturn;
    private getInitOptions;
    private loadModules;
    private getRenderer;
}
