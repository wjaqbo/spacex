import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    render() {
        const { id, title, completed } = this.props.todo;
        const style = {
            backgroundColor: '#333',
            textDecoration: completed ? 'line-through' : 'none',
            fontSize: '1.2rem',
            margin: 0,
        };

        return (
            <Fragment>
                <li className="list-group-item">
                    <label htmlFor={`todo-item${id}`} style={style}>
                        <input
                            type="checkbox"
                            id={`todo-item${id}`}
                            checked={completed}
                            onChange={this.props.toggleComplete.bind(this, id)}
                        />{' '}
                        {title}
                    </label>
                    <button className="btn btn-danger" onClick={this.props.delTodo.bind(this, id)}>
                        Remove
                    </button>
                </li>
            </Fragment>
        );
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    toggleComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired,
};

export default TodoItem;
