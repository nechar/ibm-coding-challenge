// tslint:disable: max-classes-per-file

import { ApiProperty } from '@nestjs/swagger';
import { Item, PackagingOption } from './item.interface';

export class CreateItemDTO implements Partial<Item> {
  @ApiProperty() code: string;
  @ApiProperty() name: string;
}

export class PackagingOptionDTO implements Partial<PackagingOption> {
  @ApiProperty() code: string;
  @ApiProperty() count: number;
  @ApiProperty() price: number;
}

export class UpdateItemDTO implements Partial<Item> {
  @ApiProperty() code: string;
  @ApiProperty() name: string;
}

export class DeleteItemDTO implements Partial<Item> {
  @ApiProperty() code: string;
}
