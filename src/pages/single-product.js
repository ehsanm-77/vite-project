import { El } from '@/components/shared/El';
import { SingleProduct } from '@/components/single-product';

export function SingleProductPage() {
  return El({
    element: 'div',
    className: 'bg-yellow-300',
    children: [SingleProduct()],
  });
}
