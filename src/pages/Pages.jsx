import Home from './Home.jsx';
import Contact from './Contact.jsx';
import { Routes, Route } from 'react-router-dom';
import About from './About.jsx';

function Pages() {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/kontakt/' element={<Contact />} />
			<Route path='/about/' element={<About />} />
		</Routes>
	);
}

export default Pages;
