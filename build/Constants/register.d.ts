import { Input } from '../Components/Atoms/Input/Input.js';
import { CountryWrapper } from '../Components/Molecules/CountryWrapper/CountryWrapper.js';
import { Gender } from '../Components/Molecules/Gender/Gender.js';
import { InputLabelWrapper } from '../Components/Molecules/InputLabel/InputLabel.js';
import { validateEmail } from '../Utilities/validate.js';
export declare const registerElements: ({
    atom: typeof InputLabelWrapper;
    placeholder: string;
    value: string;
    labelText: string;
    inputType: string;
    name: string;
    getterName: string;
    validate: typeof validateEmail;
    selectName?: undefined;
    selectID?: undefined;
    options?: undefined;
    type?: undefined;
} | {
    atom: typeof InputLabelWrapper;
    placeholder: string;
    value: string;
    labelText: string;
    inputType: string;
    name: string;
    getterName: string;
    validate?: undefined;
    selectName?: undefined;
    selectID?: undefined;
    options?: undefined;
    type?: undefined;
} | {
    atom: typeof CountryWrapper;
    labelText: string;
    selectName: string;
    selectID: string;
    getterName: string;
    options: string[];
    placeholder?: undefined;
    value?: undefined;
    inputType?: undefined;
    name?: undefined;
    validate?: undefined;
    type?: undefined;
} | {
    atom: typeof Gender;
    getterName: string;
    placeholder?: undefined;
    value?: undefined;
    labelText?: undefined;
    inputType?: undefined;
    name?: undefined;
    validate?: undefined;
    selectName?: undefined;
    selectID?: undefined;
    options?: undefined;
    type?: undefined;
} | {
    atom: typeof Input;
    type: string;
    value: string;
    name: string;
    getterName: string;
    placeholder?: undefined;
    labelText?: undefined;
    inputType?: undefined;
    validate?: undefined;
    selectName?: undefined;
    selectID?: undefined;
    options?: undefined;
})[];
//# sourceMappingURL=register.d.ts.map