var fs = require('fs')

var notesText = fs.readFileSync('./node_notes.txt', 'utf-8')
fs.writeFileSync('notes_copy.txt', notesText)
console.log(notesText)



write a node script that copies a text file

example:
node copy.js source.txt destination.txt

'=-=-=-=-=-=-=-=-=-=-=-=-='

var fs = require('fs')
var sourceFileName = process.argv[2] 
var targetFileName = process.argv[3]
var sourceFileContents = fs.readFileSync(sourceFileName, 'utf-8')
fs.writeFileSync(targetFileName, sourceFileContents)