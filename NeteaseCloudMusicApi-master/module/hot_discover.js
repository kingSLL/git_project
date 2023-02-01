// 关注与取消关注用户
const cheerio = require('cheerio')
const axios = require('axios')
axios.defaults.headers['Cache-Control'] = 'no-cache'
module.exports = async (query, request) => {
  const random = Math.random()
  return new Promise((resolve) => {
    axios.get(`https://y.music.163.com/m?a=${random}`).then((res) => {
      const rep = []
      const $ = cheerio.load(res.data)
      const lis = $('.remd_ul .remd_li')
      for (let li of lis) {
        const repItem = {}
        repItem.href = $(li)[0].attribs.href

        repItem.title = $(li).children('.remd_text').text()
        repItem.play_count = $(li).children('.remd_img').text()
        repItem.img_url = $(li)
          .children('.remd_img')
          .children('.u-img')[0].attribs.src
        repItem.img_url = repItem.img_url.split('?')[0]
        rep.push(repItem)
      }
      resolve({ status: 200, body: rep })
    })
  })
  //   const $ = cheerio.load(res)
  //   const matchStr = $('.msk').hasClass('fr')
  //   console.log(matchStr)
}
