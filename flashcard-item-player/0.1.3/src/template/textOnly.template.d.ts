import { Component } from "react";
import CardModel from "../model/card-model";
declare class TextOnlyTemplate extends Component<any> {
    cardModel: CardModel;
    constructor(props: any);
    render(): JSX.Element;
}
export default TextOnlyTemplate;
