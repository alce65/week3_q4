// ES 2015 (ES6)

// Promises
// - pending
// - fulfilled - resolved / rejected

// eslint-disable-next-line arrow-body-style
const makeAsyncPromise = (time: number): Promise<string> => {
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

makeAsyncPromise(1000)
  .then((data) => {
    console.log(data);
  })
  .then()
  .catch((error) => console.log(error.message))
  .finally(() => console.log('Fin del makeAsync'));
