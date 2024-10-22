const fs = require('fs')
const path = require('path')

let imgFolder = ''

imgFolder = path.join(exportFolder, config.backgroundColor + '-' + config.logo)

	if (!fs.existsSync(imgFolder))
		fs.mkdirSync(imgFolder)

const logoPaths = JSON.parse(fs.readFileSync('./logo_paths.json', 'utf8'))

const logoCount = Object.keys(logoPaths).length

const exportFolder = path.join(__dirname, 'export')

if (!fs.existsSync(exportFolder))
    fs.mkdirSync(exportFolder)

function init() {
	console.log(task.url + ' ' + queue.length() + ' / '  + logoCount)
	processImage(task.url).then(resp => {
		successCount++
		console.log('success')

		imgName = path.join(imgFolder,task.url)
		fName = path.join(exportFolder,task.name + '.png')
		fs.copyFile(imgName, fName, (err) => {
			if (err)
				errorCount++
				console.log('copy error')
		})
		console.log(task.url + ' was copied to ' + task.name)

		for (const [key, value] of Object.entries(logoPaths))
			queue.push({ url: value, name: key})
	}}