import * as assert from 'assert';
import Spin from '../src';
let consoleTimeout;
let i = 0;
const outputConsole = () => {
  console.log(i++);
  clearTimeout(consoleTimeout);
  consoleTimeout = setTimeout(() => {
    outputConsole();
  }, 10);
}
describe('/test/index.test.ts', () => {
  it('base', async () => {
    const spin = new Spin({
      text: '测试',
    });
    spin.start();
    outputConsole();
    await new Promise((resolve) => {
      setTimeout(resolve, 10000);
    });
    spin.text = '测试2';
    await new Promise((resolve) => {
      setTimeout(resolve, 10000);
    });
    spin.stop();
    clearTimeout(consoleTimeout);
    assert(true);
  });
});
