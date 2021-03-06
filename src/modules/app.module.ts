import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [ProductsModule, OrdersModule],
  /**
   * Try NOT import any controller in the main module
   * Each module has their separate controllers.
   */
  controllers: [],
  /**
   * Try NOT import any provider in the main module
   * Each module has their separate providers
   */
  providers: [],
})
export class AppModule {}
