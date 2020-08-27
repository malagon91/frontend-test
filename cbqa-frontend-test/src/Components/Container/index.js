import React, { useEffect, useState, Fragment, useMemo } from 'react';
import Header from '../Header';
import TaskList from '../TaskList';
const apiUrl = 'https://jsonplaceholder.typicode.com/todos/';
const Container = () => {
	const [data, setData] = useState([]),
		[selected, setSelected] = useState({}),
		groupBy = arrayObj =>
			arrayObj.reduce((r, a) => {
				r[a.userId] = [...(r[a.userId] || []), a];
				return r;
			}, {}),
		setSelectedObj = (index, arr) => ({
			index,
			userId: arr ? arr[0].userId : null,
			items: arr
		}),
		getDAta = async () => {
			try {
				const response = await fetch(apiUrl),
					data = await response.json(),
					gruped = groupBy(data),
					arrayData = Object.keys(gruped).map(key => gruped[key]);
				setData(arrayData);
				setSelected(arrayData.length ? setSelectedObj(0, arrayData[0]) : {});
			} catch (error) {
				setData([]);
			}
		},
		limit = useMemo(() => data.length - 1, [data]),
		nextItem = () => {
			if (selected.index != undefined)
				if (selected.index < limit) {
					const newIndex = selected.index + 1;
					setSelected(setSelectedObj(newIndex, data[newIndex]));
				}
		},
		oldItem = () => {
			if (selected.index != undefined)
				if (selected.index > 0) {
					const newIndex = selected.index - 1;
					setSelected(setSelectedObj(newIndex, data[newIndex]));
				}
		},
		doneTask = selec => {
			if (selected.items) {
				const localItems = [...selected.items];
				const newItems = localItems.map((item, index) => ({
					...item,
					completed: index === selec ? !item.completed : item.completed
				}));
				setSelected({ ...selected, items: newItems });
			}
		},
		deleteTask = sel => {
			if (selected.items) {
				const localItems = [...selected.items];
				const newItems = localItems.filter((item, index) => index !== sel);
				setSelected({ ...selected, items: newItems });
			}
		};
	useEffect(() => {
		getDAta();
	}, []);

	return (
		<Fragment>
			<Header
				selected={selected}
				limit={limit}
				nextFn={nextItem}
				oldFn={oldItem}
			/>
			<TaskList
				handleTaskDone={doneTask}
				handleDeleteTask={deleteTask}
				items={selected.items || []}
			/>
		</Fragment>
	);
};

export default Container;
