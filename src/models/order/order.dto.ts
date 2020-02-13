import { ApiProperty } from '@nestjs/swagger';
import { Order } from './order.interface';

export class CreateOrderDTO implements Partial<Order> {
  @ApiProperty() code: string;
  @ApiProperty() quantity: number;
}
