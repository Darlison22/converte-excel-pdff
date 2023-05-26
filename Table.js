class Table {

    constructor(array) {
        this.header = array[0];
        this.rows = this.BodyTable(array)
    }

    BodyTable(array) {
        let k = []
        for(let i = 1; i<= array.length - 1; i++) {
            k.push(array[i])
        }
         return k
    }

    get rowCount() {
        return this.rows.length
    }

    get columnCount() {
        return this.header.length
    }
    

}

module.exports = Table