import { Component } from "react";
interface Props {
    uid: string;
    itemJSON: any;
    container: HTMLElement;
    initOptions?: any;
}
export default class MediaTextTemplate extends Component<Props> {
    render(): JSX.Element;
    isHeadingPresent(): boolean;
    extractHeadingFromJSON(): any;
    private getImageURL;
    private getTextContent;
}
export {};
