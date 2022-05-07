import axios from 'axios';
import { useState } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import { Link, useNavigate } from 'react-router-dom';
import { $SignUp } from './style';

export const SignUp = () => {
	const navigate = useNavigate();
	const URL = 'http://localhost:5000/users';

	const [newUser, setNewUser] = useState({
		name: '',
		email: '',
		password: '',
		repeatPassword: ''
	});
	const [disable, setDisable] = useState(false);

	function Register(e) {
		e.preventDefault();
		if (newUser.password !== newUser.repeatPassword) {
			return alert('Senha incorreta');
		}
		setDisable(true);

		const promise = axios.post(URL, newUser);
		promise.then((res) => {
			const { data } = res;
			console.log(data);
			navigate('/');
		});
		promise.catch(err => {
			console.log(err.response);
			setDisable(false);
			if (err.response.status === 409) {
				return alert('Usuário já existe.');
			}
			if (err.response.status === 422) {
				return alert('Preencha os dados corretamente.');
			}
			alert('Erro ao fazer Cadastro');
		});
	}

	return (
		<$SignUp>
			<h1>MyWallet</h1>
			<form onSubmit={Register}>
				<input
					type="text"
					name="name"
					id="name"
					required
					placeholder="Nome"
					onChange={e => setNewUser({ ...newUser, name: e.target.value })}
					value={newUser.name}
					disabled={disable}
					autoComplete="off"
				/>
				<input
					type="email"
					name="email"
					id="email"
					required
					placeholder="E-mail"
					onChange={e => setNewUser({ ...newUser, email: e.target.value })}
					value={newUser.email}
					disabled={disable}
					autoComplete="off"
				/>
				<input
					type="password"
					name="password"
					id="password"
					required
					placeholder="Senha"
					onChange={e => setNewUser({ ...newUser, password: e.target.value })}
					value={newUser.password}
					disabled={disable}
					autoComplete="off"
					minLength="3"
					pattern="^[a-zA-Z0-9]{3,}$"
					title="Apenas letras e números. Tamanho mínimo de 3 caracteres."
				/>
				<input
					type="password"
					name="Repeat Password"
					id="repeatPassword"
					required
					placeholder="Confirme a senha"
					onChange={e => setNewUser({ ...newUser, repeatPassword: e.target.value })}
					value={newUser.repeatPassword}
					disabled={disable}
					autoComplete="off"
				/>
				<button type="submit" disabled={disable}>
					{disable ? <ThreeDots color="#FFFFFF" height='46' width='46' ariaLabel='loading' /> : 'Cadastrar'}
				</button>
			</form>
			<Link to='/'>
				<span>Já tem uma conta? Entre agora!</span>
			</Link>
		</$SignUp>
	);
};