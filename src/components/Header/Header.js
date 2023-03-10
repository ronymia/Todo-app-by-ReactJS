import React from 'react';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import './Header.css';
import todoLogo from '../../assets/todoLogo.svg';

const Header = ({ HandleAddToTask }) => {

    const handleSubmitTask = (event) => {
        event.preventDefault();
        const task = (event.target.task.value);

        // pass task 
        HandleAddToTask(task);

        // reset input field
        event.target.reset();
    }

    return (
        <header className="header">
            <figure>
                <img src={todoLogo} alt="" />
            </figure>
            <form onSubmit={handleSubmitTask} className="newTaskForm">
                <input type="Add a new task" name="task" />
                <button type="submit"
                >
                    create
                    <AiOutlinePlusCircle size={20} />
                </button>
            </form>
        </header>
    )
}

export default Header;
