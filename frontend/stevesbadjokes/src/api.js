
const url ='http://localhost:443/';

const axios = require('axios').default;

exports.getJokes= ()=>{
    return new Promise((resolve,reject)=>
        {
            axios.get(`${url}jokes`)
                .then(x=> {console.log(x); 
                        resolve(x.data)})
                .catch(x=>{
                    console.log(x);
                    reject(x.data)})
        });
}