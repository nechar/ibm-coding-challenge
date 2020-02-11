export interface Package {
  numberOfProduct: number;
  rate: number;
}

export interface OrderResponse {
  code: string;
  package: Package[];
}
