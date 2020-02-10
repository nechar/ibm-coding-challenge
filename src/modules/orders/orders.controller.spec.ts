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

  describe('create', () => {
    it('should be able to make an order', async () => {
      const response = ordersController.create({
        code: 'EG',
        count: 1,
      });
      expect(response.success).toBeTruthy();
    });
  });
});
