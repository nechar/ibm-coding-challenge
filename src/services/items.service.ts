import { Injectable } from '@nestjs/common';
import { CreateItemDTO } from '../models';
@Injectable()
export class ItemsService {
  constructor() {}

  async create(item: CreateItemDTO) {}

  async getAll() {}
}
