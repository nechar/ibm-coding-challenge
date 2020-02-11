import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { ProductService } from '../../services';

@Module({
  imports: [],
  controllers: [OrdersController],
  providers: [ProductService],
})
export class OrdersModule {}
