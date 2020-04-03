/// <reference types="react" />
import CardModel from "../model/card-model";
export declare class CardTemplateFactory {
    private static TemplateMap;
    static getTemplate(uid: string, itemJSON: any, cardModel: CardModel, container: HTMLElement, initOptions: any): JSX.Element;
}
