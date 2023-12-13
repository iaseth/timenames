import { red } from 'redicons';
import './App.css';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Main from './Main/Main';

import rediconsJson from "./redicons.json";
const icons = rediconsJson.icons;
red.addIcons(icons);



export default function App () {

	return (
		<div className="">
			<Header />
			<Main />
			<Footer />
		</div>
	);
}
