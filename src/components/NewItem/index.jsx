import axios from 'axios';
import { useState } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import { useNavigate, useParams } from 'react-router-dom';
import { $NewItem } from './style';
import dayjs from 'dayjs';

export const NewItem = () => {

	const navigate = useNavigate();
	const { type } = useParams();
	const URL = 'https://localhost:5000/items';
	const date = dayjs().format('DD/MM');

	const [newItem, setNewItem] = useState({
		value: '',
		description: '',
		type,
		date
	});
	const [disable, setDisable] = useState(false);

	function SaveItem(e) {
		e.preventDefault();
		setDisable(true);

		const promise = axios.post(URL, newItem);
		promise.then((res) => {
			const { data } = res;
			console.log(data);
			navigate('/homepage');
		});
		promise.catch(err => {
			console.log(err.response.data);
			alert('Erro ao salvar o item');
			setDisable(false);
		});
	}

	if (type !== 'entrada' && type !== 'saída') {
		return '';
	}

	return (
		<$NewItem>
			<header>
				<h1>Nova {type}</h1>
			</header>
			<form onSubmit={SaveItem}>
				<input
					type="number"
					name="value"
					id="value"
					required
					placeholder="Valor"
					onChange={e => setNewItem({ ...newItem, value: e.target.value })}
					value={newItem.value}
					disabled={disable}
					autoComplete="off"
					min="0"
				/>
				<input
					type="text"
					name="description"
					id="description"
					required
					placeholder="Descrição"
					onChange={e => setNewItem({ ...newItem, description: e.target.value })}
					value={newItem.description}
					disabled={disable}
					autoComplete="off"
				/>
				<button type="submit" disabled={disable}>
					{disable ? <ThreeDots color="#FFFFFF" height='46' width='46' ariaLabel='loading' /> : `Salvar ${type}`}
				</button>
			</form>
		</$NewItem>
	);
};