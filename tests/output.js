import test from 'ava';
import output from '../src/output.js';

test(`output.case(['1', '2'])`, t => t.is(output.case([1, 2]), 'Case #1: 2'));
