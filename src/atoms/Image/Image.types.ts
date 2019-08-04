export interface ImageSizes {
  height: number;
  width: number;
  url: string;
}

export type SrcSet = string | ImageSizes[];

export interface Image {
  width: number;
  height: number;
  srcSet: SrcSet;
}
