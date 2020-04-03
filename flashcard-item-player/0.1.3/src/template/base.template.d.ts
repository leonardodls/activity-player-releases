import { Component } from "react";
declare class BaseTemplate extends Component<any> {
    protected isHeadingPresent(): boolean;
    protected extractHeadingFromJSON(): any;
    protected getTextContent(): JSX.Element;
    protected getImageURL(): any;
    protected getTextRatio(): any;
    protected getImageRatio(): any;
}
export default BaseTemplate;
