import express from 'express';
import { MongoClient, ObjectId } from 'mongodb';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';

const app = express();
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
dotenv.config();

const dbUrl = `${process.env.DB_HOST}`;
const client = new MongoClient(dbUrl);

const validate = data => {
  let errors = {};
  if (data.title === '') errors.title = "Can't be empty";
  if (data.cover === '') errors.cover = "Can't be empty";
  const isValid = Object.keys(errors).length === 0;
  return { errors, isValid };
};

(async () => {
  try {
    const database = client.db("react-redux_movie-app");
    const movies = database.collection("movies");
    app.post("/api/movies", async (req, res) => {
      const { title, cover } = req.body;
      await movies.insertOne({
        title: title,
        cover: cover
      }, (err, result)=>{
        if(err ){
          res.json({
            message:err
          })
        }
        res.json({result})
      })
    })
    app.get("/api/movies", async (req, res) => {
      movies.find({}).toArray((err, movies) => {
        if (err) {
          res.json("An error occured. The error is ", err)
        }
        res.json({ movies });
      })
    })
    app.put("/api/movies/:_id", async (req, res) => {
      const id = req.params._id;
      const { title, cover } = req.body;
      await movies.updateOne({
        _id: new ObjectId(id)
      }, {
        $set: {
          title: title,
          cover: cover
        }
      }, (err, result) => {
        if (err) {
          res.json({
            message: err
          })
        }
        res.json({ result });
      }
      )
    })
    app.get("/api/movies/:_id", async(req, res) => {
      const _id = req.params._id;
      await movies.findOne({ _id: new ObjectId(_id) }, (err, result) => {
        if (err) {
          res.json({ err });
        }
        res.json({ result });
      })
    })
    app.delete("/api/movies/:_id", async (req, res) => {
      const id = req.params._id;
      await movies.deleteOne({
        _id: new ObjectId(id)
      }, (err, result) => {
        if (err) {
          res.json({
            message: err
          })
        }
        res.json({ result })
      })
    })
  } catch (err) {
    console.log("Error is ", err)
  }
  app.use((req, res) => {
    res.status(404).json({
      errors: {
        global: "Still working on it. Please try again later when we implement it."
      }
    });
  });
  app.listen(8080, () => console.log('Server is running on localhost:8080'));
})()