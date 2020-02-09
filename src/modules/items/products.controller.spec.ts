import { ItemsController } from './products.controller';
import { ItemsService } from '../../services';

describe('ItemsController', () => {
  let itemsService: ItemsService;
  let itemsController: ItemsController;

  beforeEach(() => {
    itemsService = new ItemsService();
    itemsController = new ItemsController(itemsService);
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
