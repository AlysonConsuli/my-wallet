/* eslint-disable no-unused-vars */
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
	
	//exemplo local:
	useEffect(() => setItems([
		{
			value: 30.45,
			description: 'Teste',
			type: 'entrada',
			date: '04/05'
		},
		{
			value: 10.45,
			description: 'Teste 2',
			type: 'saída',
			date: '05/05'
		}
	]), []);
	//fim do exemplo

	let balance = 0;

	const navigate = useNavigate();
	const URL = 'https://localhost:5000/items';
	const { user, setUser } = useContext(UserContext);

	/*useEffect(() => {
		const promise = axios.get('http://localhost:5000/items');
		promise.then(res => {
			const { data } = res;
			console.log(data);
			setItems(data);
		});
		promise.catch(err => {
			console.log(err.response.data);
			alert('Erro ao pegar os itens');
		});
	}, []);*/

	function logOut() {
		setUser({
			...user,
			name: '',
			email: '',
			password: ''
		});
		navigate('/');
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