import { ReactElement } from "react";

export class Skill {
    constructor(public name: string, public element: ReactElement) {
        this.name = name;
        this.element = element;
    }
}
