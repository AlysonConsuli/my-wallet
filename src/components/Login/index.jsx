import axios from 'axios';
import { useContext, useState } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import { $Login } from './style';

export const Login = () => {

	const navigate = useNavigate();
	const URL = 'https://localhost:5000/login';

	const [userLogin, setUserLogin] = useState({
		email: '',
		password: ''
	});
	const [disable, setDisable] = useState(false);

	const {user, setUser} = useContext(UserContext);

	function Enter(e) {
		e.preventDefault();
		setDisable(true);
        
		const promise = axios.post(URL, userLogin);
		promise.then((res) => {
			const { data } = res;
			const { name, email, password } = data;
			setUser({ ...user, name, email, password });
			navigate('/homepage');
		});
		promise.catch(err => {
			console.log(err.response.data);
			alert('Erro ao fazer Login');
			setDisable(false);
		});
	}

	return (
		<$Login>
			<h1>MyWallet</h1>
			<form onSubmit={Enter}>
				<input
					type="email"
					name="email"
					id="email"
					required
					placeholder="E-mail"
					onChange={e => setUserLogin({ ...userLogin, email: e.target.value })}
					value={userLogin.email}
					disabled={disable}
				/>
				<input
					type="password"
					name="password"
					id="password"
					required
					placeholder="Senha"
					onChange={e => setUserLogin({ ...userLogin, password: e.target.value })}
					value={userLogin.password}
					disabled={disable}
				/>
				<button type="submit" disabled={disable}>
					{disable ? <ThreeDots color="#FFFFFF" height='51' width='51' ariaLabel='loading' /> : 'Entrar'}
				</button>
			</form>
			<Link to='/cadastro'>
				<span>Primeira vez? Cadastre-se!</span>
			</Link>
		</$Login>
	);
};