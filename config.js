/**
   * Create By Dika Ardnt.
   * Contact Me on wa.me/6288292024190
   * Follow https://github.com/DikaArdnt
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapis.xyz': 'Your Key',
}

// Other
global.owner =  ['94778115292','94777611095','94702978512']
global.premium = ['94778115292']
global.packname = 'JF_BOT'
global.author = 'Jayarathne'
global.sessionName = 'Jayarathne'
global.prefa = ['','!','.','#','sik','$']
global.sp = '🍂'
global.mess = {
    success: 'Done ✓',
    admin: 'This Feature Is Only For @Jayarathne!',
    botAdmin: 'Bot Must Be Admin First!',
    owner: 'This Feature Is Only For @Jayarathne',
    group: 'Feature Used Only For Groups!',
    private: 'Features Used Only For Private Chat!',
    bot: 'This feature in only for the bot number',
    wait: 'In process...',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
}
global.limitawal = {
    premium: "Infinity",
    free: 200
}
global.thumb = fs.readFileSync('./lib/hisoka.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
