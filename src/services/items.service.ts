import { Injectable } from '@nestjs/common';
import { CreateProductDTO } from '../models';
@Injectable()
export class ItemsService {
  constructor() {}

  async create(item: CreateProductDTO) {}

  async getAll() {}
}
