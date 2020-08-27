import React from 'react';
import Task from './Task';
import './styles.css';

const TaskList = ({ items, handleTaskDone, handleDeleteTask }) => (
	<ul className="taskList">
		{items.map((task, id) => (
			<Task
				key={id}
				index={id}
				task={task.title}
				done={task.completed}
				handleTaskDone={handleTaskDone}
				handleDeleteTask={handleDeleteTask}
			/>
		))}
	</ul>
);

export default TaskList;
