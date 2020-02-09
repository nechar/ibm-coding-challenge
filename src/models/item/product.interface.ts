export interface PackagingOption {
  count: number;
  price: number;
}
export interface Product {
  name: string;
  code: string;
  packagingOptions: PackagingOption[];
}
