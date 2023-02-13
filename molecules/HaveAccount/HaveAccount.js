import { AnchorTag } from '../../atoms/AnchorTag/AnchorTag.js';
import { Heading } from '../../atoms/Heading/Heading.js';
import { switchContent } from '../../utilities/switchContent.js';

export class HaveAccount {
  constructor(have) {
    this.haveAccount = document.createElement('div');
    this.haveAccount.className = 'no-account';

    let heading;
    let anchor;

    if (have) {
      // shows "Already have an account? Sign In"
      heading = new Heading('h4', 'Already have an account?');
      anchor = new AnchorTag({text:'Sign In',onClick: ()=>{
        console.log("onclick")
        switchContent(1,0)
      }});
      // anchor.switchContent;
    } else {
      heading = new Heading('h4', "Don't have an account?");
      anchor = new AnchorTag({text:'Sign Up',onClick:()=>{
switchContent(0,1)
      }});
      
      // anchor.switchContent();
    }

    this.haveAccount.appendChild(heading.Heading);
    this.haveAccount.appendChild(anchor.AnchorTag);
  }



  get HaveAccount() {
    return this.haveAccount;
  }
}
