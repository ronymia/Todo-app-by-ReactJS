import { useState } from "react";
import Header from "./components/Header/Header";
import TaskList from "./components/TaskList/TaskList";

function App() {
  const [taskList, setTaskList] = useState([]);
  console.log(taskList);

  const HandleAddToTask = (task) => {
    const singleTask = {
      id: new Date().getTime(),
      task: task,
      isCompleted: false
    };
    // set task to task list state
    setTaskList([...taskList, singleTask]);
  }

  const toggleCompleteTask = (taskId) => {
    const newTaskList = taskList.map(task => {
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted
        }
      }
      return task;
    })
    setTaskList(newTaskList);
  }

  const deleteTask = (taskId) => {
    const restTask = taskList.filter(task => task.id !== taskId);
    setTaskList(restTask);
  }

  return (
    <>
      <Header HandleAddToTask={HandleAddToTask} />
      <TaskList
        taskList={taskList}
        toggleCompleteTask={toggleCompleteTask}
        deleteTask={deleteTask}
      />
    </>
  );
}

export default App;
