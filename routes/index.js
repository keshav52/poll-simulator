var dataAccess = require("../datalayer/data")
var express = require('express');
var router = express.Router();
router.get('/', function (req, res, next) {
  res.render('admin', { title: 'Add Candidate'});
});

router.get("/menu", (req, res) => {
  res.render('menu', { title: 'Main Menu' });
})

router.post("/addCandidate", (req, res) => {
  dataAccess.addCandidate(req.body.stuID, req.body.name);

  res.render('admin', { title: 'Add Candidate'  });
})

router.get("/report", (req, res) => {
  let poll = dataAccess.getAll().curPoll;
  let candidate = dataAccess.getAll().candidate;
  let data = [];

  for (let cur in poll) {
    data.push({ name: candidate[cur], vote: poll[cur] });
  }

  data.sort((a, b) => {
    return (a.vote > b.vote) ? -1 : 1;
  });
  res.render('report', { title: 'Report', data: data });
});



module.exports = router;
