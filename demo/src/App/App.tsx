import './App.css';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Main from './Main/Main';



export default function App () {

	return (
		<div className="min-h-screen flex flex-col">
			<Header />
			<Main />
			<Footer />
		</div>
	);
}
