const express = require("express");
const app = express();
const router = express.Router();
const pool = require("./../database");

router.get("/", (req, res) => {
  if (Object.entries(req.query).length === 0){
    pool.query(`SELECT * FROM reservation`, function(err, results, fields){
      if (err){
        console.error(err);
      }
      res.send(results); // http://localhost:5000/api/reservations
    })
  }
})

// GET reservation by id
router.get("/:id", (req, res) => {
  const id = req.params.id;
  if (!id) {
      return res.send(`Please enter an id`)
  }
  pool.query("SELECT * FROM reservation WHERE id = ?", [id], (err, results, fields) => {
      if (err) {
          console.log(err)
      }
      return res.send(results)
  })
}) // http://localhost:5000/api/reservations/2

// DELETE reservation by id
router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  if (!id) {
      return res.send(`Please enter an id`)
  }
  pool.query("DELETE FROM reservation WHERE id = ?", [id], (err, results, fields) => {
      if (err) {
          console.log(err)
      }
      return res.send(results)
  })
}) // http://localhost:5000/api/reservations/6

// PUT reservation by id. (in that case I used PATCH instead of PUT to allow partial updates)
router.patch("/:id", (req, res) => {
  const id = req.params.id;
  const data = { 
    number_of_guests, 
    meal_id, 
    created_date 
  } = req.body;

  if (!id) {
    return res.send(`Please enter an id`)
  }
  pool.query("UPDATE reservation SET ? WHERE id = ?", [data, id], (err, results, fields) => {
    if (err) {
      console.error("Error, try again", err);
    }
    console.log("data", data);
    return res.send(results)
  })
})

// POST reservation
router.post("/", (req, res) => {
  const data = { 
    number_of_guests, 
    meal_id, 
    created_date  
  } = req.body;

  if (!number_of_guests || !meal_id || !created_date) {
    return res.send(`Please enter: number_of_guests, meal_id and created_date `)
  }
  pool.query("INSERT INTO reservation SET ? ", [data], (err, results, fields) => {
    if (err) {
      console.error("Error, try again", err);
    }
    console.log("data", data, "created id", results.insertId);
    return res.send(results)  
  })
})

module.exports = router;