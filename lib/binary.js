//base by DGXeon
//Recodee by Ryuuken
//Instagram: ryuuken97
//Telegram: t.me/ryuuken
//GitHub: Ryuuken97
//WhatsApp: +6283897994452
//Rest API: api.ryuuken.xyz

async function dBinary(str) {
var newBin = str.split(" ")
var binCode = []
for (i = 0; i < newBin.length; i++) {
    binCode.push(String.fromCharCode(parseInt(newBin[i], 2)))
  }
return binCode.join("")
}

async function eBinary(str = ''){    
let res = ''
res = str.split('').map(char => {       
return char.charCodeAt(0).toString(2);  
 }).join(' ')
return res
}

module.exports = { dBinary, eBinary }