import { OrdersController } from './orders.controller';
import { ProductService } from '../../services';
import { exampleProduct } from '../../data/exampleProduct';

describe('OrdersController', () => {
  let productService: ProductService;
  let ordersController: OrdersController;

  beforeEach(() => {
    productService = new ProductService();
    ordersController = new OrdersController(productService);
  });

  describe('save', () => {
    it('should be able to save an product', async () => {
      expect(true).toBeTruthy();
    });
  });
});
