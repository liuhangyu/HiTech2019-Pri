export interface IMermaidBaseOptions {
    debug?: boolean;
    renderer?: any;
}
export declare class MermaidBase {
    private renderer;
    constructor(options?: IMermaidBaseOptions);
    getRenderer(): any;
    loadModules(render: any): void;
    handleMermaid(mermaidContent: string): string;
    private container_what;
    private getContentFromTokens;
}
