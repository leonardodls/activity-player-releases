import React, { Component } from "react";
import CardModel from "../../model/card-model";
declare class TextRenderer extends Component<any> {
    ref: any;
    cardModel: CardModel;
    constructor(props: any);
    componentDidMount(): void;
    render(): JSX.Element;
    private getTextContent;
}
declare const _default: React.ForwardRefExoticComponent<Pick<Pick<any, string | number | symbol> & React.RefAttributes<TextRenderer>, string | number | symbol> & {
    theme?: any;
}>;
export default _default;
