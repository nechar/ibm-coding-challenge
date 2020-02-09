export interface PackagingOption {
  count: number;
  price: number;
}
export interface Item {
  name: string;
  code: string;
  packagingOptions: PackagingOption[];
}
