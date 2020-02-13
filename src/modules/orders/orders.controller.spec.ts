import { OrdersController } from './orders.controller';
import { ProductService } from '../../services';

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
        code: 'VS',
        quantity: 3,
      });
      expect(response.success).toBeTruthy();
    });
  });

  describe('10 VS for $17.98', () => {
    it('2 packages of 5 items ($8.99 ea.)', async () => {
      const response = ordersController.create({
        code: 'VS',
        quantity: 10,
      });
      expect(response.cart).toMatchObject([
        { count: 5, price: 8.99 },
        { count: 5, price: 8.99 },
      ]);
    });
  });

  describe('14 BM for $54.8', () => {
    it('1 package of 8 items ($24.95 ea.) and 3 packages of 2 items ($9.95 ea.)', async () => {
      const response = ordersController.create({
        code: 'BM',
        quantity: 14,
      });
      expect(response.cart).toMatchObject([
        { count: 8, price: 24.95 },
        { count: 2, price: 9.95 },
        { count: 2, price: 9.95 },
        { count: 2, price: 9.95 },
      ]);
    });
  });

  describe('13 CR for $25.85', () => {
    it('2 packages of 5 items ($9.95 ea.) and 1 package of 3 items ($5.95 ea.)', async () => {
      const response = ordersController.create({
        code: 'CR',
        quantity: 13,
      });
      expect(response.cart).toMatchObject([
        { count: 5, price: 9.95 },
        { count: 5, price: 9.95 },
        { count: 3, price: 5.95 },
      ]);
    });
  });
});
