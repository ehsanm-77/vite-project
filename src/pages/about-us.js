import { AboutUs } from '@/components/about-us';
import { El } from '@/components/shared/El';

export function AboutUsPage() {
  return El({
    element: 'div',
    className: 'bg-yellow-300',
    children: [AboutUs()],
  });
}
