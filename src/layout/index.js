import { El } from '@/components/shared/El';
import { Header } from './footer';

export const MainLayout = (children) => {
  return El({
    element: 'div',
    className: '',
    children: [
      Header(),
      // {}, children
      // Footer() footer
    ],
  });
};
