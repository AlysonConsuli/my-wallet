import { $Home, Balance, Wallet } from './style';
import deslogar from '../../assets/deslogar.svg';
import circlePositive from '../../assets/circlePositive.svg';
import circleNegative from '../../assets/circleNegative.svg';
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../contexts/UserContext';
import axios from 'axios';
import { Item } from './Item';

export const Home = () => {

	const [items, setItems] = useState([]);
	const [refresh, setRefresh] = useState(false);

	let balance = 0;

	const navigate = useNavigate();
	const URL = 'http://localhost:5000/items';
	const { user, setUser } = useContext(UserContext);
	const config = {
		headers: {
			'Authorization': `Bearer ${user.token}`
		}
	};

	useEffect(() => {
		const promise = axios.get(URL, config);
		promise.then(res => {
			const { data } = res;
			setItems(data);
		});
		promise.catch(() => alert('Erro ao pegar os itens'));
	}, [refresh]);

	function logOut() {
		const confirmation = confirm('Deseja realmente fazer log-out?');
		if (confirmation) {
			const promise = axios.delete('http://localhost:5000/session', config);
			promise.then(() => {
				localStorage.clear();
				setUser({ ...user, name: '', token: '' });
				navigate('/');
			});
			promise.catch(() => alert('Erro ao fazer log-out'));
		}
	}

	function callbackDelete(id) {
		const promise = axios.delete(`http://localhost:5000/items/${id}`, config);
		promise.then(() => setRefresh(!refresh));
		promise.catch(() => alert('Erro ao apagar o item'));
	}

	return (
		<$Home>
			<header>
				<h1>Olá, {user.name}</h1>
				<img onClick={logOut} src={deslogar} alt='deslogar' />
			</header>
			<main>
				{items.length === 0 ?
					<p>Não há registros de entrada ou saída</p>
					:
					<>
						<Wallet>
							{items.map((item, i) => {
								item.type === 'entrada' ?
									balance += Number(item.value) :
									balance -= Number(item.value);
								return (
									<Item
										key={i}
										value={item.value}
										description={item.description}
										type={item.type}
										date={item.date}
										id={item.id}
										callbackDelete={() => callbackDelete(item.id)}
									/>
								);
							})}
						</Wallet>
						<Balance balance={balance}>
							<span>Saldo</span>
							<span>{balance.toFixed(2).replace('.', ',')}</span>
						</Balance>
					</>
				}
			</main>
			<footer>
				<Link to={'/item/entrada'} >
					<img src={circlePositive} alt='circlePositive' />
					<span>Nova entrada</span>
				</Link>
				<Link to={'/item/saída'} >
					<img src={circleNegative} alt='circleNegative' />
					<span>Nova entrada</span>
				</Link>
			</footer>
		</$Home>
	);
};