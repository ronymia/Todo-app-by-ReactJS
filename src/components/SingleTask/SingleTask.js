import React from 'react';
import { TbTrash } from 'react-icons/tb';
import './SingleTask.css';

const SingleTask = () => {
    return (
        <div className="single-task">
            {/* complete check button */}
            <button type="button"
                className="checkContainer"
            >
                <div ></div>
            </button>
            {/* task detail  */}
            <p className="">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            {/* task delete button  */}
            <button type="button"
                className="deleteButton"
            >
                <TbTrash size={20} />
            </button>
        </div>
    )
}

export default SingleTask;
