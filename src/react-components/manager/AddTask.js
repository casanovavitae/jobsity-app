import React from 'react';

class AddTask extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            task: ''
        }
    }

    onSubmit(e){
        this.props.onAddTask(this.state.task);
        e.preventDefault();
    }

    onChange(e){
        this.setState({task:e.target.value});
    }

    render() {
        return (
            <form onSubmit={this.onSubmit.bind(this)}>
                <input placeholder="Add Task" onChange={this.onChange.bind(this)} />
            </form>
        );
    }
}

export default AddTask;