const spinClass = require('../dist');
const wait = async (timeout) => {
  await new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}
(async () => {
  const spin = new spinClass.default({
    text: 'test',
  });
  spin.start();
  await wait(1000);
  // change text
  spin.text = 'test 2';
  
  const list = new Array(100).fill(0);
  for(let i in list) {
    console.log('test' + Math.random())
    await wait(Math.random() * 100);
    spin.text = `[${ i }/${list.length}] install`;
  }
  
  spin.text = 'complete!';
  await wait(1000);
  spin.stop();
})();
