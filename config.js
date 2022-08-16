
const fs = require('fs')
const chalk = require('chalk')

//---WEBSITE APIKEY---//
global.APIs = {
	zenz: 'https://zenzapi.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapi.xyz': 'ad9e14dd7c',
}

//---LAINNYA---///
global.owner = ['62881036775254']
global.packname = 'lestky'
global.author = 'lestky'
global.prefa = [62881036775254]
global.sp = '⭔'
global.mess = {
    success: '✓ Success',
    admin: ' LU GBS PAKE FITUR KARNA CUMA BUAT ADMIN Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Process...',
}










global.sessionName = 'GempyTon'    
global.thumb = fs.readFileSync('./FotoMenu/Gempy.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
