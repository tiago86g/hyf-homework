const express = require("express");
const app = express();
const router = express.Router();
const pool = require("./../database");

router.get("/", (req, res) => {
  const maxPrice = req.query.maxPrice  // /meals?maxPrice=90
  const title = req.query.title;  // api/meals?title="Indian platter"
  const createdAfter = req.query.createdAfter;  // api/meals?createdAfter=2019-04-05
  const limit = req.query.limit;  // api/meals?limit=4
  const availableReservations = req.query.availableReservations; // api/meals?availableReservations=true
  
  if (Object.entries(req.query).length === 0){
    pool.query(`SELECT * FROM meal`, function(err, results, fields){
      if (err){
        console.error(err);
      }
      res.send(results); // http://localhost:5000/api/meals
    })
  } else if(maxPrice){
    pool.query(`SELECT * FROM meal WHERE price < ?`, [Number(maxPrice)], function(err, results, fields){
      if (err){
        console.error(err);
      }
      res.send(results); // http://localhost:5000/api/meals?maxPrice=60
    })
  } else if(title){
    pool.query(`SELECt * FROM meal WHERE title LIKE "%?%"`, [title], function(err, results, fields){
      if (err){
        console.error(err);
      }
      res.send(results); // http://localhost:5000/api/meals?title=rød%20grød
    })
  } else if (createdAfter){
    pool.query(`SELEC * FROM meal WHERE created_date > "?"`, [createdAfter], function(err, results, fields){
      if (err){
        console.error(err);
      }
      res.send(results); // http://localhost:5000/api/meals?createdAfter=2020-01-19
    }) 
  } else if (limit){
    pool.query(`SELECT * FROM meal LIMIT ?`, [limit], function(err, results, fields){
      if (err){
        console.error(err);
      }
      res.send(results); // http://localhost:5000/api/meals?limit=2
    })
  } else if (availableReservations === true){
    pool.query(`
    select meal.*, reservation.number_of_guests
         from meal inner join reservation on reservation.meal_id = meal.id where meal.max_reservations > reservation.number_of_guests;`, function(err, results, fields){
      if (err){
        console.error(err);
      }
      res.send(results); // http://localhost:5000/api/meals?availableReservations=true
    })
  }
});

// GET meal by id
router.get("/:id", (req, res) => {
  const id = req.params.id;
  if (!id) {
      return res.send(`Please enter an id`)
  }
  pool.query("SELECT * FROM meal WHERE id = ?", [id], (err, results, fields) => {
      if (err) {
          console.log(err)
      }
      return res.send(results)
  })
}) // http://localhost:5000/api/meals/2

// DELETE meal by id
router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  if (!id) {
      return res.send(`Please enter an id`)
  }
  pool.query("DELETE FROM meal WHERE id = ?", [id], (err, results, fields) => {
      if (err) {
          console.log(err)
      }
      return res.send(results)
  })
}) // http://localhost:5000/api/meals/6

// PUT meal by id. (in that case I used PATCH instead of PUT to allow partial updates)
router.patch("/:id", (req, res) => {
  const id = req.params.id;
  const data = { 
    title, 
    description, 
    location, 
    when, 
    max_reservations, 
    price, 
    created_date 
  } = req.body;

  if (!id) {
    return res.send(`Please enter an id`)
  }
  pool.query("UPDATE meal SET ? WHERE id = ?", [data, id], (err, results, fields) => {
    if (err) {
      console.error("Error, try again", err);        
    }
    console.log("data", data);
    return res.send(results)
  })
})

// POST meal
router.post("/", (req, res) => {
  const data = { 
    title, 
    description, 
    location, 
    when, 
    max_reservations, 
    price, 
    created_date 
  } = req.body;

  if (!title || !description || !location || !when || !max_reservations || !price || !created_date) {
    return res.send(`Please enter: title, description, location, when, max_reservations, price and created_date`)
  }
  pool.query("INSERT INTO meal SET ? ", [data], (err, results, fields) => {
    if (err) {
      console.error("Error, try again", err);
    }
    console.log("data", data, "new inserted id", results.insertId);
    return res.send(results)  
  })
})

module.exports = router;