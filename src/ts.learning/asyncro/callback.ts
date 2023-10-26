const makeAsync = (time: number, callback: (_value: number) => void) => {
  setTimeout(() => {
    // Leyendo datos
    const data = 1234;
    callback(data);
  }, time);
};

const showData = (data: number) => {
  console.log(data);
};

makeAsync(1000, showData);

makeAsync(1000, (data: number) => {
  console.log(data);
});
