const express = require("express");
const app = express();
const router = express.Router();
const pool = require("./../database");

router.get("/", (req, res) => {
  if (Object.entries(req.query).length === 0){
    pool.query(`SELECT * FROM review`, function(err, results, fields){
      if (err){
        console.error(err);
      }
      res.send(results); // http://localhost:5000/api/reviews
    })
  }
})

// GET review by id
router.get("/:id", (req, res) => {
  const id = req.params.id;
  if (!id) {
      return res.send(`Please enter an id`)
  }
  pool.query("SELECT * FROM review WHERE id = ?", [id], (err, results, fields) => {
      if (err) {
          console.log(err)
      }
      return res.send(results)
  })
}) // http://localhost:5000/api/reviews/2

// DELETE review by id
router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  if (!id) {
      return res.send(`Please enter an id`)
  }
  pool.query("DELETE FROM review WHERE id = ?", [id], (err, results, fields) => {
      if (err) {
          console.log(err)
      }
      return res.send(results)
  })
}) // http://localhost:5000/api/reviews/6

// PUT review by id. (in that case I used PATCH instead of PUT to allow partial updates)
router.patch("/:id", (req, res) => {
  const id = req.params.id;
  const data = { 
    title, 
    description, 
    review_meal_id, 
    stars, 
    created_date 
  } = req.body;

  if (!id) {
    return res.send(`Please enter an id`)
  }
  pool.query("UPDATE review SET ? WHERE id = ?", [data, id], (err, results, fields) => {
    if (err) {
      console.error("Error, try again", err);
    }
    console.log("data", data);
    return res.send(results)
  })
})

// POST review
router.post("/", (req, res) => {
  const data = { 
    title, 
    description, 
    review_meal_id, 
    stars, 
    created_date  
  } = req.body;

  if (!title || !description || !review_meal_id || !stars || !created_date) {
    return res.send(`Please enter: title, description, review_meal_id, stars and created_date`)
  }
  pool.query("INSERT INTO review SET ? ", [data], (err, results, fields) => {
    if (err) {
      console.error("Error, try again", err);
    }
    console.log("data", data, "created id", results.insertId);
    return res.send(results)  
  })
})

module.exports = router;