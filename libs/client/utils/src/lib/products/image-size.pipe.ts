import { Pipe, PipeTransform } from '@angular/core';

export type ImageSize = 'card' | 'hero';

const IMAGE_SIZES: Record<ImageSize, number> = {
  card: 400,
  hero: 640,
};

@Pipe({
  name: 'ssrmartImageSize',
})
export class ImageSizePipe implements PipeTransform {
  transform(imageUrl: string, size: ImageSize): string {
    const separator = imageUrl.includes('?') ? '&' : '?';
    return `${imageUrl}${separator}w=${IMAGE_SIZES[size]}`;
  }
}
