/* eslint-disable react/prop-types */
import { $Item } from './style';

export const Item = ({ value, type, description, date }) => {
	return (
		<$Item type={type}>
			<span><small>{date}</small>{description}</span>
			<span>{value.toFixed(2).replace('.', ',')}</span>
		</$Item>
	);
};