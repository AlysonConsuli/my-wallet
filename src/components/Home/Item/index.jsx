/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { $Item } from './style';

export const Item = ({ value, type, description, date, callbackDelete, id }) => {
	return (
		<$Item type={type}>
			<Link to={`/editar/${type}/${id}`}>
				<span><small>{date}</small>{description}</span>
				<span>{value.toFixed(2).replace('.', ',')}</span>
			</Link>
			<div onClick={(id) => {
				if (window.confirm('Deseja realmente excluir este item?')) {
					callbackDelete(id);
				}
			}} >x</div>
		</$Item >
	);
};