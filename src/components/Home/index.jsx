import { $Home } from './style';
import deslogar from '../../assets/deslogar.svg';
import circlePositive from '../../assets/circlePositive.svg';
import circleNegative from '../../assets/circleNegative.svg';

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
				<button>
					<img src={circlePositive} alt='circlePositive' />
					<span>Nova entrada</span>
				</button>
				<button>
					<img src={circleNegative} alt='circleNegative' />
					<span>Nova entrada</span>
				</button>
			</footer>
		</$Home>
	);
};