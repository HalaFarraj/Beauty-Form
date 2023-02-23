import { BackgroundImg } from '../../Atoms/BackgroundImg/BackgroundImg.js';
import { TitlesWrapper } from '../../Molecules/TitlesWrapper/TitlesWrapper.js';
import { Form } from '../../Organisms/Form.js';
import { loginElements } from '../../../Constants/login.js';
import { FORM_STRINGS } from '../../../strings/strings.js';
export class LoginTemplate {
    constructor() {
        this._templateContainer = document.createElement('div');
        this._templateContainer.className = 'form';
        let headerImg = new BackgroundImg(FORM_STRINGS.backgroungImgSrc).BackgroungImg;
        this._templateContainer.appendChild(headerImg);
        let loginForm = document.createElement('div');
        loginForm.className = 'login-form';
        let headerText = new TitlesWrapper(FORM_STRINGS.welcomeBack, '').TitlesWrapper;
        loginForm.appendChild(headerText);
        let formBody = new Form('loginForm', false, loginElements).Form;
        loginForm.appendChild(formBody);
        this._templateContainer.appendChild(loginForm);
    }
    get LoginTemplate() {
        return this._templateContainer;
    }
}
//# sourceMappingURL=LoginTemplate.js.map