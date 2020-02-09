import { ProductsController } from './products.controller';
import { ProductService } from '../../services';

describe('ItemsController', () => {
  let itemsService: ProductService;
  let itemsController: ProductsController;

  beforeEach(() => {
    itemsService = new ProductService();
    itemsController = new ProductsController(itemsService);
  });

  describe('save', () => {
    it('should be able to save an item', async () => {
      const response = await itemsController.save({
        code: 'Vegemite Scroll',
        name: 'VS',
      });
      expect(response.success).toBeTruthy();
    });
  });
});
