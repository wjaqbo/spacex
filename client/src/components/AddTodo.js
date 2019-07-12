import React, { Component } from 'react';

export class AddTodo extends Component {
    state = {
        title: '',
    };

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title: '' });
    };

    render() {
        return (
            <form onSubmit={this.onSubmit} className="form-inline mb-3">
                <input
                    type="text"
                    className="form-control"
                    name="title"
                    placeholder="Add Todo ..."
                    value={this.state.title}
                    onChange={this.onChange}
                />
                <input type="submit" value="Add" className="btn" />
            </form>
        );
    }
}

export default AddTodo;
