// Module
const fs = require('fs')

//Bot Settings
global.connect = true 
global.publicX = true 
global.owner = ['6282298243812'] 
global.developer = "DepayGanteng" 
global.botname = "Noxious" 
global.version = "3.0.0" 

//Setting Sticker
global.packname = "Sticker By" 
global.author = "DepayyNoCounter" 

//Setting Media
global.ytube = "https://youtube.com/@DepayyAslii"
global.ttok = "https://tiktok.com"
global.igram = "https://instagram.com/@ohhdep"
global.chtele = "https://t.me"
global.tgram = "https://t.me"

//Bug Name Settings
global.bak = {
Ios: " ⿻ᬃ*ALWAYS*⿻ ",
Andro: "⩟⬦𪲁Pantek̸̷̷̷𝐗͜͢𝐒 -", 
Crash: " ̶C̶r̶a̶s̶h̶U̶l̶t̶i̶m̶a̶̶t̶e ̶",
Freeze: "𝐔𝐥𝐭𝐢𝐦𝐚𝐭𝐞",
Ui: "ℭ𝔯𝔴𝔰𝔥 𝔘𝔦 𝔖𝔶𝔰𝔱𝔢𝔪"
}

//System Bot Settings
global.prefa = ['','!','.',',','🐤','🗿'] // Prefix // Not Change

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})