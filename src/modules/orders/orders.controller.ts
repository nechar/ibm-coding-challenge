import { Controller, Get, Body, Put, Post, Delete } from '@nestjs/common';
import { ProductService } from '../../services';
import { CreateOrderDTO } from '../../models';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Product')
@Controller()
export class OrdersController {
  constructor(private readonly productService: ProductService) {}

  @Post('order')
  create(@Body() createOrderDTO: CreateOrderDTO) {
    let success = true;
    try {
      this.productService.makeOrder(createOrderDTO);
    } catch {
      success = false;
    }
    return {
      success,
    };
  }
}
