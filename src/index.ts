import { IOption } from './interface';
import { platform } from 'os';
export default class LightSpinner {
  public text;
  private index = 0;
  private timeout;
  private spinners;
  private message;
  private timeHandler;
  private stream: NodeJS.WritableStream;
  private isWin = platform() === 'win32';
  constructor(config?: IOption) {
    const { spinners, text, timeout, stream } = config || {};
    this.spinners = spinners || this.isWin ? ['-', '\\', '/'] : ['⠋', '⠙', '⠹', '⠼', '⠴', '⠦', '⠧', '⠏'];
    this.timeout = timeout || 100;
    this.text = text || '';
    this.stream = stream || process.stdout;
  }

  public start() {
    this.index = 0;
    clearTimeout(this.timeHandler);
    this.doing();
  }

  public stop() {
    clearTimeout(this.timeHandler);
    this.clearLine();
  }

  // https://en.wikipedia.org/wiki/ANSI_escape_code
  private clearLine() {
    if (!this.message) {
      return;
    }
    const clearChar = '\u001b[2K'; // use 'CSI n K' erase in line : \x01[nK
    const moveCursor = `\u001b[${Buffer.byteLength(this.message)}D`; // use 'CSI n D' cursor back : \x01[nD
    this.stream.write(clearChar);
    this.stream.write(moveCursor);
  }

  private output(message: string) {
    this.message = message;
    this.stream.write(message);
  }

  private doing() {
    const message = `${this.spinners[this.index ++]} ${this.text || ''} `;
    this.clearLine();
    this.output(message);
    if (this.index >= this.spinners.length) {
      this.index = 0;
    }
    this.timeHandler = setTimeout(() => {
      this.doing();
    }, this.timeout);
  }
}
