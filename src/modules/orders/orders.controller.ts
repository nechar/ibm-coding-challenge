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
      while (true) {
        cart.push(product.packagingOptions[currentIndex].count);
        noOfItemInCart = this.getSum(cart);

        if (noOfItemInCart === createOrderDTO.quantity) {
          break;
        }

        if (noOfItemInCart >= createOrderDTO.quantity) {
          // more in the bag

          if (currentIndex + 1 === product.packagingOptions.length) {
            /* Overflow */
            cart.splice(-2);
            currentIndex--;
          } else {
            cart.pop();
            currentIndex++;
          }
        }
        // less in the bag
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
