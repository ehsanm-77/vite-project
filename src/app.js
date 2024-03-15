import { El } from './components/shared/El';
import { Test } from './components/test';
import { counter } from './utils/counter';
export const App = () => {
  let amount = counter(10);
  function logData() {
    console.log('clicked');
    document.getElementById('h1').style.backgroundColor = 'blue';
  }
  return El({
    element: 'div',
    className: 'bg-blue-400 flex justify-between',
    children: [
      El({
        element: 'div',
        className: 'flex flex-col gap-5',
        children: [
          El({
            element: 'input',
            className: 'text-yellow-500 bg-gray-300 p-5',
            id: 'h1',
            eventListener: [
              {
                event: 'keyup',
                callback: (e) => {
                  console.log(e.target.value);
                },
              },
            ],
          }),
          El({
            element: 'section',
            className: 'text-red-400 bg-gray-300 p-5',
            innerHTML: amount,
          }),
          El({
            element: 'p',
            className: 'text-red-400 bg-gray-300 p-5',
            innerHTML: 'p tag',
            eventListener: [
              {
                event: 'click',
                callback: logData,
              },
            ],
          }),
        ],
      }),
      El({
        element: 'img',
        className: 'w-72 h-auto',
        src: './src/assets/images/cars.jpeg',
      }),
      Test(),
    ],
  });
};
