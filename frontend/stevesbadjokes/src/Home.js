
import React, {Component} from 'react';
const api = require("./api");

class Home extends Component {
    state = {
        allJokes: 0,
        monthJokes: 0,
        todayJokes: 0,
        jokeList:[]
    }
    
    componentDidMount(){
        api.getJokes().then(

            x=>{
            
            this.setState({
                allJokes:x.all,
                monthJokes:x.month,
                todayJokes:x.day,
                jokeList: x.jokes
            })
            console.log(this.state.jokeList[0].text)
            }

        ).catch();
    }

    render() {
      return   <>
                
                    <div className="text-center pt-3">
                        <h3>
                            Bad Jokes Today
                        </h3>
                        <h3>
                            {this.state.todayJokes}
                        </h3>
                        <h3>
                            Bad Jokes This Month
                        </h3>
                        <h3>
                            {this.state.monthJokes}
                        </h3>

                        <h3>
                            Bad Jokes All Time
                        </h3>
                        <h3>
                            {this.state.allJokes}
                        </h3>
                        <ul>
                        {this.state.jokeList.map(joke=>
                            (
                            <li>
                                {joke.text}
                            </li>
                            )
                        )}

                        </ul>
                        

                    </div>
            
            
            </>
        
    }
  }

export default Home;