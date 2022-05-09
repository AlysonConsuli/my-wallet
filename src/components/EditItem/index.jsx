import axios from 'axios';
import { useContext, useState } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import { useNavigate, useParams } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import { $NewItem } from '../NewItem/style';

export const EditItem = () => {

	const navigate = useNavigate();
	const { type } = useParams();
	const { id } = useParams();
	const URL = `http://localhost:5000/items/${id}`;

	const [editItem, setEditItem] = useState({
		value: '',
		description: ''
	});
	const [disable, setDisable] = useState(false);

	const { user } = useContext(UserContext);
	const config = {
		headers: {
			'Authorization': `Bearer ${user.token}`
		}
	};

	function UptadeItem(e) {
		e.preventDefault();
		setDisable(true);

		const promise = axios.put(URL, editItem, config);
		promise.then((res) => {
			const { data } = res;
			console.log(data);
			navigate('/homepage');
		});
		promise.catch(err => {
			console.log(err.response.data);
			alert('Erro ao editar o item');
			setDisable(false);
		});
	}

	if (type !== 'entrada' && type !== 'saída') {
		return '';
	}

	return (
		<$NewItem>
			<header>
				<h1>Editar {type}</h1>
			</header>
			<form onSubmit={UptadeItem}>
				<input
					type="number"
					name="value"
					id="value"
					required
					placeholder="Valor"
					onChange={e => setEditItem({ ...editItem, value: e.target.value })}
					value={editItem.value}
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
					onChange={e => setEditItem({ ...editItem, description: e.target.value })}
					value={editItem.description}
					disabled={disable}
					autoComplete="off"
				/>
				<button type="submit" disabled={disable}>
					{disable ? <ThreeDots color="#FFFFFF" height='46' width='46' ariaLabel='loading' /> : `Atualizar ${type}`}
				</button>
			</form>
		</$NewItem>
	);
};