const express = require('express');
const path = require('path');
const app = express();
//*
// const db = require('../database')   // by requiring db in server, help db to server? No! model requiring database there to connect
const db = require('../database')
// const Controller = require('./Controller.js') // interpreter going Controller
const port = 3000
const bodyParser = require('body-parser')

// parse application/json
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))  // * false or true doesn't matter?

//
//app.use('/static', express.static(path.join(__dirname, 'public')))  //* official doc
app.use('/', express.static(path.join(__dirname, '../client/dist')))

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// With model/conntroller
// app.get('api/movies', Controller.getAllMovies);
// app.post('/api/movies', Controller.postNewMovie);
// app.get('api/movies/', Controller.searchMovies);


// ***** Without model/conntroller
// GET Movie or Search movies
app.get('/api/movies/', (req, res) => {
  // console.log(req.query);
  // console.log(search);
  const { search } = req.query;

  let q = `SELECT * FROM movies WHERE title LIKE '%${search || ''}%'`
  db.connection.query(q, (err, data) => {
    if (err) {
      console.log('CONTROLLER SEARCH MOVIES ERROR- response')
      res.status(400).send();
    } else {
      console.log('CONTROLLER SEARCH MOVIES SUCCESS- response', data)
      res.status(200).send(data);
    }
  })
})

// POST NEW MOVIE
app.post('/api/movies', (req, res) => {
  //console.log('req.body.title', req.body.title)
  const { title } = req.body
  const q = `INSERT INTO movies (title, watched) VALUES (?, false)`;

  db.connection.query(q, [title], (err, data) => {
    if (err) {
      console.log('CONTROLLER POST MOVIES- ERR', err)
      res.status(400).send();
    } else {
      console.log('CONTROLLER POST MOVIES SUCCESS- response')
      res.status(200).send('post success');
    }
  })
})



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})