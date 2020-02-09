import { ProductsController } from './products.controller';
import { ProductService } from '../../services';

describe('ProductsController', () => {
  let productService: ProductService;
  let productsController: ProductsController;

  beforeEach(() => {
    productService = new ProductService();
    productsController = new ProductsController(productService);
  });

  describe('save', () => {
    it('should be able to save an product', async () => {
      const response = await productsController.save({
        code: 'Vegemite Scroll',
        name: 'VS',
      });
      expect(response.success).toBeTruthy();
    });
  });
});
