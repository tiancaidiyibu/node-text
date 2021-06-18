const fs = require('fs')
const img = fs.createReadStream('./WechatIMG3.jpeg')
const img2 = fs.createWriteStream('./02.jpg')
img.pipe(img2)