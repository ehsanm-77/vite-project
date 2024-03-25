import { getProduct } from '@/api/get';
import { El } from '@/components/shared/El';
const queryParam = location.pathname.split('/')[2];
const data = await getProduct(queryParam);
console.log(data);
export function SingleProduct() {
  return El({
    element: 'div',
    className: 'flex flex-col gap-10 m-10',
    children: [
      El({
        element: 'div',
        className:
          'bg-blue-600 text-white rounded-md p-5 shadow-md  w-40 h-40 flex justify-center items-center',
        innerText: data.name,
      }),
      El({
        element: 'div',
        className:
          'bg-red-600 text-white rounded-md p-5 shadow-md w-40 h-40 flex justify-center items-center',
        innerText: data.brand,
      }),
    ],
  });
}
