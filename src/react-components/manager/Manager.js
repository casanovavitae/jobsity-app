import React from 'react'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {retrieveData,putData} from '../../actions/action-api'
import Taskitem from './TaskItem'


class Mongo extends React.Component {
    componentWillMount(){
        this.props.apiGetData("API_GET_TASKS","https://api.mlab.com/api/1/databases/react-task/collections/tasks?apiKey=Uta31Zvd5IcPbxz1TlvV4aEVCXsLWNHX");
    }

    handleEditState(task, checked){
        console.log('TASK EDITSTATE',task,checked);
        let putUrl = 'https://api.mlab.com/api/1/databases/react-task/collections/tasks/'+task._id.$oid+'?apiKey=Uta31Zvd5IcPbxz1TlvV4aEVCXsLWNHX';
        this.props.apiSetData("API_PUT_TASKS",putUrl,task.text,checked);
    }

    render() {
        let taskItems;
        let singleTask;
        if(this.props.task){
            singleTask = this.props.task.data;

            console.log('Render task',singleTask);

            taskItems = singleTask.map(task => {
                return (
                    <li key={task._id.$oid}><Taskitem key={task._id.$oid} onEditState={this.handleEditState.bind(this)} task={task} /></li>
                );
            });

        }
        return (

        <nav>
            <ul className="nav">
                {taskItems}
            </ul>
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
    return bindActionCreators({apiGetData: retrieveData,apiSetData:putData},dispatch)
}
export default connect(mapStateToProps,matchDispatchToProps)(Mongo)
