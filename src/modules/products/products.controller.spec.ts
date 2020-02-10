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
        code: 'EG',
        count: 5,
        price: 5,
      });
      expect(response.success).toBeTruthy();
    });
  });

  describe('update', () => {
    it('should be able to update a product', async () => {
      productsController.save(exampleProduct);
      const response = productsController.update({
        code: 'EG',
        name: 'New Name',
      });
      expect(response.success).toBeTruthy();
    });
  });

  describe('delete', () => {
    it('should be able to delete a product', async () => {
      productsController.save(exampleProduct);
      const response = productsController.delete({
        code: 'EG',
      });
      expect(response.success).toBeTruthy();
    });
  });
});
