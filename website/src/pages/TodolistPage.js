import React, { Component } from 'react'
import Todolist from '../_components/Todolist/TodoList'


class TodolistPage extends Component {
    render() {
        const items = [
            {
                name : "Devenir riche",
                state : false
            },
            {
                name : "devenir dev",
                state : false
            },
            {
                name : "autre",
                state : false
            },
            {
                name : "rien",
                state : false
            }
        ];
        return (
            <Todolist items={items}/>
        )
    }
}

export default TodolistPage;