interface ILinkProperties {
    text: string;
    onClick?: EventListenerOrEventListenerObject;
}
export declare class Link {
    private _link;
    constructor(linkProps: ILinkProperties);
    get Link(): HTMLAnchorElement;
}
export {};
//# sourceMappingURL=Link.d.ts.map