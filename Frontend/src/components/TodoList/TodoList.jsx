import { useState } from "react";

export default function ToDoList() {
    const [tasks, setTasks] = useState([]);
    const [inputValue, setInputValue] = useState('');

    return (
        <div>
            <p className="title">To-Do List</p>
            <input type="text" onChange={(e) => setInputValue(e.target.value)} value={inputValue} placeholder="Add a new task" className="task-input"/>
            <button onClick={() => {
                console.log(tasks)  
                setTasks([...tasks, {"id": tasks.length > 0 ? tasks.at(-1).id + 1 : 0, "text": inputValue, "active": true}]);
                setInputValue('');
                }} 
                disabled={!inputValue} className="tast-button">Add task</button>
            <table>
                <thead>
                    <tr>
                        <th>Active</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((task, index) => (
                        <tr key={index}>
                            <td><input type="checkbox" checked={task.active} onChange={(e) => {
                                setTasks(tasks.map(t =>
                                            t.id === task.id ? { ...t, active: !t.active } : t
                                        ));}} />
                            </td>  
                            <td>{task.text}</td>  
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}