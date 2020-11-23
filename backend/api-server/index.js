const {v4} = require("uuid");
let express = require('express');
let app = express();
const port = 443;

const cors = require('cors');

var bodyParser = require('body-parser')
const pool = require('./pool').pool;

app.use(cors({
    origin: 'http://localhost:3000'
}))
app.use(bodyParser.json());

app.get('/jokes', (req,res)=>{
    console.log("Get Jokes");
    
    pool.connect((err, client,release) => {
        if(err){
            res.sendStatus(500);
        } else {
            client.query(`SELECT COUNT(*) FROM jokes`,(errAll, all)=>{
                client.query(`SELECT COUNT(*) FROM jokes WHERE date >= NOW() - interval '30 days';`, (errMonth,month)=>{
                    client.query(`SELECT COUNT(*) FROM jokes WHERE date >= NOW() - interval '1 day';`, (errDay,day)=>{
                        client.query(`SELECT text,date FROM jokes ORDER BY date DESC;`, (errjokes,jokes)=>{
                        res.status(200).send({
                            all:all.rows[0].count,
                            month:month.rows[0].count,
                            day:day.rows[0].count,
                            jokes:jokes.rows
                        }
                        )})
                    })
                })
            })
        }

        release()
    })

})

app.post('/joke',(req,res)=>{
    if(req.body.joke){
        pool.connect((err,client,release)=>{
            if(err){
                res.sendStatus(500);
            } else {
                client.query(`INSERT INTO
                                jokes(
                                    id,
                                    text,
                                    date
                                )
                                VALUES(
                                    $1,
                                    $2,
                                    current_timestamp
                                );`,
                                [v4(),
                                req.body.joke],
                                (err,rows)=>{
                                    if(err){
                                        res.sendStatus(500);
                                    }else {
                                        res.sendStatus(200);
                                    }
                                })
            }

            release();
        })
    } else {
        res.sendStatus(400);
    }
})

app.listen(port, () => {
    console.log(`Steve Bad Jokes listening at http://localhost:${port}`)
  });