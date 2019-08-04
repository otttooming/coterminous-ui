declare module 'react-photoswipe' {
  import * as React from 'react';
  export interface PhotoSwipeGalleryItem {
    src: string;
    thumbnail: string;
    w: number;
    h: number;
    title: string;
  }

  export interface PhotoSwipeProps {
    afterChange?: () => void;
    beforeChange?: () => void;
    className?: string;
    close?: () => void;
    destroy?: () => void;
    gettingData?: () => void;
    id?: string;
    imageLoadComplete?: () => void;
    initialZoomIn?: () => void;
    initialZoomInEnd?: () => void;
    initialZoomOut?: () => void;
    initialZoomOutEnd?: () => void;
    isOpen: boolean;
    items: PhotoSwipeGalleryItem[];
    mouseUsed?: () => void;
    onClose?: () => void;
    options?: any;
    parseVerticalMargin?: () => void;
    preventDragEvent?: () => void;
    resize?: () => void;
    shareLinkClick?: () => void;
    unbindEvents?: () => void;
    updateScrollOffset?: () => void;
  }

  export interface PhotoSwipeGalleryProps extends PhotoSwipeProps {
    thumbnailContent: (item: PhotoSwipeGalleryItem) => React.ReactNode;
  }

  export class PhotoSwipe extends React.Component<PhotoSwipeProps> {
    render(): JSX.Element;
  }
  export class PhotoSwipeGallery extends React.Component<
    PhotoSwipeGalleryProps
  > {
    render(): JSX.Element;
  }
}
