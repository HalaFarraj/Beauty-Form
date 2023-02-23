export interface IinputProperties {
    type?: string;
    placeholder: string;
    value: string;
    name: string;
    onChange?: EventListenerOrEventListenerObject;
    onBlur?: EventListenerOrEventListenerObject;
    onSubmit?: EventListenerOrEventListenerObject;
}
export declare class Input {
    private _input;
    constructor(inputProperties: IinputProperties);
    get Input(): HTMLInputElement;
}
//# sourceMappingURL=Input.d.ts.map