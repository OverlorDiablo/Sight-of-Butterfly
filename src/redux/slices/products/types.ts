export type ProductItem = {
  productId: number,
  categoryId: number,
  productName: string,
  productDescriptionShort: string,
  productDescriptionLong: string,
  value: number,
  typeOfValue: string,
  characteristics: string[],
  tdsPdfLink: string,
  otherPdfLink: string,
  productImg: string,
}

export interface ProductsSliceState {
  products: ProductItem[]
}