import { Controller, Body, Post } from '@nestjs/common';
import { ProductService } from '../../services';
import { CreateOrderDTO, PackagingOption } from '../../models';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Product')
@Controller()
export class OrdersController {
  constructor(private readonly productService: ProductService) {}

  @Post('order')
  create(@Body() createOrderDTO: CreateOrderDTO) {
    let success = false;
    let cart: PackagingOption[] = [];
    try {
      const product = this.productService.findProduct(createOrderDTO.code);
      let packagingOptionsIndex = 0;
      let packagingOptionsIndexNext = 1;
      let noOfItemInCart = 0;
      let numberOfCurrentItem = 0;

      while (packagingOptionsIndexNext <= product.packagingOptions.length) {
        cart.push(product.packagingOptions[packagingOptionsIndex]);
        noOfItemInCart = this.getNoOfItemInCart(cart);
        numberOfCurrentItem++;

        if (noOfItemInCart === createOrderDTO.quantity) {
          /** Condition was satisfied */
          success = true;
          break;
        }

        if (noOfItemInCart >= createOrderDTO.quantity) {
          /* There are more items in the cart than what was ordered */

          if (packagingOptionsIndex + 1 === product.packagingOptions.length) {
            /** Current index cycle has finished */
            cart.splice(-(numberOfCurrentItem + 1));
            packagingOptionsIndex = packagingOptionsIndexNext;
            packagingOptionsIndexNext++;
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
    if (!success) {
      cart = [];
    }

    return {
      success,
      cart,
    };
  }

  getNoOfItemInCart(numberArray: PackagingOption[]): number {
    let sum = 0;
    numberArray.forEach((option) => {
      sum += option.count;
    });
    return sum;
  }
}
