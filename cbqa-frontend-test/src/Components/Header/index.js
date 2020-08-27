import React from 'react';
import './styles.css';
const Header = ({ selected, limit, nextFn, oldFn }) => {
	const { index, userId, items } = selected;

	return (
		<div className="header">
			<i
				className={`fas fa-chevron-left left ${index == 0 ? 'disabled' : ''}`}
				onClick={oldFn}
			></i>
			<div className="center">
				<p>{userId}</p>
				<p className="date">{`Total Childs ${items ? items.length : 0}`}</p>
			</div>
			<i
				className={`fas fa-chevron-right right ${
					index == limit ? 'disabled' : ''
				}`}
				onClick={nextFn}
			></i>
		</div>
	);
};

export default Header;
