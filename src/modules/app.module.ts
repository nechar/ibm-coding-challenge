import { Module } from '@nestjs/common';
import { ItemsModule } from './items/items.module';

@Module({
  imports: [ItemsModule],
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
