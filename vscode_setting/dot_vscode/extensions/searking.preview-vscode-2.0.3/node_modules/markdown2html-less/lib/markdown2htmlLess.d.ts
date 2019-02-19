import { IMermaid2htmlReturn } from './render/render';
import { IDefaultOptions } from './utils/configuration';
import './utils/json';
export interface IMarkdown2HtmlLess {
    markdown2html(markdown: string): IMermaid2htmlReturn;
}
export declare class Markdown2HtmlLess implements IMarkdown2HtmlLess {
    private options;
    private defaultOptions;
    constructor(options?: IDefaultOptions);
    markdown2html(markdown: string): IMermaid2htmlReturn;
    private log;
    private banner;
    private debugHeader;
}
