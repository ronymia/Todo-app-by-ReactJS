import React from 'react';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { TbTrash } from 'react-icons/tb';
import './SingleTask.css';

const SingleTask = ({ singleTask, toggleCompleteTask, deleteTask }) => {
    const { id, task, isCompleted } = singleTask;

    return (
        <div className="single-task">
            {/* complete check button */}
            <button type="button"
                className="checkContainer"
                onClick={() => toggleCompleteTask(id)}
            >
                {
                    isCompleted ?
                        <BsFillCheckCircleFill />
                        :
                        <div ></div>
                }
            </button>

            {/* task detail  */}
            <p className={isCompleted ? "textCompleted" : ""}>{task}</p>

            {/* task delete button  */}
            <button type="button"
                className="deleteButton"
                onClick={() => deleteTask(id)}
            >
                <TbTrash size={20} />
            </button>
        </div>
    )
}

export default SingleTask;
