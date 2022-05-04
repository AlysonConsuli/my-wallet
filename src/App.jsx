import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import { Login } from './components/Login';
import { SignUp } from './components/SignUp';
import { UserContext } from './contexts/UserContext';
import { GlobalStyle } from './style';

export const App = () => {

	const [user, setUser] = useState({
		name: '',
		email: '',
		password: ''
	});

	return (
		<>
			<GlobalStyle />
			<UserContext.Provider value={{ user, setUser }}>
				<BrowserRouter>
					<Routes>
						<Route path='/' element={<Login />} />
						<Route path='/cadastro' element={<SignUp />} />
						<Route path='/homepage' element={<Home />} />
					</Routes>
				</BrowserRouter>
			</UserContext.Provider>
		</>
	);
};