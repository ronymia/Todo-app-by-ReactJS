import { useState } from "react";
import Header from "./components/Header/Header";
import TaskList from "./components/TaskList/TaskList";

function App() {
  const [taskList, setTaskList] = useState([]);

  const HandleAddToTask = (task) => {
    const singleTask = {
      id: (new Date()).getTime(),
      task: task,
      isCompleted: false
    };
    // set task to task list state
    setTaskList([...taskList, singleTask]);
  }

  return (
    <>
      <Header HandleAddToTask={HandleAddToTask} />
      <TaskList />
    </>
  );
}

export default App;
