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
    const cart: number[] = [];
    try {
      const product = this.productService.findProduct(createOrderDTO.code);
      let currentIndex = 0;
      let noOfItemInCart = 0;
      while (noOfItemInCart !== createOrderDTO.quantity) {
        if (product.packagingOptions.length < currentIndex) {
          /* Overflow */
          currentIndex--;
          cart.splice(-2);
        } else {
          /* No Overflow */
          if (noOfItemInCart > createOrderDTO.quantity) {
            currentIndex++;
            cart.push(product.packagingOptions[currentIndex].count);
          } else {
            cart.pop();
          }
        }
        noOfItemInCart = this.getSum(cart);
      }
    } catch {
      success = false;
    }
    return {
      success,
      cart,
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
