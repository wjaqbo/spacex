import React, { Component, Fragment } from 'react';
// import uuid from 'uuid';
import axios from 'axios';
import { TodoItem } from './TodoItem';
import { AddTodo } from './AddTodo';

export class Todos extends Component {
    state = {
        todos: [],
        loading: true,
    };

    componentDidMount() {
        axios
            .get('http://jsonplaceholder.typicode.com/todos?_limit=5')
            .then(res => {
                this.setState({ todos: res.data });
            })
            .finally(() => {
                this.setState({ loading: false });
            });
    }

    toggleComplete = id => {
        // console.log(id);

        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed;
                    // console.log(todo.completed);
                }
                return todo;
            }),
        });
    };

    delTodo = id => {
        // console.log(id);
        this.setState({ loading: true });
        console.log('todo removing...');
        axios
            .delete(`http://jsonplaceholder.typicode.com/todos/${id}`)
            .then(() => {
                // console.log(res.data);
                this.setState({
                    todos: [...this.state.todos.filter(todo => todo.id !== id)],
                });
            })
            .finally(() => {
                this.setState({ loading: false });
                console.log('todo removed successfuly ');
            });
    };

    addTodo = title => {
        // console.log(title);
        this.setState({ loading: true });
        axios
            .post('http://jsonplaceholder.typicode.com/todos', {
                title,
                completed: false,
            })
            .then(res =>
                this.setState({
                    todos: [...this.state.todos, res.data],
                })
            )
            .finally(() => {
                this.setState({ loading: false });
                console.log('todo added successfuly');
            });
    };

    render() {
        // console.log(this.state.todos);
        if (this.state.loading) {
            return <h4>Loading...</h4>;
        }
        return (
            <Fragment>
                <div className="card card-header mb-3">
                    <h1>To do</h1>
                </div>
                <AddTodo addTodo={this.addTodo} />
                <ul className="list-group">
                    {this.state.todos.map(todo => (
                        <TodoItem
                            key={todo.id}
                            todo={todo}
                            toggleComplete={this.toggleComplete}
                            delTodo={this.delTodo}
                        />
                    ))}
                </ul>
            </Fragment>
        );
    }
}

export default Todos;
