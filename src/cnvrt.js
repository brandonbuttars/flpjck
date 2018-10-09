const cnvrt = (str, char = '\n') => {
  const arr = str.split(char);
  if (arr.length > 1) {
    return { count: arr.shift(), cases: arr };
  } else if (arr.length === 1) {
    console.log(arr);
    return { count: arr, cases: [] };
  }
  return;
}

export default cnvrt;
