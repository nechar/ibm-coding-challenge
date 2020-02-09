import { Injectable } from '@nestjs/common';
import { CreateProductDTO } from '../models';
@Injectable()
export class ProductService {
  constructor() {}

  async create(createProductDTO: CreateProductDTO) {}

  async getAll() {}
}
