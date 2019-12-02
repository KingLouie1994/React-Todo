import React from 'react';

export default class TodoForm extends React.Component {
    render() {
        return(
            <form onSubmit={this.props.addItem}>
                <input type='text' placeholder='new task' />
                <button>Add Todo</button>
                <button>Clear everything</button>
            </form>
        )
    }
}