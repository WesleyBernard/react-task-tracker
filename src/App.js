import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";
function App() {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: "renew regestration",
            day: "June 6th at 2:00PM",
            reminder: true
        },
        {
            id: 2,
            text: "Start work",
            day: "July 25th at 9:00AM",
            reminder: true
        },
        {
            id: 3,
            text: "MTG with the homies",
            day: "June 18th at 5:00PM",
            reminder: false
        }
    ])

    // Delete Task
    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id))
    }
  return (
    <div className="container">
      <Header />
        {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask}/> : 'No Tasks to display'}
    </div>
  );
}

export default App;
