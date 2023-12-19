const mongoose = require('../database/index')

const cveSchema = new mongoose.Schema ({
    _id: String,
    containers: Object,
    cveMetadata:Object,
    dataType: String,
    dataVersion: String
})

const cve = mongoose.model('CVE', cveSchema)

module.exports = cve