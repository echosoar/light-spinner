const spinClass = require('../dist');
const wait = async (timeout) => {
  await new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}

let consoleTimeout;
let i = 0;
const outputConsole = () => {
  console.log(i++);
  clearTimeout(consoleTimeout);
  consoleTimeout = setTimeout(() => {
    outputConsole();
  }, 2);
}

(async () => {
  const spin = new spinClass.default({
    text: 'test',
  });
  spin.start();
  outputConsole();
  await wait(1000);
  // change text
  spin.text = 'test 2';
  
  const list = new Array(100).fill(0);
  for(let i in list) {
    await wait(Math.random() * 100);
    spin.text = `[${ i }/${list.length}] install`;
  }
  
  spin.text = 'complete!';
  await wait(1000);
  spin.stop();
  clearInterval(consoleTimeout);
})();
