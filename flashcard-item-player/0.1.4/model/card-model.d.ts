export default class CardModel {
    itemJSON: any;
    constructor(itemJSON: any);
    isHeadingPresent(): boolean;
    extractHeadingFromJSON(): any;
    getTextContentType(): any;
    getTextContentData(): any;
    getMediaData(): any;
    getTemplateType(): any;
    getTemplateLayout(): any;
    getTemplateMediaSplitRatio(): any;
    getTemplateTextSplitRatio(): any;
}
