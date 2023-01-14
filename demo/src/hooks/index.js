export function objAddKey_someName(inputArray, keyName) {
  let outArray = [];
  for (let i = 0; i < inputArray.length; i++) {
    let tempobj = {};
    let key = keyName;
    Object.defineProperties(tempobj, {
      [key]: {
        value: inputArray[i],
        writable: true,
      },
    });
    outArray.push(tempobj);
  }
  return outArray;
}
