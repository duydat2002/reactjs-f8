import React, { useState } from "react";
import "./styles.scss";

const TodoFeature = () => {
    const [job, setJob] = useState("");
    const [jobs, setJobs] = useState(() => {
        const storeJobs = JSON.parse(localStorage.getItem("jobs"));
        return storeJobs ?? [];
    });

    const handleSubmit = () => {
        setJobs((old) => {
            const newJobs = [...old, job];
            localStorage.setItem("jobs", JSON.stringify(newJobs));
            return newJobs;
        });
        setJob("");
    };

    return (
        <div className="todo">
            <h3>Todo List</h3>
            <div className="todoForm">
                <input
                    type="text"
                    value={job}
                    onChange={(e) => setJob(e.target.value)}
                />
                <button onClick={handleSubmit}>ADD</button>
            </div>
            <ul className="todoList">
                {jobs.map((job, index) => (
                    <li className="todoItem" key={index}>
                        {job}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoFeature;
