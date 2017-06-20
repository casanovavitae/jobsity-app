import React from 'react';

class TaskItem extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            task: props.task.data,
            id: props.task._id
        }
    }

    onChange(task,id, e){
        this.props.onEditState(task,id,e.target.checked);
    }

    render() {
        return (
            <div style={{backgroundColor: this.state.task.completed?"grey":""}}>
                <label><input type="checkbox" name={this.state.id.$oid} onChange={this.onChange.bind(this, this.state.task,this.state.id)} defaultChecked={this.state.task.completed}/>{this.state.task.text}</label>
            </div>
        );
    }
}

export default TaskItem;
