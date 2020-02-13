import { Controller, Body, Post } from '@nestjs/common';
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
      let packagingOptionsIndex = 0;
      let noOfItemInCart = 0;
      let numberOfCurrentItem = 0;

      let attempt = 0;
      while (++attempt < 100) {
        cart.push(product.packagingOptions[packagingOptionsIndex].count);
        noOfItemInCart = this.getNoOfItemInCart(cart);
        numberOfCurrentItem++;

        if (noOfItemInCart === createOrderDTO.quantity) {
          /** Condition was satisfied */
          break;
        }

        if (noOfItemInCart >= createOrderDTO.quantity) {
          /* There are more items in the cart than what was ordered */

          if (packagingOptionsIndex + 1 === product.packagingOptions.length) {
            /** Current index cycle has finished */
            cart.splice(-(numberOfCurrentItem + 1));
            if (Math.floor(Math.random())) {
              packagingOptionsIndex--;
            }
          } else {
            cart.pop();
            packagingOptionsIndex++;
          }
          numberOfCurrentItem = 0;
        }
      }
    } catch {
      success = false;
    }
    return {
      success,
      cart,
    };
  }

  getNoOfItemInCart(numberArray: number[]): number {
    if (numberArray.length === 0) {
      return 0;
    }
    return numberArray.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
    );
  }
}
