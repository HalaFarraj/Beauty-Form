interface IinputLabelProps {
    labelText: string;
    inputType: string;
    placeholder?: string;
    value?: string;
    name?: string;
    onBlur?: EventListenerOrEventListenerObject;
    onChange?: EventListenerOrEventListenerObject;
    onSubmit?: EventListenerOrEventListenerObject;
}
export declare class InputLabelWrapper {
    private _inputLabelWrapper;
    private _errorMessage;
    constructor(obj: IinputLabelProps);
    get InputLabelWrapper(): HTMLDivElement;
}
export {};
//# sourceMappingURL=InputLabel.d.ts.map