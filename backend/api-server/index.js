
let express = require('express');
let app = express();
const port = 443;

const cors = require('cors');

app.use(cors({
    origin: 'http://localhost:3000'
}))

app.get('/jokes', (req,res)=>{
    console.log("Get Jokes");
    res.status(200).send({
        today: 1,
        month:15,
        all:100
    });
})

app.listen(port, () => {
    console.log(`Steve Bad Jokes listening at http://localhost:${port}`)
  });