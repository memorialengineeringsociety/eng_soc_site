import {Navbar} from './NavBar';
import {Footer} from './Footer';

export default function Layout({ children }) {
	return (
		<div className="bg-white">
			<link rel="icon" href="/eng_soc.ico"/>
			<Navbar />
			<main>{children}</main>
			<Footer />
		</div>
	)
}
