import { El } from '@/components/shared/El';
import { AboutUsDescription } from '@/components/about-us/about-us-description';
import { AboutUsTitle } from '@/components/about-us/about-us-title';

export function AboutUs() {
  return El({
    element: 'div',
    className: 'border',
    children: [AboutUsTitle(), AboutUsDescription()],
  });
}
