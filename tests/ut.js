import test from 'ava';
import ut from '../src/ut.js';

// isNum
test(`ut.isNum(1) is true`, t => t.true(ut.isNum(1)));
test(`ut.isNum('1') is true`, t => t.true(ut.isNum('1')));
test(`ut.isNum('test') is false`, t => t.false(ut.isNum('test')));
// test(`ut.isNum([]) is false`, t => t.false(ut.isNum([])));
// test(`ut.isNum({}) is false`, t => t.false(ut.isNum({})));

// gte
test(`ut.gte(3, 1) is true`, t => t.true(ut.gte(3, 1)));
test(`ut.gte('3', '1') is true`, t => t.true(ut.gte('3', '1')));
test(`ut.gte(3, 4) is false`, t => t.false(ut.gte(3, 4)));
test(`ut.gte('3', '4') is false`, t => t.false(ut.gte('3', '4')));

// lte
test(`ut.lte(3, 1) is false`, t => t.false(ut.lte(3, 1)));
test(`ut.lte('3', '1') is false`, t => t.false(ut.lte('3', '1')));
test(`ut.lte(3, 4) is true`, t => t.true(ut.lte(3, 4)));
test(`ut.lte('3', '4') is true`, t => t.true(ut.lte('3', '4')));

// tween
test(`ut.tween(1, 1, 4) is true`, t => t.true(ut.tween(1, 1, 4)));
test(`ut.tween('1', '1', '4') is true`, t => t.true(ut.tween('1', '1', '4')));
test(`ut.tween(1, 2, 4) is false`, t => t.false(ut.tween(1, 2, 4)));
test(`ut.tween('1', '2', '4') is false`, t => t.false(ut.tween('1', '2', '4')));
test(`ut.tween(2, 1, 4) is true`, t => t.true(ut.tween(2, 1, 4)));
test(`ut.tween('2', '1', '4') is true`, t => t.true(ut.tween('2', '1', '4')));

// eqNum
test(`ut.eqNum(1, 1) is true`, t => t.true(ut.eqNum(1, 1)));
test(`ut.eqNum(1, '1') is true`, t => t.true(ut.eqNum(1, '1')));
test(`ut.eqNum(0, 1) is false`, t => t.false(ut.eqNum(0, 1)));
test(`ut.eqNum(0, '1') is false`, t => t.false(ut.eqNum(0, '1')));

// rgx.only
test(`ut.rgx.only('+--+', '+-') is true`, t => t.true(ut.rgx.only('+--+', '+-')));
test(`ut.rgx.only('+-x-+', '+-') is false`, t => t.false(ut.rgx.only('+-x-+', '+-')));

// rgx.onlyArray
test(`ut.rgx.onlyArray(['++', '--', '+-'], '+-') is true`, t => t.true(ut.rgx.onlyArray(['++', '--', '+-'], '+-')));
test(`ut.rgx.onlyArray(['++', '--', '+x'], '+-') is false`, t => t.false(ut.rgx.onlyArray(['++', '--', '+x'], '+-')));

// rgx.countLeft
test(`ut.rgx.countLeft(['-','+','+'], '+') is 0`, t => t.is(ut.rgx.countLeft(['-', '+', '+'], '+'), 0))
test(`ut.rgx.countLeft(['+','-','+'], '+') is 1`, t => t.is(ut.rgx.countLeft(['+', '-', '+'], '+'), 1))
test(`ut.rgx.countLeft(['+','+','-'], '+') is 2`, t => t.is(ut.rgx.countLeft(['+', '+', '-'], '+'), 2))
test(`ut.rgx.countLeft(['+','+','+'], '+') is 3`, t => t.is(ut.rgx.countLeft(['+', '+', '+'], '+'), 3))
