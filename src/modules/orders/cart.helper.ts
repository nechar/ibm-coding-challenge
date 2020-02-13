import { PackagingOption } from '../../models';

function getNoOfItemInCart(numberArray: PackagingOption[]): number {
  let sum = 0;
  numberArray.forEach((option) => {
    sum += option.count;
  });
  return sum;
}

export function fillTheCart(product, quantity): PackagingOption[] {
  let success = false;
  const cart: PackagingOption[] = [];
  let packagingOptionsIndex = 0;
  let packagingOptionsIndexNext = 1;
  let noOfItemInCart = 0;
  let numberOfCurrentItem = 0;

  while (packagingOptionsIndexNext <= product.packagingOptions.length) {
    cart.push(product.packagingOptions[packagingOptionsIndex]);
    noOfItemInCart = getNoOfItemInCart(cart);
    numberOfCurrentItem++;

    if (noOfItemInCart === quantity) {
      /** Condition was satisfied */
      success = true;
      break;
    }

    if (noOfItemInCart >= quantity) {
      /* There are more items in the cart than what was ordered */

      if (packagingOptionsIndex + 1 === product.packagingOptions.length) {
        /** Current index cycle has finished */
        cart.splice(-(numberOfCurrentItem + 1));
        packagingOptionsIndex = packagingOptionsIndexNext;
        packagingOptionsIndexNext++;
      } else {
        cart.pop();
        packagingOptionsIndex++;
      }
      numberOfCurrentItem = 0;
    }
  }

  if (!success) {
    throw Error(`Unable to pack your order`);
  }

  return cart;
}
