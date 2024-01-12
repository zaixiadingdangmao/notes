import { Promise } from './Promise.js';
import { MyPromise } from './myPromise.js';

const promise = new MyPromise((resolve, reject) => {
  resolve({ name: 'zxl' });
});

promise
  .then(value => {
    console.log('🚩  -> file: index.js -> line 10 -> ', value);
    return  new Error('123123')
  })
  .then(
    res => {
      console.log('🚩  -> file: index.js -> line 13 -> ', res);
    },
    err => {
      console.log('🚩  -> file: index.js -> line 15 -> ', err);
    }
  );
