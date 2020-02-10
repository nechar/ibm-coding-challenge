// tslint:disable: max-classes-per-file

import { ApiProperty } from '@nestjs/swagger';
import { Order } from './order.interface';

export class CreateOrderDTO implements Partial<Order> {
  @ApiProperty() code: string;
  @ApiProperty() count: number;
}
