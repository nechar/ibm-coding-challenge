import { Injectable } from '@nestjs/common';
import {
  CreateProductDTO,
  Product,
  UpdateProductDTO,
  DeleteProductDTO,
  PackagingOptionDTO,
  CreateOrderDTO,
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

  makeOrder(createOrderDTO: CreateOrderDTO) {
    try {
      const { quantity, code } = createOrderDTO;
      const productIndex = this.products.findIndex(
        (product) => product.code === code,
      );

      const product = this.products[productIndex];

      console.log('product', product);

      const packagingOptionsCount = product.packagingOptions.map(
        (packagingOptions) => packagingOptions.count,
      );
      console.log('packagingOptionsCount', packagingOptionsCount);
    } catch {
      throw new Error(`Could not find the product`);
    }
  }
}
