const express = require('express');
const app = express();
const router = express.Router();
const fs = require('fs')

app.use(express.static(__dirname + '/public'));

  app.get('/api/myteam', async (req, res) => {
    fs.readFile('./myTeam.json', 'utf8', function(err, contents) {
        res.send(contents);
    });
  });

app.listen(3012, ()=>{
    console.log("Server running");
})

