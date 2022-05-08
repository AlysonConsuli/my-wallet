/* eslint-disable react/prop-types */
import { $Item } from './style';

export const Item = ({ value, type, description, date, callbackDelete }) => {
	return (
		<$Item type={type}>
			<span><small>{date}</small>{description}</span>
			<span>{value.toFixed(2).replace('.', ',')}</span>
			<div onClick={(id) => {
				if (window.confirm('Deseja realmente excluir este item?')) {
					callbackDelete(id);
				}
			}} >x</div>
		</$Item >
	);
};