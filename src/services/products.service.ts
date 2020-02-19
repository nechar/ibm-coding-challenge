import { Injectable } from '@nestjs/common';
import {
  CreateProductDTO,
  Product,
  UpdateProductDTO,
  DeleteProductDTO,
  PackagingOptionDTO,
} from '../models';
import { defaultProducts } from '../data/defaultProducts';
@Injectable()
export class ProductService {
  products: Product[];

  constructor() {
    this.products = defaultProducts;
  }

  getAll() {
    return this.products;
  }

  create(createProductDTO: CreateProductDTO) {
    const existingProduct = this.products.find(
      (product) => product.code === createProductDTO.code,
    );
    if (existingProduct) {
      throw new Error(`Product already exist`);
    }
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

  findProduct(code): Product {
    const foundProduct = this.products.find((product) => product.code === code);
    // Sort by descending order based on the count
    const sorted = foundProduct.packagingOptions.sort(
      (a, b) => b.count - a.count,
    );
    foundProduct.packagingOptions = sorted;
    return foundProduct;
  }
}
