import { Module } from '@nestjs/common';
import { ItemsController } from './items.controller';
import { ItemsService } from '../../services';

@Module({
  imports: [],
  controllers: [ItemsController],
  providers: [ItemsService],
})
export class ItemsModule {}
