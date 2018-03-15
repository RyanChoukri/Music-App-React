import React, { Component } from 'react'

export default class Counter extends Component {
    state = {
        count : 0
    }

    increment = () => {
        const newCount = this.state.count + 1;
        this.setState({
            count : newCount
        });
    }

    render() {    
        return (
            <div>
                COMPTEUR
                <div>{this.state.count}</div>
                <button
                    onClick={this.increment} 
                >INCREMENT</button>
            </div>
        )
    }
}