import React, {Component} from 'react';
const api = require("./api");

class PostJoke extends React.Component{
    state = {
        active: false,
        jokeText: ""
    }


    render() {
        return <>
            <button type='button' className='btn btn-dark' onClick={e=>{
                if(this.state.active){
                    api.postJoke(this.state.jokeText).then(x=>
                        {
                            this.setState({jokeText:""})
                            this.props.update();
                        }
                    )
                }
                this.setState({active:!this.state.active})
            }}>
                Sumbit Joke
            </button>
            <div>
            {this.state.active && (
                <textarea value={this.state.jokeText} onChange={e=>this.setState({jokeText:e.target.value})}/>
            )}
            </div>
        </>
    }
}

export default PostJoke;