import { $Home } from './style';
import deslogar from '../../assets/deslogar.svg';
import circlePositive from '../../assets/circlePositive.svg';
import circleNegative from '../../assets/circleNegative.svg';
import { Link } from 'react-router-dom';

export const Home = () => {
	return (
		<$Home>
			<header>
				<h1>Olá, ContextName</h1>
				<img src={deslogar} alt='deslogar' />
			</header>
			<main>
				<p>Não há registros de entrada ou saída</p>
			</main>
			<footer>
				<Link to={'/item/entrada'} >
					<button>
						<img src={circlePositive} alt='circlePositive' />
						<span>Nova entrada</span>
					</button>
				</Link>
				<Link to={'/item/saída'} >
					<button>
						<img src={circleNegative} alt='circleNegative' />
						<span>Nova entrada</span>
					</button>
				</Link>
			</footer>
		</$Home>
	);
};