import * as assert from 'assert';
import Spin from '../src';
describe('/test/index.test.ts', () => {
  it('base', async () => {
    const spin = new Spin({
      text: '测试',
    });
    console.log('1');
    spin.start();
    console.log('2');
    await new Promise((resolve) => {
      setTimeout(resolve, 10000);
    });
    console.log('3');
    spin.text = '测试2';
    console.log('4');
    await new Promise((resolve) => {
      setTimeout(resolve, 10000);
    });
    console.log('5');
    spin.stop();
    assert(true);
  });
});
