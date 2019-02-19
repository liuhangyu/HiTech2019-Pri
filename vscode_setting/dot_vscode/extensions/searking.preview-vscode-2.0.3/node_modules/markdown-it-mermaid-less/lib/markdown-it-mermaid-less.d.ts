export interface IMermaid2htmlOptions {
    debug?: boolean;
    renderer?: any;
    rootWebPath?: string;
}
export interface IMermaid2htmlReturn {
    body?: string;
    head?: string;
}
export interface IMermaidLessPluginOptions {
    debug?: boolean;
    returnHead?: string;
    rootWebPath?: string;
}
export declare function mermaid_pro_plugin(md: any, options: IMermaidLessPluginOptions): void;
export declare function mermaid2html(markdownContent: string, options: IMermaid2htmlOptions): IMermaid2htmlReturn;
