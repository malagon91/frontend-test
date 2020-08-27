import React from 'react';
import './styles.css';
const Header = ({ selected, limit }) => {
	const { index, userId, items } = selected;

	return (
		<div className="header">
			<i
				className={`fas fa-chevron-left left ${index == 0 ? 'disabled' : ''}`}
				onClick={() => {}}
			></i>
			<div className="center">
				<p>{userId}</p>
				<p className="date">{`Total Childs ${items ? items.length : 0}`}</p>
			</div>
			<i
				className={`fas fa-chevron-right right ${
					index == limit ? 'disabled' : ''
				}`}
				onClick={() => {}}
			></i>
		</div>
	);
};

export default Header;
