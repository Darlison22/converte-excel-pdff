const fs = require('fs')
const util = require('util')
const pdf = require('html-pdf')

class Writer {
    constructor() {
        this.writer = util.promisify(fs.writeFile)
    }

    async WriteHtml(filename, html) {
        
        try {
             await this.writer(filename, html)
             return true
        } catch (error) {
            console.log(error)
            return false
        }
    }

     async WritePdf (filename, html) {
        pdf.create(html, {}).toFile(filename, (err) => {
            if(err) {
                console.log(err)
            }
        })
    }
}

module.exports = Writer