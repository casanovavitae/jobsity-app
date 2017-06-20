import React from 'react'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {retrieveData,putData,addTask,deleteTask} from '../../actions/action-api'
import Taskitem from './TaskItem'
import AddTask from './AddTask'


class Mongo extends React.Component {
    componentWillMount(){
        this.props.apiGetData("API_GET_TASKS","https://api.mlab.com/api/1/databases/react-task/collections/tasks?apiKey=Uta31Zvd5IcPbxz1TlvV4aEVCXsLWNHX");
    }

    handleEditState(task,id,checked){
        let url = 'https://api.mlab.com/api/1/databases/react-task/collections/tasks/'+id.$oid+'?apiKey=Uta31Zvd5IcPbxz1TlvV4aEVCXsLWNHX';
        this.props.apiSetData("API_GET_TASKS",url,task.text,checked,this.props.task,id.$oid);
    }

    addTask(text){
        let url = 'https://api.mlab.com/api/1/databases/react-task/collections/tasks?apiKey=Uta31Zvd5IcPbxz1TlvV4aEVCXsLWNHX';
        this.props.apiAddTask("API_GET_TASKS",url,text,this.props.task);
    }

    clearTasks(){
        let url = 'https://api.mlab.com/api/1/databases/react-task/collections/tasks/';
        let key = '?apiKey=Uta31Zvd5IcPbxz1TlvV4aEVCXsLWNHX';
        this.props.apideleteTask("API_GET_TASKS",url,key,this.props.task);
    }

    render() {
        let taskItems;
        let singleTask;
        if(this.props.task){
            singleTask = this.props.task.data;

            taskItems = singleTask.map(task => {
                return (
                    <li key={task._id.$oid}><Taskitem key={task._id.$oid} onEditState={this.handleEditState.bind(this)} task={task} /></li>
                );
            });

        }
        return (

        <nav>
            <AddTask onAddTask={this.addTask.bind(this)} />
            <ul className="nav">
                {taskItems}
            </ul>
            <button onClick={this.clearTasks.bind(this)}>Clear Tasks</button>
        </nav>
        )
    }
}

function mapStateToProps(state) {
    return{
        task: state.task
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({apiGetData: retrieveData,apiSetData:putData, apiAddTask: addTask, apideleteTask: deleteTask},dispatch)
}
export default connect(mapStateToProps,matchDispatchToProps)(Mongo)
