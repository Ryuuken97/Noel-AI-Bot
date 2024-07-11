//base by DGXeon
//Recodee by Ryuuken
//Instagram: ryuuken97
//Telegram: t.me/ryuuken
//GitHub: Ryuuken97
//WhatsApp: +6283897994452
//Rest API: api.ryuuken.xyz

const chalk = require('chalk')
const color = (text, color) => {
    return !color ? chalk.green(text) : chalk.keyword(color)(text)
}
const bgcolor = (text, bgcolor) => {
	return !bgcolor ? chalk.green(text) : chalk.bgKeyword(bgcolor)(text)
}
module.exports = {
	color,
	bgcolor
}
