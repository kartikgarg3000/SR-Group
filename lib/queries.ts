export const CHEMICAL_PRODUCTS_QUERY = `
  *[_type == "product" && business->slug.current == "sr-trade-vision"]{
    _id,
    name,
    description,
    category,
    "imageUrl": image.asset->url
  }
`;

export const INDUSTRIAL_PRODUCTS_QUERY = `
  *[_type == "product" && business->slug.current == "sr-industrial-corp"]{
    _id,
    name,
    description,
    "imageUrl": image.asset->url
  }
`;
