import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import { $Login, AutoLogin } from './style';

export const Login = () => {

	const navigate = useNavigate();
	const URL = 'http://localhost:5000/login';

	const [userLogin, setUserLogin] = useState({
		email: '',
		password: ''
	});
	const [disable, setDisable] = useState(false);

	const { user, setUser } = useContext(UserContext);

	function Enter(e) {
		e.preventDefault();
		setDisable(true);

		const promise = axios.post(URL, userLogin);
		promise.then((res) => {
			const { data } = res;
			const { name, token } = data;
			setUser({ ...user, name, token });

			const userSerialized = JSON.stringify({ name, token });
			localStorage.setItem('user', userSerialized);

			navigate('/homepage');
		});
		promise.catch(err => {
			setDisable(false);
			if (err.response.status === 404) {
				return alert('Usuário não encontrado');
			}
			if (err.response.status === 401) {
				return alert('Senha Incorreta!');
			}
			if (err.response.status === 422) {
				return alert('Preencha os dados corretamente.');
			}
			alert('Erro ao fazer Login');
		});
	}

	const config = {
		headers: {
			'Authorization': `Bearer ${user.token}`
		}
	};
	useEffect(() => {
		if (user.token.length !== 0) {
			const promise = axios.post('http://localhost:5000/auto-login', {}, config);
			promise.then(() => {
				navigate('/homepage');
			});
			promise.catch(() => alert('Erro ao fazer o auto-login'));

			return (
				<AutoLogin>
					<h1>Logando...</h1>
					<ThreeDots color="#FFFFFF" height={80} width={80} />
				</AutoLogin>
			);
		}
	}, []);

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
					minLength="3"
					pattern="^[a-zA-Z0-9]{3,}$"
					title="Apenas letras e números. Tamanho mínimo de 3 caracteres."
				/>
				<button type="submit" disabled={disable}>
					{disable ? <ThreeDots color="#FFFFFF" height='46' width='46' ariaLabel='loading' /> : 'Entrar'}
				</button>
			</form>
			<Link to='/cadastro'>
				<span>Primeira vez? Cadastre-se!</span>
			</Link>
		</$Login>
	);
};