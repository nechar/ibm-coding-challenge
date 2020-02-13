import { Controller, Body, Post } from '@nestjs/common';
import { ProductService } from '../../services';
import { CreateOrderDTO, PackagingOption, Product } from '../../models';
import { fillTheCart } from './cart.helper';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Product')
@Controller()
export class OrdersController {
  constructor(private readonly productService: ProductService) {}

  @Post('order')
  create(@Body() createOrderDTO: CreateOrderDTO) {
    let cart: PackagingOption[] = [];
    let product: Product;

    try {
      product = this.productService.findProduct(createOrderDTO.code);
    } catch {
      return {
        success: false,
        message: `Couldn't find the product`,
      };
    }

    try {
      cart = fillTheCart(product, createOrderDTO.quantity);
    } catch (error) {
      return {
        success: false,
        message: error.message,
      };
    }

    return {
      success: true,
      cart,
      message: `Thank you for shopping with us`,
    };
  }
}
