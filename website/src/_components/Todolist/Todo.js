import React, { Component } from 'react'

class Todolist extends Component {    
    render() {
        const { item } = this.props
        return (
            <div className="todo">
                {item.name}
                <button onClick={this.props.handleRemove.bind(null, item)} className="btn btn-danger btn-xs float-right">x</button>
                <button onClick={this.props.handleState.bind(null,item)} className={(item.state ? 'btn-success' : 'btn-primary') + ' btn btn-xs float-right'}>{item.state ? 'Fait' : 'A faire'}</button>
            </div>
        )
    }
}

export default Todolist;