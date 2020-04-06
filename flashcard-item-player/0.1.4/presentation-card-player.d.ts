import CardModel from "./model/card-model";
import { IItem } from "libs-interface-item-player/src/interface-item";
export default class FlashCardPlayer implements IItem {
    cardModel: CardModel;
    constructor();
    initItem(uid: string, itemJSON: any, container: any, initOptions: any): void;
    canShowAnswer(): boolean;
    destroy(): void;
    focalise(): void;
    getOptimumDimensions(): import("libs-interface-item-player/src/interface-item").IDimensions;
    getScore(): import("libs-interface-item-player/src/interface-item").IScore;
    getState(): void;
    hasHints(): boolean;
    hasUserResponse(): boolean;
    hide(): void;
    hideAnswer(): void;
    hideHints(): void;
    lock(): void;
    redo(options: any): void;
    remainingHints(): number;
    resetDimensions(): void;
    setState(state: any, launchMode: import("libs-interface-item-player/src/interface-item").LaunchModes): void;
    show(): void;
    showAnswer(): void;
    showHints(): number;
    subscribe(eventName: string, eventHandler: Function): void;
    unlock(): void;
    unsubscribe(eventName: string, eventHandler: Function): void;
    validateResponse(options?: import("libs-interface-item-player/src/interface-item").IOptions): boolean;
}