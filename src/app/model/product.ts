export interface IVariant {
  id: string
  price: string
  sku: string
  title: string
  image: string
  weight_unit: string
}
export class Product {

  id: string
  description: string
  handle: string
  image: string
  images: any
  variant: IVariant
  title: string
  map: any
  find: any
  variants: any
  objective: string
  suggested_use: string


}