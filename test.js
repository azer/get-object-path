var test = require('prova');
var get = require("./");

var context = {
  foo: 'bar',
  such: { perform: { so: { scale: 'leveldb' } } },
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
  },
  'foods I love': ['hamsi', 'lahmacun']
};

test('returns the value of given key', function (t) {
  t.plan(1);
  t.equal(get(context, 'foo'), 'bar');
});

test('parses object paths and returns the value', function (t) {
  t.plan(2);
  t.equal(get(context, 'qux.hello'), 'world');
  t.equal(get(context, 'such.perform.so.scale'), 'leveldb');
});

test('returns undefined for non existing paths', function (t) {
  t.plan(2);
  t.notOk(get(context, 'foo.bar.qux'));
  t.notOk(get(context, '@foo'));
});

test('reads list contents, as well', function (t) {
  t.plan(4);
  t.equal(get(context, 'qux.eggs[0]'), 'white egg');
  t.equal(get(context, 'qux.eggs[1]'), 'brown egg');
  t.equal(get(context, 'foods I love[0]'), 'hamsi');
  t.equal(get(context, 'foods I love[1]'), 'lahmacun');
});

test("doesn't matter if keys with special characters are given", function (t) {
  t.plan(2);
  t.equal(get(context, 'qux.delicious fruits :)[0]'), 'grape');
  t.equal(get(context, 'qux.delicious fruits :)[2]'), 'carrot');
});
