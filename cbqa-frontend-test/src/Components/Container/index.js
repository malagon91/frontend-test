import React, { useEffect, useState, Fragment } from 'react';
import Header from '../Header';
const apiUrl = 'https://jsonplaceholder.typicode.com/todos/';
const Container = () => {
	const [data, setData] = useState([]);
	const [selected, setSelected] = useState({});

	const groupBy = arrayObj =>
		arrayObj.reduce((r, a) => {
			r[a.userId] = [...(r[a.userId] || []), a];
			return r;
		}, {});

	const setSelectedObj = (index, arr) => ({
		index,
		userId: arr ? arr[0].userId : null,
		items: arr
	});

	const getDAta = async () => {
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
	};
	useEffect(() => {
		getDAta();
	}, []);
	return (
		<Fragment>
			<Header selected={selected} />
		</Fragment>
	);
};

export default Container;
