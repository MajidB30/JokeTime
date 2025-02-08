import express from 'express';
import axios from 'axios';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));


app.get("/" , async(req, res) => {
  try{
const result = await axios.get("https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Dark?type=twopart");

res.render("index.ejs" , {jokeQuestion: result.data.setup , jokeAnswer: result.data.delivery});
  }catch(error)
  {
    console.log(error.result.setup);
    res.status(500);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});