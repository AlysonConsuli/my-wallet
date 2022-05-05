/* eslint-disable no-unused-vars */
import { $Home, Balance, Wallet } from './style';
import deslogar from '../../assets/deslogar.svg';
import circlePositive from '../../assets/circlePositive.svg';
import circleNegative from '../../assets/circleNegative.svg';
import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../contexts/UserContext';
import axios from 'axios';
import { Item } from './Item';

export const Home = () => {

	const [items, setItems] = useState([]);
	useEffect(() => setItems(['item1', 'item2','item1', 'item2','item1', 'item2','item1', 'item2','item1', 'item2','item1', 'item2','item1', 'item2','item1', 'item2','item1', 'item2','item1', 'item2','item1', 'item2','item1', 'item2','item1', 'item2','item1', 'item2','item1', 'item2','item1', 'item2','item1', 'item2','item1', 'item2']), []);

	const URL = 'https://localhost:5000/items';
	const { user } = useContext(UserContext);

	/*useEffect(() => {
		const promise = axios.get('https://localhost:5000/items');
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

	return (
		<$Home>
			<header>
				<h1>Olá, ContextName</h1>
				<img src={deslogar} alt='deslogar' />
			</header>
			<main>
				{items.length === 0 ?
					<p>Não há registros de entrada ou saída</p>
					:
					<>
						<Wallet>
							{items.map((item, i) => {
								return (
									<Item key={i} />
								);
							})}
						</Wallet>
						<Balance>
							Saldo
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