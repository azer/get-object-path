## get-object-path

Return the value at given object path.

## Install

```bash
$ npm install get-object-path
```

## Usage

```js
get = require('get-object-path')

context = {
  foo: 'bar',
  qux: {
    hello: 'world',
    eggs: [
      'white egg',
      'brown egg'
    ],
    'delicious fruits :)': [
      'grape',
      'orange',
      'carrot'
    ]
  }
}

get(context, 'foo')
// => 'bar'

get(context, 'qux.hello')
// => world

get(context, 'qux.eggs[0]')
// => white egg

get(context, 'qux.eggs[1]')
// => brown egg

get(context, 'qux.delicious fruits :)[1]')
// => orange
```

See `test.js` for more info.
