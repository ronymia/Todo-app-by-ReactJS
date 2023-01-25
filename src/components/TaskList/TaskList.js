import React from 'react';
import SingleTask from '../SingleTask/SingleTask';
import './TaskList.css';

const TaskList = ({ taskList, toggleCompleteTask, deleteTask }) => {

    return (
        <section className="tasks">
            <header className="task-header">
                <div>
                    <p>Create Tasks</p>
                    <span>10</span>
                </div>
                <div>
                    <p className="textPurple">Completed Task</p>
                    <span>0 of 10</span>
                </div>
            </header>

            <div className="list">
                {
                    taskList.map(singleTask => <SingleTask
                        key={singleTask.id}
                        singleTask={singleTask}
                        toggleCompleteTask={toggleCompleteTask}
                        deleteTask={deleteTask}
                    />)
                }
            </div>
        </section>
    )
}

export default TaskList;
