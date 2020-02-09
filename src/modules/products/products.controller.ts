import { Controller, Get, Body, Put, Post, Delete } from '@nestjs/common';
import { ProductService } from '../../services';
import {
  CreateProductDTO,
  UpdateProductDTO,
  PackagingOptionDTO,
  DeleteProductDTO,
} from '../../models';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Products')
@Controller()
export class ProductsController {
  constructor(private readonly productService: ProductService) {}

  @Post('products')
  save(@Body() createProductDTO: CreateProductDTO) {
    return {
      success: true,
    };
  }

  @Post('packagingOptions')
  addOptions(@Body() packagingOptionDTO: PackagingOptionDTO) {
    return {
      success: true,
    };
  }

  @Get('products')
  getAll() {
    return this.productService.getAll();
  }

  @Put('products')
  update(@Body() updateProductDTO: UpdateProductDTO) {
    let success = true;
    try {
      this.productService.update(updateProductDTO);
    } catch {
      success = false;
    }
    return {
      success,
    };
  }

  @Delete('products')
  delete(@Body() deleteProductDTO: DeleteProductDTO) {}
}
