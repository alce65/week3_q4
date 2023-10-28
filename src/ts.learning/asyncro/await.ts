// ES 2015 (ES6)

// Promises
// - pending
// - fulfilled - resolved / rejected

// eslint-disable-next-line arrow-body-style
const makeAsyncPromise2 = (time: number): Promise<string> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const n = Math.random();
      if (n < 0.5) {
        // Leyendo datos
        const data = 1234;
        resolve(data + ' case ' + n);
      } else {
        reject(new Error('Error number ' + n));
      }
    }, time);
  });
};

// IIFE

(async () => {
  try {
    const data = await makeAsyncPromise2(1000);
    console.log(data);
  } catch (error) {
    console.log((error as Error).message);
  }

  console.log('Fin del makeAsync');
})();
