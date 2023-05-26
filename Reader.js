const fs = require('fs')
const util = require('util')

class Reader {

    constructor() {
        //transforma um callback em uma promisse
        this.reader = util.promisify(fs.readFile)
    }

    async Reade(filepath) {

        try {
            return await this.reader(filepath, 'utf-8')
        } catch (error) {
            console.log(error)
            return undefined
        }
    } 
}

module.exports = Reader