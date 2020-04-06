import React from "react";
interface ImageViewerProps {
    imageURL: string;
    height: string;
}
declare const ImageViewer: React.ForwardRefExoticComponent<ImageViewerProps & React.RefAttributes<HTMLImageElement>>;
export default ImageViewer;
