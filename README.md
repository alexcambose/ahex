# ahex
Alpha hexadecimal

## Install
```
npm install -S ahex
```
[npm](https://www.npmjs.com/package/ahex)
## Usage
```js
const ahex = require('ahex');

// RGB format
console.log(ahex('#0f0'));
// rgb(0, 255, 0)

// RGBA format
console.log(ahex('#0f0d'));
// rgba(0, 255, 0, 0.87)

// RGBAA format
console.log(ahex('#0f0dd'));
// rgba(0, 255, 0, 0.87)

// RRGGBB format
console.log(ahex('#00ff00'));
// rgba(0, 255, 0)

// RRGGBBA format
console.log(ahex('#00ff00d'));
// rgba(0, 255, 0, 0.87)

// RRGGBBAA format
console.log(ahex('#00ff00dd'));
// rgba(0, 255, 0, 0.87)
```
if the second parameter is set to `true` the returned result will be an object

```js
console.log(ahex('#00ff00dd', true));
// { r: 0, g: 255, b: 0, a: '0.87' }
```
