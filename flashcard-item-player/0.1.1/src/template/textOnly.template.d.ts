import { Component } from "react";
interface Props {
    uid: string;
    itemJSON: any;
    container: HTMLElement;
    initOptions?: any;
}
declare class TextOnlyTemplate extends Component<Props> {
    render(): JSX.Element;
    isHeadingPresent(): boolean;
    extractHeadingFromJSON(): any;
    private getTextContent;
}
export default TextOnlyTemplate;
