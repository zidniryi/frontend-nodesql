const express = require('express'),
  router = express.Router()

// get user lists
router.get('/list', function (req, res) {
  let sql = 'SELECT * FROM `dbo.agen`'
  db.query(sql, function (err, data, fields) {
    if (err) throw err
    res.json({
      status: 200,
      data,
    })
  })
})

// create new user
router.post('/new', function (req, res) {
  let sql = `INSERT INTO dbo.agen(id, no_lisensi, nama_agen, id_agen_level, status, status_tgl, wilayah_kerja) VALUES (?)`
  let values = [req.body.name, req.body.gender]
  db.query(sql, [values], function (err, data, fields) {
    if (err) throw err
    res.json({
      status: 200,
      message: 'New user added successfully',
    })
  })
})

module.exports = router
