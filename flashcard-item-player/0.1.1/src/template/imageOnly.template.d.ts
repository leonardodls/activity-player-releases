import { Component } from "react";
interface Props {
    uid: string;
    itemJSON: any;
    container: HTMLElement;
    initOptions?: any;
}
export default class ImageOnlyTemplate extends Component<Props> {
    render(): JSX.Element;
    private getImageURL;
    isHeadingPresent(): boolean;
    extractHeadingFromJSON(): any;
}
export {};
