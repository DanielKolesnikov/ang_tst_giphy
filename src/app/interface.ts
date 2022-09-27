export interface GifInterface {
  height: string;
  width: string;
  size: string;
  url: string;
}

export interface ImagesInterface {
  downsized: GifInterface;
  fixed_height: GifInterface;
  original: GifInterface;
  preview: GifInterface;
}

export interface GiphyDataInterface {
  images: ImagesInterface;
}

export interface GiphyObjectInterface {
  data: GiphyDataInterface[];
}