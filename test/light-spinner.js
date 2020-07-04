const spinClass = require('./dist');
(async () => {
  const spin = new spinClass.default({
    text: 'test',
  });
  spin.start();
  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
  // change text
  spin.text = 'test 2';
  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
  spin.stop();
})();
