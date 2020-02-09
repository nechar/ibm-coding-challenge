// tslint:disable: max-classes-per-file

import { ApiProperty } from '@nestjs/swagger';
import { Product, PackagingOption } from './product.interface';

export class CreateProductDTO implements Partial<Product> {
  @ApiProperty() code: string;
  @ApiProperty() name: string;
}

export class PackagingOptionDTO implements Partial<PackagingOption> {
  @ApiProperty() code: string;
  @ApiProperty() count: number;
  @ApiProperty() price: number;
}

export class UpdateProductDTO implements Partial<Product> {
  @ApiProperty() code: string;
  @ApiProperty() name: string;
}

export class DeleteProductDTO implements Partial<Product> {
  @ApiProperty() code: string;
}
