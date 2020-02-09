import { Injectable } from '@nestjs/common';
import {
  CreateProductDTO,
  Product,
  UpdateProductDTO,
  DeleteProductDTO,
  PackagingOptionDTO,
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
      const productIndex = this.products.findIndex(
        (product) => product.code === packagingOptionDTO.code,
      );
      const { count, price } = packagingOptionDTO;
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
}
