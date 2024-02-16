let counter = 0;

const intervalo = setInterval(() => {
  counter++;
  console.log("" + counter);
  if (counter === 3) {
    clearInterval(intervalo);
  }
}, 1000);
