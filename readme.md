# own-all

Turns inherited properties into owned properties.

Returns a new object. Does not modify the original.

## Installation

Requires [Node.js](https://nodejs.org/) 6.0.0 or above.

```bash
npm i own-all
```

## API

The module exports a single function.

### Parameter

`obj` (object): The object which may possess owned and/or inherited properties.

### Return Value

A new object which owns all of the properties, both owned and inherited, of `obj`.

## Example

```javascript
const ownAll = require('own-all')

Reflect.ownKeys(ownAll({a: 1})) /*
[
  'a',
  'constructor',
  '__defineGetter__',
  '__defineSetter__',
  'hasOwnProperty',
  '__lookupGetter__',
  '__lookupSetter__',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toString',
  'valueOf',
  '__proto__',
  'toLocaleString'
]
*/

// If you only want enumerable properties, use `Object.keys()` etc:
Object.keys(ownAll({a: 1})) // ['a']
```
