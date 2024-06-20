import { ReactElement } from "react";

export class Contact {
    constructor(public element: ReactElement, public link: string, public text: string) {
        this.element = element;
        this.link = link;
        this.text = text;
    }
}
