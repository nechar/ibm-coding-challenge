import { Controller, Get, Body, Put, Post, Delete } from '@nestjs/common';
import { ProductService } from '../../services';
import {} from '../../models';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Product')
@Controller()
export class OrdersController {
  constructor(private readonly productService: ProductService) {}
}
