import { El } from '../shared/El';

export const Test = () => {
  const testDescription = 'Test component';
  return El({
    element: 'div',
    className: 'bg-slate-500 flex items-center p-5',
    children: testDescription,
  });
};
