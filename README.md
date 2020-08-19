<p align="center">
  <br/>
  <br/>
  <b>light spinner</b>
  <br />
  <br />
  <span>This is a no-dependencies minimal cli spinner, only 1kb.</span>
  <br />
  <br />
  <span>
    <a href="https://www.npmjs.org/package/light-spinner"><img src="https://img.shields.io/npm/v/light-spinner.svg?style=flat" alt="npm"></a> 
    <a href="./LICENSE" alt="GitHub license">
      <img src="https://img.shields.io/badge/license-MIT-blue.svg" />
    </a>
    <a href="https://github.com/echosoar/light-spinner/actions?query=workflow%3A%22Node.js+CI%22" alt="Node.js CI">
      <img src="https://img.shields.io/badge/Node.js%20CI-passing-brightgreen" />
    </a>
  </span>
  <br />
  <br />
  <img src="https://raw.githubusercontent.com/echosoar/light-spinner/master/spin.gif" />
</p>



## Install
```shell
$ npm i light-spinner --save
```
## Usage
```ts
import Spin from 'light-spinner';
const spin = new Spin({
  text: 'test',
});
spin.start();

// change text
spin.text = 'test 2';

spin.stop();
```

## Options
| option | type | desc | default |
| --- | --- | --- | --- |
| text | string | console text | empty string |
| timeout | number | the time of changing to next frame | 100(ms) |
| spinners | string[] | frame list | `['⠋', '⠙', '⠹', '⠼', '⠴', '⠦', '⠧', '⠏']` |


[MIT LICENSE](./LICENSE)