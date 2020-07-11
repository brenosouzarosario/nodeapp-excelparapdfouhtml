const fs = require("fs");
const util = require("util");

// var novaFuncao = util.promisify(); //Transforma função velha com callback em uma nova com promise

class Reader {

    constructor() {
        this.reader = util.promisify(fs.readFile);
    }

    async Read(filepath) {
        try {
            return await this.reader(filepath, "utf-8");
        } catch (error) {
            return undefined
        }

    }
}

module.exports = Reader;