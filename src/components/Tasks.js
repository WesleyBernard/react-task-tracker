import { useState } from "react";

const Tasks = () => {
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

    return <>
        {tasks.map((task) => (<h3 key={task.id}>{task.text}</h3>))}
    </>
}

export default Tasks