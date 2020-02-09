import { ProductsController } from './products.controller';
import { ProductService } from '../../services';
import { exampleProduct } from '../../data/exampleProduct';

describe('ProductsController', () => {
  let productService: ProductService;
  let productsController: ProductsController;

  beforeEach(() => {
    productService = new ProductService();
    productsController = new ProductsController(productService);
  });

  describe('save', () => {
    it('should be able to save an product', async () => {
      const response = productsController.save(exampleProduct);
      expect(response.success).toBeTruthy();
    });
  });

  describe('packagingOptions', () => {
    it('should be able to add packaging Options to a saved item', async () => {
      productsController.save(exampleProduct);
      const response = productsController.addOptions({
        code: 'VS',
        count: 5,
        price: 5,
      });
      expect(response.success).toBeTruthy();
    });
  });
});
