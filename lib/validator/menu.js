const fs = require('fs')
const chalk = require('chalk')

exports.menu = (AMOUNT, msg, prefix, runTime, botName, SETTING) => {
  return `❏ *I N F O - U S E R*
username: _@${msg.pushName}_
link: _https://wa.me/${msg.sender}_
prefix_you_use: _${prefix}_

 ❏ *B O T - I N F O*
botname: _${SETTING.botname}_
ownername: _${SETTING.ownername}_
type: _WhatsApp-Bot • Multi - Device_
module: _@adiwajshing/baileys_
runtime: _${runTime}_
Source code: https://youtube.com/c/4KSanzz

     ❏ A L L - M E N U

 ❏ I N F O
${AMOUNT++}. ◦ ${prefix + 'tes'}
${AMOUNT++}. ◦ ${prefix + 'ping'}  
${AMOUNT++}. ◦ ${prefix + 'runtime'} 

 ❏ O W N E R - M E N U
${AMOUNT++}. ◦ ${prefix + 'public'} 
${AMOUNT++}. ◦ ${prefix + 'self'} 
${AMOUNT++}. ◦ ${prefix + 'setppbot'} 
${AMOUNT++}. ◦ ${prefix + 'setthumb'} 
${AMOUNT++}. ◦ ${prefix + 'ohidetag'} 
${AMOUNT++}. ◦ ${prefix + 'culik'} 
${AMOUNT++}. ◦ ${prefix + 'getcase'}

 ❏ G R O U P - M E N U
${AMOUNT++}. ◦ ${prefix + 'add'} 
${AMOUNT++}. ◦ ${prefix + 'kick'} 
${AMOUNT++}. ◦ ${prefix + 'promote'} 
${AMOUNT++}. ◦ ${prefix + 'demote'} 
${AMOUNT++}. ◦ ${prefix + 'hidetag'} 
${AMOUNT++}. ◦ ${prefix + 'ohidetag'} 
${AMOUNT++}. ◦ ${prefix + 'group'} 
${AMOUNT++}. ◦ ${prefix + 'setnamegc'} 
${AMOUNT++}. ◦ ${prefix + 'setdesc'} 
${AMOUNT++}. ◦ ${prefix + 'hidetag'} 
${AMOUNT++}. ◦ ${prefix + 'tagall'} 
${AMOUNT++}. ◦ ${prefix + 'welcome'}

 ❏ M A K E R
${AMOUNT++}. ◦ ${prefix + 'sticker'} 

 ❏ S H O R T L I N K
${AMOUNT++}. ◦ ${prefix + 'tinyurl'}

 ❏ T O O L S
${AMOUNT++}. ◦ ${prefix + 'take'} 
${AMOUNT++}. ◦ ${prefix + 'repeat'} 
${AMOUNT++}. ◦ ${prefix + 'toqr'} 

 ❏ S E A R C H I N G
${AMOUNT++}. ◦ ${prefix + 'pinterest'} 
${AMOUNT++}. ◦ ${prefix + 'pinstick'}  
${AMOUNT++}. ◦ ${prefix + 'play'} 
${AMOUNT++}. ◦ ${prefix + 'music'} 

 ❏ D O W N L O A D E R
${AMOUNT++}. ◦ ${prefix + 'youtubemp3'} 
${AMOUNT++}. ◦ ${prefix + 'youtubemp4'} 
${AMOUNT++}. ◦ ${prefix + 'tiktoknowm'} 
${AMOUNT++}. ◦ ${prefix + 'tiktokdl'} 

 ❏ W I B U - M E N U
${AMOUNT++}. ◦ ${prefix + 'waifu'} 
${AMOUNT++}. ◦ ${prefix + 'neko'} 
${AMOUNT++}. ◦ ${prefix + 'awoo'} 
${AMOUNT++}. ◦ ${prefix + 'megumin'} 
${AMOUNT++}. ◦ ${prefix + 'shinobu'} 

 
 ❏ G A M E
${AMOUNT++}. ◦ ${prefix + 'ulartangga'} 

 ❏ I N S P E C T O R 
${AMOUNT++}. ◦ ${prefix + 'inviteinfo'} 
${AMOUNT++}. ◦ ${prefix + 'inspect'} 

 ❏ W A R - M O D E 🔥
${AMOUNT++}. ◦ ${prefix + 'sendbug'} 
${AMOUNT++}. ◦ ${prefix + 'sendbugkontak'} 
${AMOUNT++}. ◦ ${prefix + 'sendbugrows'} 
${AMOUNT++}. ◦ ${prefix + 'bugpayement'} 
${AMOUNT++}. ◦ ${prefix + 'bugdelete'} 

${"```THANKS TO :````"}
❏ 4K Sanzz
❏ FaruqOfc 
`
  }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.yellow(`New ${__filename}`))
	delete require.cache[file]
	require(file)
})