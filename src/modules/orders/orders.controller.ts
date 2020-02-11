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
      const product = this.productService.findProduct(createOrderDTO.code);

      const packages: number[] = [];
      const packagingOptionsCount = product.packagingOptions.map(
        (packagingOptions) => packagingOptions.count,
      );

      // Optional
      packagingOptionsCount.sort((a, b) => b - a);
      while (this.getSum(packages) === createOrderDTO.quantity) {
        packages.push(packagingOptionsCount[0]);
      }
    } catch {
      success = false;
    }
    return {
      success,
    };
  }

  getSum(numberArray: number[]): number {
    if (numberArray.length === 0) {
      return 0;
    }
    return numberArray.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
    );
  }
}
