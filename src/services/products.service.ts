import { Injectable } from '@nestjs/common';
import {
  CreateProductDTO,
  Product,
  UpdateProductDTO,
  DeleteProductDTO,
  PackagingOptionDTO,
  CreateOrderDTO,
  OrderResponse,
} from '../models';
import { exampleProduct } from '../data/exampleProduct';
@Injectable()
export class ProductService {
  products: Product[];

  constructor() {
    this.products = [exampleProduct];
  }

  getAll() {
    return this.products;
  }

  create(createProductDTO: CreateProductDTO) {
    this.products.push({ ...createProductDTO, packagingOptions: [] });
  }

  addOptions(packagingOptionDTO: PackagingOptionDTO) {
    try {
      const { count, price, code } = packagingOptionDTO;
      const productIndex = this.products.findIndex(
        (product) => product.code === code,
      );
      this.products[productIndex].packagingOptions.push({ count, price });
    } catch {
      throw new Error(`Could not find the product`);
    }
  }

  update(updateProductDTO: UpdateProductDTO) {
    try {
      const productIndex = this.products.findIndex(
        (product) => product.code === updateProductDTO.code,
      );
      this.products[productIndex].name = updateProductDTO.name;
    } catch {
      throw new Error(`Could not find the product`);
    }
  }

  delete(deleteProductDTO: DeleteProductDTO) {
    try {
      this.products = this.products.filter(
        (product) => product.code !== deleteProductDTO.code,
      );
    } catch {
      throw new Error(`Could not find the product`);
    }
  }
  // : OrderResponse
  makeOrder(createOrderDTO: CreateOrderDTO) {
    try {
      const { quantity, code } = createOrderDTO;
      console.log('quantity', quantity);

      const productIndex = this.products.findIndex(
        (product) => product.code === code,
      );

      const product = this.products[productIndex];

      console.log('product', product);

      const packagingOptionsCount = product.packagingOptions.map(
        (packagingOptions) => packagingOptions.count,
      );

      // Optional
      packagingOptionsCount.sort((a, b) => b - a);

      // const sorted = this.sort(packagingOptionsCount);
      console.log('packagingOptionsCount', packagingOptionsCount);
      // console.log('sorted', sorted);
    } catch {
      throw new Error(`Could not find the product`);
    }
  }

  getSum(numberArray: number[]): number {
    return numberArray.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
    );
  }
}
