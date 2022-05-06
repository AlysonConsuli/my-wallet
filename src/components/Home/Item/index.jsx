import { $Item } from './style';
import dayjs from 'dayjs';

export const Item = () => {
	const date = dayjs().format('DD/MM');

	return(
		<$Item>
			<span><small>{date}</small>Items</span>
			<span>39,90</span>
		</$Item>
	);
};