import { createImageUrlBuilder } from '@sanity/image-url';
import { sanityClient } from './sanity';

/**
 * Minimal, safe image source type for Sanity images
 * (officially recommended approach)
 */
type SanityImage = {
  asset: {
    _ref: string;
    _type: 'reference';
  };
};

const builder = createImageUrlBuilder(sanityClient);

export function urlFor(source: SanityImage) {
  return builder.image(source);
}
