import { Module } from '@nestjs/common';
import { ItemsController } from './products.controller';
import { ItemsService } from '../../services';

@Module({
  imports: [],
  controllers: [ItemsController],
  providers: [ItemsService],
})
export class ItemsModule {}
