import axios from 'axios';
import { useContext, useState } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import { useNavigate, useParams } from 'react-router-dom';
import { $NewItem } from './style';
import dayjs from 'dayjs';
import { UserContext } from '../../contexts/UserContext';

export const NewItem = () => {

	const navigate = useNavigate();
	const { type } = useParams();
	const URL = 'https://my-wallet-api.onrender.com/items';
	const date = dayjs().format('DD/MM');

	const [newItem, setNewItem] = useState({
		value: '',
		description: '',
		type,
		date
	});
	const [disable, setDisable] = useState(false);

	const { user } = useContext(UserContext);
	const config = {
		headers: {
			'Authorization': `Bearer ${user.token}`
		}
	};

	function SaveItem(e) {
		e.preventDefault();
		setDisable(true);

		const promise = axios.post(URL, newItem, config);
		promise.then(() => navigate('/homepage'));
		promise.catch(() => {
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
					step="0.01"
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