export declare type TagsSpecifier = string | string[];
export declare type Attr = string | true;
export interface ParseOptions {
    tagKey?: string;
}
declare function extend(tags: TagsSpecifier, options: ParseOptions): (source: string) => (Record<string, Attr> | undefined)[];
declare function parse(source: string, tags: TagsSpecifier, options: ParseOptions): (Record<string, Attr> | undefined)[];
declare function parseAttrs(htmlTagText: string, tagKey?: string): Record<string, Attr> | undefined;
declare function stripComments(html: string): string;
export { extend, parse, parseAttrs, stripComments };
export default parse;
