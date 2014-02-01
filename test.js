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
  }
}

it('returns the value of given key', function(){
  expect(get(context, 'foo')).to.equal('bar');
});

it('parses object paths and returns the value', function(){
  expect(get(context, 'qux.hello')).to.equal('world');
  expect(get(context, 'such.perform.so.scale')).to.equal('leveldb');
});

it('returns undefined for non existing paths', function(){
  expect(get(context, 'foo.bar.qux')).to.not.exist;
  expect(get(context, '@foo')).to.not.exist;
});

it('reads list contents, as well', function(){
  expect(get(context, 'qux.eggs[0]')).to.equal('white egg');
  expect(get(context, 'qux.eggs[1]')).to.equal('brown egg');
});

it("doesn't matter if keys with special characters are given", function(){
  expect(get(context, 'qux.delicious fruits :)[0]')).to.equal('grape');
  expect(get(context, 'qux.delicious fruits :)[2]')).to.equal('carrot');
});
