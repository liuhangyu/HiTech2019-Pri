import { MermaidBase } from './MermaidBase';
export interface IMermaidRenderHTMLOptions {
    debug?: boolean;
    renderer?: any;
    rootWebPath?: string;
}
export interface IMermaidRenderHTML {
    body?: string;
    head?: string;
}
export declare class MermaidRenderHTML extends MermaidBase {
    private head;
    private rootWebPath;
    constructor(options?: IMermaidRenderHTMLOptions);
    getRenderHead(forceMode: boolean): string;
    getRenderHTML(mdContent: string): IMermaidRenderHTML;
    handleMermaid(mermaidContent: string): string;
    registerThisPlugin(): void;
    private generateHeader;
}
