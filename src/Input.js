import React, { Component } from 'react'

export default class Input extends Component {
    state={
        count: ''
    }
    handleChange=(e)=>{
        this.setState({
                count: e.target.value
        })
    }
handleSubmit=(e)=>{
        e.preventDefault();
        this.props.input(this.state.count);
        this.setState({
            count: ''
        })
}

    render() {
        return (
           <form id="input" action="" onSubmit={this.handleSubmit}>
                <input type="text" placeholder="add a number and hit Enter" onChange={this.handleChange} value={this.state.count}/>
           </form>
        )
    }
}
