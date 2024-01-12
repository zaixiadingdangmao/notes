/*
 * @Description: 手写 Promise
 * @Author: zhangxuelong
 * @Date: 2022-08-24 13:44:08
 */

const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

export class MyPromise {
  constructor(fun) {
    // 初始化状态
    this.PromiseState = PENDING;
    // 执行结果
    this.PromiseResult = null;

    // 成功回调
    this.onFulfilledCallbacks = [];
    // 失败回调
    this.onRejectedCallbacks = [];

    const resolve = result => {
      if (this.PromiseState === PENDING) {
        setTimeout(() => {
          this.PromiseState = FULFILLED;
          this.PromiseResult = result;
          this.onFulfilledCallbacks.forEach(fn => fn(result));
        });
      }
    };

    const reject = reason => {
      if (this.PromiseState === PENDING) {
        setTimeout(() => {
          this.PromiseState = REJECTED;
          this.PromiseResult = reason;

          this.onRejectedCallbacks.forEach(fn => fn());
        });
      }
    };

    fun(resolve, reject);
  }

  then(onFulfilled, onRejected) {
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;

    onRejected =
      typeof onRejected === 'function'
        ? onRejected
        : reason => {
            throw reason;
          };

    const promise2 = new MyPromise((resolve, reject) => {
      // 等待
      if (this.PromiseState === PENDING) {
        this.onFulfilledCallbacks.push(() => {
          try {
            const x = onFulfilled(this.PromiseResult);
            resolvePromise(promise2, x, resolve, reject);
          } catch (err) {
            reject(err);
          }
        });

        this.onRejectedCallbacks.push(() => {
          try {
            const x = onRejected(this.PromiseResult);
            resolvePromise(promise2, x, resolve, reject);
          } catch (err) {
            reject(err);
          }
        });
      }

      // 成功
      else if (this.PromiseState === FULFILLED) {
        setTimeout(() => {
          try {
            const x = onFulfilled(this.PromiseResult);
            resolvePromise(promise2, x, resolve, reject);
          } catch (err) {
            reject(err);
          }
        });
      }

      // 失败
      else if (this.PromiseState === REJECTED) {
        setTimeout(() => {
          try {
            const x = onRejected(this.PromiseResult);
            resolvePromise(promise2, x, resolve, reject);
          } catch (err) {
            reject(err);
          }
        });
      }
    });

    return promise2;
  }
}

function resolvePromise(promise2, x, resolve, reject) {
  if (x === promise2) {
    return reject(new TypeError('Chaining cycle detected for promise'));
  }

  if ((x && typeof x === 'object') || typeof x === 'function') {
    let used;

    try {
      let then = x.then;
      if (typeof then === 'function') {
        then.call(
          x,
          y => {
            if (used) return;
            used = true;
            resolvePromise(promise2, y, resolve, reject);
          },
          r => {
            if (used) return;
            used = true;
            reject(r);
          }
        );
      } else {
        if (used) return;
        used = true;
        resolve(x);
      }
    } catch (err) {
      if (used) return;
      used = true;
      reject(x);
    }
  } else {
    resolve(x);
  }
}
