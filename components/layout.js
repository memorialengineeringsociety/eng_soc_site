import {Navbar} from './NavBar';
import {Footer} from './Footer';

export default function Layout({ children }) {
	return (
		<div className="bg-white">
			<link rel="icon" href="/eng_soc.ico"/>
			<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
			<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet" />
			<Navbar />
			<main>{children}</main>
			<Footer />
		</div>
	)
}
