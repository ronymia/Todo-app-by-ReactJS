import React from 'react';
import SingleTask from '../SingleTask/SingleTask';
import './TaskList.css';

const TaskList = ({ taskList, toggleCompleteTask, deleteTask }) => {
    const taskQuantity = taskList.length;
    const completeTask = taskList.filter(task => task.isCompleted).length;
    console.log(completeTask);

    return (
        <section className="tasks">
            <header className="task-header">
                <div>
                    <p>Create Tasks</p>
                    <span>{taskQuantity}</span>
                </div>
                <div>
                    <p className="textPurple">Completed Task</p>
                    <span>{completeTask} of {taskQuantity}</span>
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
