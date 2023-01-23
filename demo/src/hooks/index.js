//将数组转化为对象，设定每个属性值的名称
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
//匹配歌词
export function parseSongStr(songStr = "") {
  let songListResult = [];
  if (songStr.length < 1) return songListResult;
  let lineAry = songStr.split("\n");

  lineAry.forEach((item) => {
    // console.log(item) // 形如：'[00:34.16]我是孤傲的蔷薇'
    let time = item.match(/\[(\d{2,}):(\d{2})(?:\.(\d{2,3}))]/g);
    // console.log(time)  // 形如：["[02:30.54]"]
    if (time != null) {
      // 获得歌词
      let oneSongStr = item.split(time[0])[1].trim();
      //获取字符中的时分秒字符 注意match方法参数中有g修饰符与无g的区别
      let timeRegList = time[0].match(/(\d{2,}):(\d{2})(?:\.(\d{2,3}))?/);
      // console.log(timeRegList)

      // 转换为s
      let time2Seconds =
        parseInt(timeRegList[1]) * 60 +
        parseInt(timeRegList[2]) +
        parseInt(timeRegList[3]) / 1000;
      songListResult.push({
        time: time2Seconds,
        text: oneSongStr,
      });
    }
  });
  return songListResult;
}
