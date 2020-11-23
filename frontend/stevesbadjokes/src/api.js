
const url ='http://localhost:443/';

const axios = require('axios').default;

exports.getJokes= ()=>{
    return new Promise((resolve,reject)=>
        {
            axios.get(`${url}jokes`)
                .then(x=> { 
                        resolve(x.data)})
                .catch(x=>{
                    reject(x.data)})
        });
}

exports.postJoke= (joke)=> {
    return new Promise((resolve,reject)=> {
        {
            axios.post(`${url}joke`, {joke})
                .then(x=>{
                    resolve(x.data)})
                .catch(x=>reject(x.data));
        }
    })
}