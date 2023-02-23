import { Input } from '../Components/Atoms/Input/Input.js';
import { InputLabelWrapper } from '../Components/Molecules/InputLabel/InputLabel.js';
import { ForgetPasswordWrapper } from '../Components/Molecules/ForgetPasswordWrapper/ForgetPasswordWrapper.js';
import { validateEmail } from '../Utilities/validate.js';
export declare const loginElements: ({
    atom: typeof InputLabelWrapper;
    placeholder: string;
    value: string;
    labelText: string;
    inputType: string;
    name: string;
    getterName: string;
    validate: typeof validateEmail;
    type?: undefined;
} | {
    atom: typeof ForgetPasswordWrapper;
    getterName: string;
    placeholder?: undefined;
    value?: undefined;
    labelText?: undefined;
    inputType?: undefined;
    name?: undefined;
    validate?: undefined;
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
})[];
//# sourceMappingURL=login.d.ts.map