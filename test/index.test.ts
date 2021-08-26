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

  it('uses stdout by default', () => {
    const stdoutWriteSpy = jest.spyOn(process.stdout, 'write');

    const spin = new Spin({
      text: 'this will go to stdout'
    });

    spin.start();
    spin.stop();

    expect(stdoutWriteSpy).toBeCalledWith(expect.stringContaining('this will go to stdout'));
  });

  describe('when providing a custom stream', () => {
    it('uses that stream', () => {
      const stderrWriteSpy = jest.spyOn(process.stderr, 'write');
      const stdoutWriteSpy = jest.spyOn(process.stdout, 'write');

      const spin = new Spin({
        text: 'this will go to stderr',
        stream: process.stderr
      });

      spin.start();
      spin.stop();

      expect(stderrWriteSpy).toBeCalledWith(expect.stringContaining('this will go to stderr'));
      expect(stdoutWriteSpy).not.toBeCalledWith(expect.stringContaining('this will go to stderr'));
    });
  });
});
