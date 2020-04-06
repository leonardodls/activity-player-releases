import React, { Component } from "react";
import CardModel from "../model/card-model";
declare class TextOnlyTemplate extends Component<any> {
    cardModel: CardModel;
    constructor(props: any);
    render(): JSX.Element;
}
declare const _default: React.ForwardRefExoticComponent<Pick<Pick<any, string | number | symbol> & React.RefAttributes<TextOnlyTemplate>, string | number | symbol> & {
    theme?: any;
}>;
export default _default;
