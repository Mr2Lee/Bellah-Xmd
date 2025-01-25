//base by DGXeon
//recode by mr-lee
//YouTube: @mr-lee


const fs = require('fs')
const chalk = require('chalk')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


global.SESSION_ID = process.env.SESSION_ID || 'Bellah~2z40RA7T#VRneuCjwFxSYHupVJSJHZDNmNDE_THLCNxjVd9jGWuw' 
//owmner v card
global.ytname = "YT: mr-lee" //ur yt chanel name
global.socialm = "IG: @marvel-lee" //ur github or insta name
global.location = "Nigeria" //ur location

//new
global.botname = process.env.BOT_NAME ||'Mr_lee🌹' //enter your  bot name here
global.ownernumber = process.env.OWNER_NUMBER ||'2349130592590' //ur owner number
global.ownername = '© Mr_lee 🌹' //ur owner name
global.websitex = "https://whatsapp.com/channel/0029VaPZWbY1iUxVVRIIOm0D" //"https://chat.whatsapp.com/JmsgzJllAAB8zHfQcJXxES"
global.wagc = "https://chat.whatsapp.com/IGc9Xl3Ta5C8LNnV0rUK9s" //"https://chat.whatsapp.com/JmsgzJllAAB8zHfQcJXxES"
global.themeemoji = '🌹'
global.wm = "Mr lee🌹"
global.botscript = 'https://whatsapp.com/channel/0029VaPZWbY1iUxVVRIIOm0D' //'https://chat.whatsapp.com/JmsgzJllAAB8zHfQcJXxES' //script link
global.packname = process.env.PACK_NAME ||"Mr lee 🌹" //enter your stickers author name here
global.author = "MR_LEE 🌹"
global.creator = "2349130592590@s.whatsapp.net"
global.xprefix = process.env.PREFIX ||'.'
global.premium = ["2349130592590"] // Premium User
global.hituet = 0

//bot sett
global.typemenu = process.env.TYPE_MENU || 'v2' // menu type 'v1' => 'v8' 
global.typereply = process.env.TYPE_REPLY ||'v1' // reply type 'v1' => 'v3'
global.autoblocknumber = process.env.AUTOBLOCK_NUMBER || '263,234' //set autoblock country code
global.antiforeignnumber = process.env.ANTIFOREIGN_NUMBER || '' //set anti foreign number country code
global.welcome = process.env.WELCOME || 'false' //welcome/left in groups
global.anticall = process.env.ANTI_CALL || 'false' //bot blocks user when called
global.autoswview = process.env.AUTOSW_VIEW || 'true' //auto status/story view
global.adminevent = true //show promote/demote message
global.groupevent = true //show update messages in group chat
//msg
global.autorecord = process.env.AUTO_RECORD || 'true'
global.autorecordtype = process.env.AUTO_RECORDTYPE || 'true'
global.demoteadmin = process.env.DEMOTEADMIN || 'true' //bot remove all admin and admin owner
global.mess = {
	limit: 'Your limit is up <\>',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
    done: 'Done ✓',
    error: 'Error !',
    success: 'Succes •'
}
//thumbnail
global.thumb = fs.readFileSync('./XMEDIA/theme/mr-lee.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
