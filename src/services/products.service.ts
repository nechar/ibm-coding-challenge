import { Injectable } from '@nestjs/common';
import { CreateProductDTO } from '../models';
@Injectable()
export class ProductService {
  constructor() {}

  async create(item: CreateProductDTO) {}

  async getAll() {}
}
