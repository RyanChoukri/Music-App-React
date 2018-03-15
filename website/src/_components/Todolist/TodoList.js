import React, { Component } from 'react'
import PropTypes from 'prop-types';

import Todo from './Todo'

class Todolist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...this.props,
            inputTodo : ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleState = this.handleState.bind(this);
    }

    handleChange(e) {
        this.setState({ inputTodo : e.target.value });
    }

    handleRemove = item  => {
        const newItem = this.state.items.filter(curItem => curItem !== item);
        this.setState({ items : newItem });
    }

    handleState(item) {
        const newItem = this.state.items.map(curItem => {
            if (curItem === item) item.state = !item.state
            return curItem;
        });
        this.setState({ items : newItem });
    }

    handleSubmit() {
        if (this.state.inputTodo && this.state.inputTodo.length) {
            const newItem = {
                name : this.state.inputTodo,
                state : false
            }

            this.setState({
                items : [...this.state.items, newItem],
                inputTodo : ''
            });
        }
    }

    getList() {
        return this.state.items.map((item, key) => <Todo key={key} handleState={this.handleState} handleRemove={this.handleRemove} item={item}/>)
    }

    render() {
        return (
            <div className="col-md-6">
                <h1>Todolist</h1>
                <div>
                    <label>
                        Votre tache ?:
                        <input type="text" name="inputTodo" value={this.state.inputTodo} onSubmit={this.handleSubmit} onChange={this.handleChange} />
                    </label>
                    <button className="btn btn-primary" onClick={this.handleSubmit}>Add</button>
                </div>
                
                {this.getList()}
            </div>

        )
    }
}

Todolist.propTypes = {
    items: PropTypes.array
  };

Todolist.defaultProps = {
    items: []
};

export default Todolist;