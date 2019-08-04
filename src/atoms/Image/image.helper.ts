import { SrcSet } from './Image.types';

export function getSrcSet(srcSet: SrcSet): string {
  if (Array.isArray(srcSet)) {
    return srcSet.map(item => `${item.url} ${item.width}w`).join();
  }

  return srcSet;
}
