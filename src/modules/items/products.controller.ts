import { Controller, Get, Body, Put, Post, Delete } from '@nestjs/common';
import { ProductService } from '../../services';
import {
  CreateProductDTO,
  UpdateProductDTO,
  PackagingOptionDTO,
} from '../../models';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Products')
@Controller()
export class ItemsController {
  constructor(private readonly productService: ProductService) {}

  @Post('products')
  save(@Body() createProductDTO: CreateProductDTO) {
    return {
      success: true,
    };
  }

  @Post('packagingOptions')
  addOptions(@Body() packagingOptionDTO: PackagingOptionDTO) {
    return packagingOptionDTO;
  }

  @Get('products')
  getAll() {
    return this.productService.getAll();
  }

  @Put('products')
  update(@Body() updateItemDTO: UpdateProductDTO) {}
}
