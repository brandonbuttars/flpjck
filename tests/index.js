import test from 'ava';
import FlpJck from '../src/index.js';
import ut from '../src/ut.js';
import data from '../src/testData.js';

test.before(async t => {
  t.context.result = await FlpJck.test(data.str);
  // console.log(t.context.result);
});

test(`FlpJck when valid returns the correct array length`, t => {
  t.is(t.context.result.length, 3);
});

test.only(`FlpJck when valid passes all tests`, t => {
  const str = JSON.stringify(t.context.result[1].count) + JSON.stringify(t.context.result[1].tests);
  t.false(str.includes('false'));
});
