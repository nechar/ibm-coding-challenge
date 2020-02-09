import { Controller, Get, Body, Put } from '@nestjs/common';
import { ItemsService } from '../../services';
import { UpdateItemDTO } from '../../models';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Items')
@Controller()
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Put('items')
  save(@Body() updateItemDTO: UpdateItemDTO) {}

  @Get('items')
  getAll() {
    return this.itemsService.getAll();
  }
}
