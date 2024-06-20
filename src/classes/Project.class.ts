import { ReactElement } from "react";

export class Icon {
    constructor(public name: string, public icon: ReactElement) {
        this.name = name;
        this.icon = icon;
    }
}

export class Project {
    constructor(
        public imgs: Array<string>,
        public name: string,
        public technologies: Array<Icon>,
        public liveUrl: string,
        public repositoryUrl: string
    ) {
        this.imgs = imgs;
        this.name = name;
        this.technologies = technologies;
        this.liveUrl = liveUrl;
        this.repositoryUrl = repositoryUrl;
    }
}
