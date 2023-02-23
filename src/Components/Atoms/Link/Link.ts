interface ILinkProperties {
  text: string;
  onClick?: EventListenerOrEventListenerObject;
}

export class Link {
  private _link: HTMLAnchorElement;
  constructor(linkProps: ILinkProperties) {
    this._link = document.createElement('a');
    this._link.innerText = linkProps.text;

    if (linkProps.onClick) {
      this._link.addEventListener('click', linkProps.onClick, false);
    }
  }

  get Link() {
    return this._link;
  }
}
