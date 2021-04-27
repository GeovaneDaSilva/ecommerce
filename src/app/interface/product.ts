
export interface IVariant {
  id: string
  price: number
  sku: string
  title: string
  image: string
  forEach: any
  length: any

  weight_unit: string
}
export interface IProduct {

  id: string
  description: string
  handle: string
  image: string
  images: any
  variant: IVariant
  variants: any
  title: string
  map: any
  find: any
  subject: string
  suggested_use : string
  slice: any


}
