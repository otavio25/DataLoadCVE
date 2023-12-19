const express = require('express')
const router = express('router')
const cveController = require('../controller/cveController')

router.get("/cve", cveController.buscaCve)
router.post("/dataload", cveController.dataLoad)
router.post("/update/data", cveController.updateData)

module.exports = router