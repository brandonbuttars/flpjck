export const testCase = {
  min: 1,
  max: 100
}

export const data = {
  small: {
    min: 1,
    max: 10
  },
  large: {
    min: 1,
    max: 100
  }
}

const cnfg = {
  appName: 'FlpJck',
  labels: {
    case: { s: 'test case', p: 'test cases' },
    string: { s: 'test string', p: 'test strings' },
    char: { s: 'character', p: 'characters' }
  },
  case: testCase,
  data: data.small,
  error: {
    style: 'console'
  },
  html: {
    input: 'input',
    output: 'output',
    trigger: 'trigger',
    event: 'click'
  }
}

export default cnfg;
