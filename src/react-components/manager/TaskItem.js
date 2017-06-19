import React from 'react';

class TaskItem extends React.Component {
    constructor(props){
        super(props);
        console.log("Single prop",props);
        this.state = {
            task: props.task.data,
            id: props.task._id
        }
    }

    onChange(task, e){
        this.props.onEditState(task, e.target.checked);
    }

    render() {
        console.log(this.state.task);
        return (
            <div style={{backgroundColor: "blue"}}>
                <label><input type="checkbox" name={this.state.id.$oid} onChange={this.onChange.bind(this, this.state.task,this.state.id)} defaultChecked={this.state.task.completed}/>{this.state.task.text}</label>
            </div>
        );
    }
}

export default TaskItem;
