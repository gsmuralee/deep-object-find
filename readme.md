# deep-object-find

> Get or Set values of deep nested keys.

## Install

```sh
$ npm i  deep-object-find --save
```

## Usage

### JavaScript

```js
var deepObjectFind = require('deep-object-find');

var obj = {
  foo:{
    bar: {
      first: true,
      second: '2'
    }
  }
}

deepObjectFind(obj, 'foo.bar.first');
```

## Test

```sh
npm test
```

## Contribute or Report Issue
For bugs and feature requests, [please create an issue][issue-url].

## License

MIT © [Murail G S](https://github.com/gsmuralee)

[issue-url]: https://github.com/gsmuralee/deep-object-find/issues