import test from 'ava';
import Stck from '../src/stck.js';
import data from '../src/testData.js';

test(`Stck.insertSpatula('${data.arr[0]}') flips 1 time`, t => {
  const stack = new Stck(data.arr[0]).insertSpatula();
  t.is(stack, 1);
});

test(`Stck.insertSpatula('${data.arr[1]}') flips 1 time`, t => {
  const stack = new Stck(data.arr[1]).insertSpatula();
  t.is(stack, 1);
});

test(`Stck.insertSpatula('${data.arr[2]}') flips 2 times`, t => {
  const stack = new Stck(data.arr[2]).insertSpatula();
  t.is(stack, 2);
});

test(`Stck.insertSpatula('${data.arr[3]}') flips 0 times`, t => {
  const stack = new Stck(data.arr[3]).insertSpatula();
  t.is(stack, 0);
});

test(`Stck.insertSpatula('${data.arr[4]}') flips 3 times`, t => {
  const stack = new Stck(data.arr[4]).insertSpatula();
  t.is(stack, 3);
});

test(`Stck.insertSpatula('${data.arr[5]}') flips 2 times`, t => {
  const stack = new Stck(data.arr[5]).insertSpatula();
  t.is(stack, 2);
});

test(`Stck.updateItem('-') updates to '+'`, t => {
  const val = new Stck('-').updateItem('-');
  t.is(val, '+');
});

test(`Stck.updateItem('+') updates to '-'`, t => {
  const val = new Stck('-').updateItem('+');
  t.is(val, '-');
});

test(`Stck.updateItem('whatever') updates to '+'`, t => {
  const val = new Stck('-').updateItem('whatever');
  t.is(val, '+');
});

test(`Stck.updateItem(6) updates to '+'`, t => {
  const val = new Stck('-').updateItem(6);
  t.is(val, '+');
});

test(`Stck.updateItem([]) updates to '+'`, t => {
  const val = new Stck('-').updateItem([]);
  t.is(val, '+');
});

test(`Stck.updateItem({}) updates to '+'`, t => {
  const val = new Stck('-').updateItem({});
  t.is(val, '+');
});
