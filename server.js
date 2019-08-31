const Hiscores = require('osrs-hiscores-wrapper')
const express = require('express')
const app = express()
const port = 3000

app.get('/v1/hiscores/:name', (req, res) => {
  Hiscores
    .getStats(req.params.name, req.query.mode)
    .then(data => {
      res.status(200)
      res.json(data)
    })
    .catch(e => {
      const status = e.status ? e.status : 500
      res.status(status)
      res.json({ message: e.message })
    })
})

app.listen(port, () => console.log(`Listening on port ${port}! 🚀`))
