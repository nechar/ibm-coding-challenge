import { Controller, Get, Body, Put, Post, Delete } from '@nestjs/common';
import { ItemsService } from '../../services';
import {
  CreateProductDTO,
  UpdateProductDTO,
  PackagingOptionDTO,
} from '../../models';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Items')
@Controller()
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Post('items')
  save(@Body() createItemDTO: CreateProductDTO) {
    return {
      success: true,
    };
  }

  @Post('packagingOptions')
  addOptions(@Body() packagingOptionDTO: PackagingOptionDTO) {
    return packagingOptionDTO;
  }

  @Get('items')
  getAll() {
    return this.itemsService.getAll();
  }

  @Put('items')
  update(@Body() updateItemDTO: UpdateProductDTO) {}
}