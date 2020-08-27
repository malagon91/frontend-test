import React from 'react';

const Task = ({ task, done, handleTaskDone, handleDeleteTask, index }) => (
	<li>
		<input
			type="checkbox"
			checked={done}
			onChange={() => handleTaskDone(index)}
		/>
		<span className="checkmark animate"></span>
		{task}
		<i
			className="fas fa-times delete-task"
			onClick={() => handleDeleteTask(index)}
		></i>
	</li>
);

export default Task;
